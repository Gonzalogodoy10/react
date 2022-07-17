import './App.css';
import ItemDetailContainer from './components/itemDetailContainer'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <hr/>
      <ItemDetailContainer id={4}/>
    </div>
  );
}

export default App;
