import './App.css';
import {useState} from 'react'
import NavBar from '../../components/NavBar/NavBar';
import {Routes, Route} from 'react-router-dom';
import Main from '../Main/Main';
import NyBrewInfo from '../NyBrewInfo/NyBrewInfo'
import NyBrewList from '../NyBrewList/NyBrewList';
import FlBrewInfo from '../FlBrewInfo/FlBrewInfo';
import FlBrewList from '../FlBrewList/FlBrewList';



function App() {

  const [user, setUser] = useState('')

  return (
<main className="App">
        <>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/nybreweries' element={<NyBrewList/>}/>
          <Route path='/flbreweries' element={<FlBrewList/>}/>
          <Route path='/nybrewery/:id' element={<NyBrewInfo/>}/>
          <Route path='/flbrewery/:id' element={<FlBrewInfo/>}/>
        </Routes>
        </>
    </main>
  );
}

export default App;

 