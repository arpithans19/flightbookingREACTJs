import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import LogoutNav from "../Navbars/LogoutNav";
import { getCheckinDetails } from "../store/actions/CheckinAction";
import '../CSS/FetchById.css';

function CheckinById() {
    const checkin = useSelector(state => state.checkinReducer.checkin)

    const { id } = useParams();
    const dispatch = useDispatch();

    const fetchCheckinById = () => {
        dispatch(getCheckinDetails(id));
    }
    useEffect(fetchCheckinById, [id]);


    return (
        <body className='body-checkin-id'>
            <LogoutNav />
            <div className='contrainer-checkin-id'>
                <div className="h2-checkin-id">
                    <h3> Checkin Details</h3>
                </div><hr></hr>

                {
                    checkin !== null &&
                    <div className="row-checkin-id">
                        <p>Checkin : {checkin.checkInId}</p>
                        {/* <p>FlightId : {checkin.flightId}</p> */}
                        <p>Seat number : {checkin.seatNo}</p>
                        <p>Status : {checkin.status}</p>


                    </div>
                }
                <div>
                    <Link to="/checkin/all" className="btn btn-secondary">Back</Link>
                </div>
            </div>

        </body>
    )

}
export default CheckinById;