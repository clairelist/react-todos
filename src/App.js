import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div className="app-wrapper">
      <header><h2> TODOS master view </h2></header>
    <div className="App">
      
      
      
      <Todos />
      
      {/* {the below exists to fix the background not being fully colored issue} 
        DO NOT REMOVE!
      */}
      <div className='another-element'></div>
    </div>
    </div>
  );
}

export default App;
