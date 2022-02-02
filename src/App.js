import './App.css';
import Footer from './Components/UI/Footer/Footer';
import Navbar from './Components/UI/Navbar/Navbar';
import NotesContainer from './Components/Notes/NotesContainer';
import NotesProvider from './Context/NotesProvider';

function App() {
  return (
    <NotesProvider>
      <div className="flex-container">
        <Navbar />
        <NotesContainer />
        <Footer />
      </div>
    </NotesProvider>
  );
}

export default App;
