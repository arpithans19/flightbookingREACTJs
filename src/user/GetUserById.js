import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import LogoutNav from "../Navbars/LogoutNav";
import { getUserById } from "../store/actions/UserAction";
import '../CSS/FetchById.css';
import flight2 from '../images/flight2.webp';

function GetUserById(){
    const user = useSelector(state => state.userReducer.user)

    const { id } = useParams();

    const dispatch = useDispatch();

    const fetchBookingById = () => {
        dispatch(getUserById(id));
    }

    useEffect(fetchBookingById, [id]);

    return (
        <div  className="body-user-id">
            <LogoutNav/>
            <div className='contrainer-user-id'>
                <div className="h2-user">
                    <h3> User details</h3>
                </div><hr></hr>

                {
                    user !== null &&
                    <div className="row">
                        
                        <div className="col">
                            <img src={flight2} style={{width:"200px" ,height:"280px"}} alt="card image" />
                        </div>
                        <div className="col">


                        <p>userId : {user.userId}</p>
                        <p>userName : {user.userName}</p>
                        <p>First Name : {user.firstName}</p>
                        <p>Last Name : {user.lastName}</p>                        
                        <p>MobileNum : {user.mobileNumber}</p>
                        <p>Age : {user.age}</p>
                        <p>Email : {user.email}</p>
                        {/* <p>password : {user.password}</p> */}
                        <p>User Role : {user.userRole}</p>
                        </div>


                    </div>
                }
                <div>
                    <Link to="/user/all" className="btn btn-secondary">Back</Link>
                </div>
            </div>
        </div>
    )





}
export default GetUserById;