import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router";

const Createstudent = () => {
    const [name , setName] = useState('');
    const [email, setEmail] =useState('');
    const navigate = useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:8001/create',{name,email})
        .then(res=>{
            // console.log(res);
            navigate('/')
        }).catch(err=> console.log(err));

    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Add Student</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type='text' name='name' placeholder='Enter Name' className='form-control'
                    onChange={e=> setName(e.target.value)} />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type='text' name='name' placeholder='Enter Email' className='form-control' 
                    onChange={e=>setEmail(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Createstudent