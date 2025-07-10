import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CommandPalette from './components/CommandPalette';
import Background from './components/Background';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-transparent relative">
        <Background />
        <CommandPalette />
        <Navbar />
        <main className="container mx-auto px-4 py-8 relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        {/* Keyboard shortcut hint */}
        <div className="fixed bottom-4 right-4 text-text-secondary text-sm bg-header-bg/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-border-color/50 shadow-lg">
          Press <kbd className="px-2 py-1 text-xs font-semibold bg-search-hover/80 rounded border border-border-color/50">⌘</kbd> + <kbd className="px-2 py-1 text-xs font-semibold bg-search-hover/80 rounded border border-border-color/50">K</kbd> to search
        </div>
      </div>
    </Router>
  );
}

export default App;