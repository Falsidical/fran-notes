import './App.css';
import Footer from './Components/UI/Footer/Footer';
import Navbar from './Components/UI/Navbar/Navbar';
import NotesContainer from './Components/Notes/NotesContainer';

function App() {
  return (
    <div className="flex-container">
      <Navbar />
      <NotesContainer />
      <Footer />
    </div>
  );
}

export default App;
