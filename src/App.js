import logo from './logo.svg';
import './App.css';
import PrintMyName from './component/PrintMyName';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PrintMyName name="123"></PrintMyName>
        <PrintMyName name="456"></PrintMyName>
      </header>
    </div>
  );
}

export default App;
