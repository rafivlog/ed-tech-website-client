// import { useNavigate } from "react-router-dom";

const Studentdetail = () => {

    // const [usser,setUser] = useState(null);

    const studentinfo= event =>{

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const namee = form.namee.value;
        const user = {name,namee};
        // const  navigate = useNavigate();
        
        console.log(user);
        // setUsert(usser);
        fetch("http://localhost:5000/users",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                
                alert('user added succesfully')
                form.reset();
               
            }
            
        })
        // navigate('/Studentinfo')

        // event.target.reset();

    }

   
    


    return (
        <div>
            <h1>Add Student Information</h1>
            <form onSubmit={studentinfo}>
                <input type="name" name="name" required
                id="name" placeholder='Your FirstName' /><br/>
                <input type="name"  name="namee" required
                id="namee" placeholder='Your SecondName ' /><br/>
                 
                <input type="submit" value="Add" />
            </form>


            
        </div>
    );
};

export default Studentdetail;