import React from 'react';
import {useState, useEffect} from 'react';


const TeamForm = props => {

    const [newTeamData, setNewTeamData] = useState({
        name: '',
        email: '',
        role: ''
      });
    
     
    const onInputChange = event => {
        setNewTeamData({ ...newTeamData, [event.target.name]: event.target.value,
        })
    }
    const submitForm = event => {
        event.preventDefault();
        props.addNewTeamMember(newTeamData);
        setNewTeamData({ name: "", email: "", role: "" });
      };

useEffect(() => {
const setEdit = edit => {
props.memberToEdit = newTeamData;
}
})

return (
<form onSubmit = {submitForm}>
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
        <button type ="submit">Save Team Member</button>

</form>

)


}


export default TeamForm;