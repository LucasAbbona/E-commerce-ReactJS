import logo from './logo.svg';
import './App.css';
import Cart from './components/NavBar/CartWidget/CartWidget';
import NavBar from './components/NavBar/NavBar';
import Landing from './pages/ItemListContainer/ItemListContainer';
function App() {
  return (
      <>
      <NavBar />
      <Landing brand={"Luxury House"} />
      </>
      
      
  );
}

export default App;
