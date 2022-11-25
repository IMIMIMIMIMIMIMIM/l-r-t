import logo from './logo.svg';
import './App.css';
import PrintMyName from './component/PrintMyName';
import { useState } from 'react';
import axios from "axios";

function App() {
  const [user,setUsers] = useState([]);
  const getUsers = async()=>{
    const {data} = await axios.get("http://192.168.0.14:5000/user");
    setUsers(data);
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getUsers}>getUsers</button>
        {user.map((el)=>(
          <PrintMyName name={el.name}></PrintMyName>
        ))}
        
      </header>
    </div>
  );
}

export default App;
