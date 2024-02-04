import { About } from "./components/About/About";
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
      </main>
      <footer></footer>
    </>
  );
}

export default App;
