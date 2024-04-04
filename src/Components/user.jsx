import { useContext } from "react"
import { userContext } from "../Context/userContext"
import {Link, useLocation} from "react-router-dom"

export default function UserDisplay()
{
    const {userItem = []} = useContext(userContext);
    //console.log(userItem)
    //userItem.map((da, index) => console.log(da._id))

    return(
        <>
            <div className="container-fluid mt-5" style={{width: "100%", height: "100%"}}>
            <table className="table table-bordered table-striped">
                <thead style={{backgroundColor :"#ff8080", textAlign: "center", fontWeight: "bold"}}>
                    <tr className="bg-primary">
                        <td colSpan="6">
                        <h2>User Data Display By Using Axios</h2>
                            <Link to="/create_user">
                                <button className="btn btn-danger mt-3 mb-2" style={{textAlign: "end"}}>
                                <i className="bi bi-person-plus-fill" style={{color: "black"}}></i>
                                &nbsp;&nbsp;Add User
                                </button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>Username</td>
                        <td>Email</td>
                        <td>Address</td>
                        <td>Phone Number</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody style={{backgroundColor: "#ccd9ff", fontWeight: "600"}}>
                    {userItem.map((data, index) => 
                        <tr>
                            <td style={{textAlign: "center"}}>{data.name}</td>
                            <td style={{textAlign: "center"}}>{data.username}</td>
                            <td style={{textAlign: "center"}}>{data.email}</td>
                            <td style={{textAlign: "center"}}>{data.address}</td>
                            <td style={{textAlign: "center"}}>{data.phoneNo}</td>
                            <td>
                                <i className="bi bi-file-earmark-plus-fill"></i>
                                <Link to="/update_user" state={{id: data._id}} 
                                style={{textDecoration: "none", fontWeight: "700", color: "#751aff"}}>&nbsp;&nbsp;Update</Link><br></br>
                                <i className="bi bi-trash3-fill"></i>
                                <Link to="/delete_user" state={{id: data._id}} style={{textDecoration: "none", fontWeight: "700", color: "#751aff"}}>
                                    &nbsp;&nbsp;Delete
                                </Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
        </>
    )
}