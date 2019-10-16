import React from 'react';



const Team = props => {

console.log("props",props);
return (

    <div className = "team-list">
        {props.teamData.map((teamMember, index) => {
            return (
                <div className = "teamMember" key ={index}>
                    <h4>{teamMember.name}</h4>
                    <h4>{teamMember.email}</h4>
                    <h4>{teamMember.role}</h4>
                </div>
            )
        })}



    </div>
)


}

export default Team;