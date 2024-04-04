import { useCallback, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { userContext } from "../Context/userContext";

export default function DeleteUser()
{
    const location = useLocation();
    const userId  = location.state;
    //console.log(userId)
    const id = userId.id;
    const navigate = useNavigate()
    const { userItem = []} = useContext(userContext)

    function handleDelete(e)
    {
        //console.log(userId)
        fetch(`https://mentor-student-1dic.onrender.com/api/user/delete_user/${id}`,{
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "DELETE",
        })
        .then((response) => response.json())
        .then((response) => {if(response.message === "User Details Deleted Successfully!!!!"){
            alert("User deleted successfully!!!");
            navigate("/");
            window.location.reload();
        }})
        .catch((error) => console.log(error))
    }

    return(
        <>
            <div className="container mt-5" style={{width: "40%", backgroundColor: "white"}}>
                <div className="card-header text-center bg-secondary"><h3>User Details</h3></div>
                <div className="card-body text-center" style={{fontWeight: "600"}}>
                    {userItem.map((data, index) => (
                        data._id === id ? 
                        <div>
                        <p>Name :&nbsp;&nbsp;{data.name}</p>
                        <p>Username :&nbsp;&nbsp;{data.username}</p>
                        <p>Email :&nbsp;&nbsp;{data.email}</p>
                        <p>Address :&nbsp;&nbsp;{data.address}</p>
                        <p>Phone Numbe :&nbsp;&nbsp;{data.phoneNo}</p>
                        </div> : ""
                    ))}
                </div>
                <div className="card-footer text-center bg-secondary">
                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </>
    )
}