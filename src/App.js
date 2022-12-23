import logo from './logo.svg';
import './App.css';
import Cart from './components/CartWidget';
import NavBar from './components/NavBar';
import Landing from './components/ItemListContainer';
import './components/styles.css';
function App() {
  return (
      <>
      <NavBar />
      <Landing brand={"Luxury House"} />
      </>
      
      
  );
}

export default App;
