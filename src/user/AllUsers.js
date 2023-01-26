import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LogoutNav from "../Navbars/LogoutNav";
import { getAllUsers } from "../store/actions/UserAction";

function AllUsers(){
    const users = useSelector(state => state.userReducer.users)    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const myFunction = () => {
        dispatch(getAllUsers())
    };

    useEffect(() => {
        myFunction();
    }, []);

    return (
        <body className="body-user">
            <div >
                <LogoutNav/>
                <div className="container-user">

                    <div style={{ float: "left" }}>

                        <button onClick={() => navigate('/admin')} className="btn btn-secondary">Back</button>
                    </div><br></br>

                    <div className="h2-user">
                        <h3> All Users</h3>
                    </div>


                    <div className="table-user">

                        {
                            users.length > 0 ?
                                <table className="table">
                                    <tr>
                                        <th>userId</th>
                                        <th>userName</th>
                                        <th>firstName</th>
                                        <th>lastName</th>
                                        {/* <th>mobileNumber</th>
                                        <th>age</th>
                                        <th>email</th>
                                        <th>password</th>
                                        <th>userRole</th> */}

                                        <th>View</th>
                                        <th>Delete</th>


                                    </tr>
                                    {
                                        users.map((b, index) =>
                                            <tr key={index}>
                                                <td>{b.userId} </td>
                                                <td>{b.userName} </td>
                                                <td>{b.firstName}</td>
                                                <td>{b.lastName}</td>
                                                {/* <td>{b.flightId}</td>
                                                <td>{b.farePrice}</td> */}

                                                <td><Link to={`/user/find/${b.userId}`}>View</Link></td>
                                                <td><Link to={`/user/delete/${b.userId}`}>Delete</Link></td>


                                            </tr>
                                        )
                                    }
                                </table>
                                : <h3>No Users Available</h3>
                        }
                    </div>
                </div>

            </div>
        </body>
    )

}
export default AllUsers;