import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen text-slate-900 bg-[radial-gradient(60%_50%_at_20%_0%,rgba(99,102,241,0.12),transparent),radial-gradient(50%_50%_at_80%_20%,rgba(56,189,248,0.12),transparent)]">
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
