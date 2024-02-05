import { About } from "./components/About/About";
import { Contacts } from "./components/Contacts/Contacts";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Reviews } from "./components/Reviews/Reviews";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
