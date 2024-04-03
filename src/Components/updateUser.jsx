import { useContext, useState } from "react";
import { useLocation } from "react-router-dom"
import { userContext } from "../Context/userContext";

export default function UpdateUser()
{
    const location = useLocation();
    console.log(location.state)
    const [formData, setFormData] = useState([]);
    const {userItem = []} = useContext(userContext);
    
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
        console.log(formData.name);
        userItem.map((data, index) => {
            console.log(index, location.state.id)
            if(index === location.state.id)
            {
                data.name = formData.name;
            }
            console.log(data.name)
        })
    }
    return(
        <>
            <div className="container mt-3" style={{width: "50%",
                height: "50%",
                border: "2px solid #ff9999",
                borderRadius: "10px"}}> 
                <h1 className="card-header" style={{textAlign: "center"}}>Update User Details</h1>
                <div className="row mt-3">
                    <div className="col-lg-4">
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="col-lg-8">
                        <input className="form-control" type="text" placeholder="Enter first name" id="name" required onChange={handleInput}/>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-lg-4">
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="col-lg-8">
                        <input className ="form-control" type="text" placeholder="Enter Username" id="username" required onChange={handleInput}/>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-lg-4">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-lg-8">
                        <input className ="form-control" type="text" placeholder="Enter Email Id" id="email" required/>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-lg-4">
                        <label htmlFor="street">Address</label>
                    </div>
                    <div className="col-lg-8">
                        <input className ="form-control" type="text" placeholder="Enter Address" id="street" required/>
                    </div>  
                </div>
                <div className="row mt-2">
                    <div className="col-lg-4">
                        <label htmlFor="suite">Suite</label>
                    </div>
                    <div className="col-lg-8">
                        <input className ="form-control" type="text" placeholder="Enter your suite" id="suite" required/>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-lg-4">
                        <label htmlFor="city">City</label>
                    </div>
                    <div className="col-lg-8">
                        <input className ="form-control" type="text" placeholder="Enter your city" id="city" required/>
                    </div>  
                </div>
                <div className="row mt-2">
                    <div className="col-lg-4">
                        <label htmlFor="zipcode">Zipcode</label>
                    </div>
                    <div className="col-lg-8">
                        <input className ="form-control" type="text" placeholder="Enter your zipcode" id="zipcode" required/>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-lg-4">
                        <label htmlFor="phoneno">Phone Number</label>
                    </div>
                    <div className="col-lg-8">
                        <input className ="form-control" type="text" placeholder="Enter phone number" id="phoneno" required/>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-lg-4">
                        <label htmlFor="website">Website</label>
                    </div>
                    <div className="col-lg-8">
                        <input className ="form-control" type="text" placeholder="Enter your website" id="website" required/>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-lg-4">
                        <label htmlFor="companyName">Company Name</label>
                    </div>
                    <div className="col-lg-8">
                        <input className ="form-control" type="text" placeholder="Enter company name" id="companyName" required/>
                    </div>
                </div>
                <div className="row mt-2 mb-2" style={{display: "flex", justifyContent: "center"}}>
                    <button className ="btn btn-primary" style={{width: "20%"}} onClick={handleUpdateUser}>submit</button>
                </div>
            </div>    
        </>
    )
}