import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function AddUser()
{
    const [formData, setFormData] = useState([]);
    const navigate = useNavigate();
    
    function handleInput(e){
        console.log(e.target.id, e.target.value);
        if (e) {
            const formCopy = {
              ...formData
            };
            formCopy[e.target.id] = e.target.value;
            setFormData(formCopy);
          }  
    }

    function handleUpdateUser(e)
    {
        fetch("http://localhost:5000/api/user/create",{
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((response) => {if(response.message === "User Created Successfully!!!"){
            alert("New User created successfully!!!");
            navigate("/");
            window.location.reload();
        }})
        .catch((error) => console.log(error))
    }
    return(
        <>
            <div className="container mt-5" style={{width: "50%",
                height: "74%",
                border: "2px solid #ff9999",
                backgroundColor:"white",
                borderRadius: "10px"}}> 
                <h1 className="card-header" style={{textAlign: "center"}}>Update User Details</h1>
                <div className="row mt-4">
                    <div className="col-lg-4">
                        <label htmlFor="name">Name</label>
                        <span className="ms-2" style={{color: "red", fontSize: "20px"}}>*</span>
                    </div>
                    <div className="col-lg-8">
                        <input className="form-control" type="text" placeholder="Enter first name" id="name" required onChange={handleInput}/>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-lg-4">
                        <label htmlFor="username">Username</label>
                        <span className="ms-2" style={{color: "red", fontSize: "20px"}}>*</span>
                    </div>
                    <div className="col-lg-8">
                        <input className ="form-control" type="text" placeholder="Enter Username" id="username" required onChange={handleInput}/>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-lg-4">
                        <label htmlFor="email">Email</label>
                        <span className="ms-2" style={{color: "red", fontSize: "20px"}}>*</span>
                    </div>
                    <div className="col-lg-8">
                        <input className ="form-control" type="text" placeholder="Enter Email Id" id="email" required onChange={handleInput}/>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-lg-4">
                        <label htmlFor="address">Address</label>
                        <span className="ms-2" style={{color: "red", fontSize: "20px"}}>*</span>
                    </div>
                    <div className="col-lg-8">
                        <input className ="form-control" type="text" placeholder="Enter Address" id="address" required onChange={handleInput}/>
                    </div>  
                </div>
                <div className="row mt-2">
                    <div className="col-lg-4">
                        <label htmlFor="phoneNo">Phone Number</label>
                        <span className="ms-2" style={{color: "red", fontSize: "20px"}}>*</span>
                    </div>
                    <div className="col-lg-8">
                        <input className ="form-control" type="text" placeholder="Enter phone number" id="phoneNo" required onChange={handleInput}/>
                    </div>
                </div>
                <div className="row mt-3 mb-4" style={{display: "flex", justifyContent: "center"}}>
                    <button className ="btn btn-primary" style={{width: "20%"}} onClick={handleUpdateUser}>submit</button>
                </div>
            </div>    
        </>
    )
}