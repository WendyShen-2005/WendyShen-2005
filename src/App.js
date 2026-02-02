import './App.css';
import Contents from './components/sections/Contents';
import Sidebar from './components/Sidebar';
import Intro from './components/sections/Intro';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const headers = Array.from(document.querySelectorAll('.headers'));
    headers.forEach((h, i) => {
      // start hidden
      h.classList.add('pre-animate');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // alternate directions
            const dir = i % 2 === 0 ? 'in-left' : 'in-right';
            h.classList.add(dir);
            h.classList.remove('pre-animate');
            observer.disconnect();
          }
        });
      }, { threshold: 0.2 });
      observer.observe(h);
    });
  }, []);

  return (
    <div>
      <Intro/>
      <div className='App'>
        <Sidebar />
        <div className='content-container'>
          <Contents/>
        </div>
      </div>
    </div>
  );
}

export default App; 
