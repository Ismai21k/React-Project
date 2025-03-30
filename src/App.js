import './App.css';
import Nabvar  from './nabvar';

// the goal of this project is to create a simple react app
// that render a simple message Hello World! in h1 tag

function App() {
 
  return(
    <div className="App">
      <div className="content">
        <Nabvar />
        <h1>Hello World!</h1>
        
      </div>
    </div>
  )
};

export default App;
