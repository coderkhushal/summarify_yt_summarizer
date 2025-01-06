import Navbar from './components/Navbar';
import SearchSection from './components/SearchSection';
import './index.css';
function App() {

  return (
    <div className="min-h-screen bg-gray-300">

      <Navbar/>
      <SearchSection />
    </div>
  );
}

export default App;