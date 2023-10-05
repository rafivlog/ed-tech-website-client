import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Studentinfo = () => {
    const users = useLoaderData();

    const handleDelete = _id =>{
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method:'DELETE',

        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount>0){
                alert('deleted successfull')
            }
        })
    }
    return (
        <div>
            <h2>Total User :{users.length}</h2>
            <div>
                {
                    users.map(user =>
                        <p key={user._id}>
                           FirstName :{user.name} <br/>
                           LastName : {user.namee}
                           <br></br> 
                           <button onClick={()=>handleDelete(user._id)}
                           >Delete</button>
                        </p>)
                }
                
            </div>
            
        </div>
    );
};

export default Studentinfo;