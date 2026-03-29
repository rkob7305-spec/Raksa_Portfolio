export default function RSLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="RS Logo"
    >
      {/* Shield/emblem shape */}
      <path
        d="M30 2 L56 14 L56 42 C56 55 42 66 30 68 C18 66 4 55 4 42 L4 14 Z"
        fill="black"
        stroke="none"
      />
      {/* R letter */}
      <text
        x="8"
        y="46"
        fontFamily="'Geist', sans-serif"
        fontWeight="900"
        fontSize="28"
        fill="white"
        letterSpacing="-1"
      >
        RS
      </text>
    </svg>
  )
}
