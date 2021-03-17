import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name,email,id} = props.friend;
    const history = useHistory();
    const handleClick = (friendId) =>{
        const url = `/friend/${friendId}`;
        history.push(url);
    }

    const friendStyle ={
        border:'1px solid purple',
        margin:'20px',
        padding:' 20px',
        borderRadius:'10px',
       
    }
    return (
        <div style={friendStyle}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
        <p> id: <Link to={`/friend/${id}`}><button> Show detail of  {id} </button></Link> </p>
        <button onClick={() => handleClick(id)}>Click Me</button>
        </div>
    );
};

export default Friend;