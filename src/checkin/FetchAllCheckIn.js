import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCheckin } from "../store/actions/CheckinAction";
import { Link, useNavigate } from "react-router-dom";
import LogoutNav from "../Navbars/LogoutNav";
import '../CSS/FetchAll.css';

function FetchAllCheckIn() {


    const checkins = useSelector(state => state.checkinReducer.checkins)
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const myFunction = async () => {
        dispatch(getAllCheckin())
    };
    useEffect(() => { myFunction() }, []);


    return (


        <body className="body-checkin">
            <div >
                <LogoutNav />
                <div className="container-checkin">

                    <div style={{ float: "left" }}>

                        <button onClick={() => navigate('/admin')} className="btn btn-secondary">Back</button>
                    </div><br></br>

                    <div className="h2-checkin">
                        <h3> CHECK-INS</h3>
                    </div>


                    <div className="table-checkin">

                        {
                            checkins.length > 0 ?
                                <table className="table">
                                    <tr>
                                        <th>CheckinId</th>
                                        <th>Seat</th>
                                        <th>Status</th>

                                        <th>View</th>
                                        <th>Delete</th>


                                    </tr>
                                    {
                                        checkins.map((b, index) =>
                                            <tr key={index}>
                                                <td>{b.checkInId} </td>
                                                <td>{b.seatNo}</td>
                                                <td>{b.status}</td>

                                                <td><Link to={`/checkin/find/${b.checkInId}`}>View</Link></td>
                                                <td><Link to={`/checkin/delete/${b.checkInId}`}>Delete</Link></td>


                                            </tr>
                                        )
                                    }
                                </table>
                                : <h3>No Checkin Available</h3>

                        }
                    </div>

                </div>
            </div>

        </body>




    )

}
export default FetchAllCheckIn;