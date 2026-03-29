"use client";

import { createContext, useContext, useState, useCallback } from 'react';

interface AnimationContextType {
  hasAnimated: (key: string) => boolean;
  markAsAnimated: (key: string) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());

  const hasAnimated = useCallback((key: string) => {
    return animatedElements.has(key);
  }, [animatedElements]);

  const markAsAnimated = useCallback((key: string) => {
    setAnimatedElements(prev => new Set(prev).add(key));
  }, []);

  return (
    <AnimationContext.Provider value={{ hasAnimated, markAsAnimated }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation(key: string) {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within AnimationProvider');
  }

  const { hasAnimated, markAsAnimated } = context;
  const animated = hasAnimated(key);

  return {
    shouldAnimate: !animated,
    markAnimated: () => markAsAnimated(key),
  };
}
