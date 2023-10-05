import React, { useState } from 'react';
import './Register.css'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.init';
import Studentdetail from '../Studenddetail/Studentdetail';
import { useNavigate } from 'react-router-dom';
const auth = getAuth(app);

// const  navigate = useNavigate();
const Register = () => {

    const [user,setUser] = useState(null);
    const [error,setError] = useState('');
    const [success,setSuccess] = useState()
    const  navigate = useNavigate();

    const handleSubmit = (event) =>{

        event.preventDefault();
        setSuccess('');
        setUser("");
        const email = event.target.email.value;
        const password = event.target.password.value;
        //create user firebase
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const logeduser = result.user;
            console.log(logeduser);
            setUser(logeduser);
            setError('');
            setSuccess('user has been created succesfully')
            event.target.reset();
            navigate('/studentdetail')

        })
        .catch(error =>{
            console.error(error.message);
            setError(error.message);
        })
        
    }

   

   



    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" required
                id="email" placeholder='Your Email' /><br/>
                <input type="password"  name="password" required
                id="password" placeholder='Your password' /><br/>
                 <p>{error}</p><br/>
                <input type="submit" value="Register" />
                <p>{success}</p>
            </form>

            {/* {
                user && <Routes>
                    <Route path="/studentdetail" element={<Studentdetail></Studentdetail> }/>
                    </Routes>
            } */}
            
           
           
        </div>
        
    );
};

export default Register;