import { useContext } from "react"
import { userContext } from "../Context/userContext"
import {Link} from "react-router-dom"

export default function UserDisplay()
{
    const {userItem = []} = useContext(userContext);
    //console.log(userItem)
    userItem.map((da, index) => console.log(da))
    return(
        <>
            <div className="container-fluid mt-3" style={{width: "100%", height: "100%"}}>
                <h2 className="card-header bg-info" style={{textAlign: "center"}}>User Data Display By Using Axios</h2>
            <table className="table table-bordered table-striped">
                <thead style={{backgroundColor :"#ff8080", textAlign: "center", fontWeight: "bold"}}>
                    <tr>
                        <td>Name</td>
                        <td>Username</td>
                        <td>Email</td>
                        <td>Address</td>
                        <td>Phone Number</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {userItem.map((data, index) => 
                        <tr>
                            <td>{data.studentName}</td>
                            <td>{data.studentName}</td>
                            <td>{data.studentEmail}</td>
                            {/* <td>
                                {data.address.street}<br></br>
                                {data.address.suite}<br></br>
                                {data.address.city}<br></br>
                                {data.address.zipcode}<br></br>
                                latitude: {data.address.geo.lat}<br></br>
                                langitude: {data.address.geo.lng}
                            </td> */}
                            <td>{data.phoneNo}</td>
                            <td>{data.address}</td>
                            {/* <td>{data.website}</td>
                            <td>
                                {data.company.name}<br></br>
                                {data.company.catchPhrase}<br></br>
                                {data.company.bs}
                            </td> */}
                            <td>
                                <i className="bi bi-file-earmark-plus-fill"></i>
                                <Link to="/update_user" state={{id: index}}>Update</Link><br></br>
                                <i className="bi bi-trash3-fill"></i><a href="">Delete</a>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
        </>
    )
}