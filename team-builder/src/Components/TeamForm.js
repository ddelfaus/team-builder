import React from 'react';
import {useState} from 'react';


const TeamForm = props => {

    const [newTeamData, setNewTeamData] = useState({
        name: '',
        email: '',
        role: ''
      });
    
     
    const onInputChange = event => {
        setNewTeamData({
            ...newTeamData,
            [event.target.name]: event.target.value,
        })
    }
 

return (
<form>
    <input
        name ="name"
        id = "name"
        type = "text"
        placeholder ="name"
         onChange = {onInputChange}

    />
    <input
        name ="email"
        id = "email"
        type = "text"
        placeholder ="email"
        onChange = {onInputChange}
    />

<input
        name ="role"
        id = "role"
        type = "text"
        placeholder ="role"
         onChange = {onInputChange}
    />


</form>

)


}


export default TeamForm;