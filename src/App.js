import './App.css';
import Contents from './components/sections/Contents';
import Sidebar from './components/Sidebar';
import Intro from './components/sections/Intro';

function App() {
  return (
    <div>
      <Intro/>
      <div className='App'>
        <Sidebar/>
        <div className='content-container'>
          <Contents/>
        </div>
      </div>
    </div>
  );
}

export default App;
