import React from 'react';



const Team = props => {

console.log("props",props);
return (

    <div className = "team-list">
        {props.teamData.map((teamMember, index) => {
            return (
                <div className = "teamMember" key ={index}>
                  <h4>{`Name: ${teamMember.name} Email: ${teamMember.email} Role: ${teamMember.role}`}</h4>
                  <button > Edit</button>
                </div>
            )
        })}



    </div>
)


}

export default Team;