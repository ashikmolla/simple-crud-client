// import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const lodedeUser = useLoaderData();

    const handleUpdate=event=>{
        event.preventDefault();
        const form=event.target;
        const name =form.name.value;
        const email =form.email.value;
        console.log(name, email);
        const updatedUser={name, email}
        fetch(`http://localhost:3000/users/${lodedeUser._id}`,{
            method:'PUT',
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(updatedUser)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                alert('User Data Updete SuscessFull')
            }
        })
    }
    return (
        <div>
            <h1>Update Information of {lodedeUser.name}</h1>
            <form onSubmit={handleUpdate}>
                <input type="text" name='name' id='' placeholder='Name' defaultValue={lodedeUser?.name} required />
                <br />
                <br />
                <input type="text" name='email' id='' placeholder='email' defaultValue={lodedeUser?.email} required />
                <br />
                <br />
                <input type="submit" value='Update' id='' />
            </form>

        </div>
    );
};

export default Update;