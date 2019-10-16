import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';
import TeamForm from './Components/TeamForm'
import Datas from "./Components/Datas"
import Team from "./Components/Team"


function App() {

  const [teamData, setTeamData] = useState(Datas)

  console.log(teamData);
 
const onInputChange = event => {
    setTeamData({
        ...teamData,
        [event.target.name]: event.target.value,
    })
}


  return (

   
    <div className="App">
     <h1>Team Builder!</h1>
    
    <Team teamData ={teamData}/>
    <TeamForm />

    </div>
  );
}

export default App;
