import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="certificates">
          <Certificates />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
