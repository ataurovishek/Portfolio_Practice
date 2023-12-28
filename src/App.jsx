import Cursor from "./cursor";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Parallax from "./components/Parallax/Parallax";

const App = () => {
  return (
    <>
      <Cursor />
      <section>
        <Navbar />
        <Hero />
      </section>
      <section id="Services"><Parallax type="services" /></section>
      <section>Services</section>
      <section id="Portfolio"><Parallax type='portfolio' /></section>
    </>
  );
};

export default App;