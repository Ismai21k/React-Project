import './App.css';
import Nabvar  from './nabvar';

function App() {
  const name = " Ismail kabir";
  const age = 23;
  const country = "Nigeria";
  const city = "Kaduna";
  const hobbies = [" Reading", " Writing", " Coding"];

  return(
    <div className="App">
      <div className="content">
        <Nabvar />
        <h1>App component</h1>
        <h3>Nmae:{name}</h3>
        <p>Age:{ age}</p>
        <p>Hobbies:{hobbies}</p>
        <p>City:{city}</p>
        <p>Country:{country}</p>
        <p>{ Math.random() * 10 }</p>
        <br />
        <a href="https://learn.microsoft.com/en-gb/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.5" target='blank'>Execution policy</a>
      </div>
    </div>
  )
};

export default App;
