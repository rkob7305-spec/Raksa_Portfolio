import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

export default function Page() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Portfolio />
      <Contact />
    </main>
  );
}
