import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import List from './List';
import Form from './Form';
import Login from './Login';
import Exit from './Exit';
function App() {
  const [Isloading,SetLogin] = useState(false);

  const [contacts,setContacts] = useState([]);
  useEffect(()=>{
console.log(contacts);
  },[contacts]);
  return (
    <div className="App">
      <header className="App-header">
       {Isloading?<Form noteContacs={setContacts} contacts={contacts}/>: <Login IsLogin={Isloading} SetLogin={SetLogin}/>}
       {Isloading&&<List noteContacs={setContacts} noteList={contacts}/>}
       {Isloading&&<Exit Isloading={Isloading} SetLogin={SetLogin}/>}

        

      </header>
    </div>
  );
}


export default App;
