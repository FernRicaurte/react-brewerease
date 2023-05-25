import './App.css';
import {useState} from 'react'
import {Routes, Route} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar/NavBar';
import Main from '../Main/Main';
import BrewInfo from '../BrewInfo/BrewInfo'
import StateBrewList from '../StateBrewList/StateBrewList';



function App() {

  const [user, setUser] = useState('')

  return (
<main className="App">
        <>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/:state' element={<StateBrewList/>}/>
          <Route path='/brewery/:name' element={<BrewInfo/>}/>
        </Routes>
        </>
    </main>
  );
}

export default App;

 