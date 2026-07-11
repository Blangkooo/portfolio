import Loader from './components/Loader';
import Twinkles from './components/Twinkles';
import Progress from './components/Progress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useTheme from './hooks/useTheme';

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <Loader />
      <Twinkles />
      <Progress />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="page">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
