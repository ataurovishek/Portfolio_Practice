import Cursor from "./Cursor";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Parallax from "./components/Parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <Cursor />
      <section>
        <Navbar />
        <Hero />
      </section>
      <section id="Parallax"><Parallax type="services" /></section>
      <section id="Services"><Services /> </section>
      <section id="Portfolio"><Parallax type='portfolio' /></section>
      <Portfolio />
      <section><Contact /></section>
    </>
  );
};

export default App;