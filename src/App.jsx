import Cursor from "./cursor";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Parallax from "./components/Parallax/Parallax";
import Services from "./components/services/Services";

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
    </>
  );
};

export default App;