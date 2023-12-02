import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Students = () => {

    const [student , setStudent]=useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8001/')
        .then(res=>setStudent(res.data))
        .catch(err => console.log(err));
    },[])

    const hanleDelete= async (id)=>{
        try {
            await axios.delete(`http://localhost:8001/student/${id}`);
            window.location.reload();
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to='/create' className="btn btn-success">ADD +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((item,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{item.Names}</td>
                                    <td>{item.Email}</td>
                                    <td>
                                        <Link to={`update/${item.ID}`} className='btn btn-primary'>Update</Link>
                                        <button onClick={e=>hanleDelete(item.ID)} className='btn btn-danger ms-2'>Delete</button>
                                    </td>
                                </tr>
                                )
                            })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Students