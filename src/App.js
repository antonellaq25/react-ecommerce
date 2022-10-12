import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import ListContainer from './components/ListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ListContainer title={"Kittens Shop"} />
      
    </div>
  );
}

export default App;
