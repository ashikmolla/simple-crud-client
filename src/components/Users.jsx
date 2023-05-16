// import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const lodedUsers = useLoaderData();

    const [users, setUsers] = useState(lodedUsers);


    const handleDeletCard = _id => {
        console.log('delete', _id)
        fetch(`http://localhost:3000/users/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = users.filter(user => user._id !== _id);
                    setUsers(remaining)
                if(data.deleteCount>0){ 
                    alert('Delete Successfully');
                    
                }
            })

    }
    return (
        <div>
            <h1>{users.length}</h1>
            <div>
                {
                    users.map(user => <p
                        key={user._id}>
                        {user.name} : {user.email}
                        <Link to={`/update/${user._id}`}><button>Updated</button></Link>
                        <button
                            onClick={() => handleDeletCard(user._id)}
                        >X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;