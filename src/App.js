import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <hr/>
      <ItemListContainer greeting= "Greeting test"/>
      <hr/>
    </div>
    
  );
}

export default App;
