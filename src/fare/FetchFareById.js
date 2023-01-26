import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import LogoutNav from "../Navbars/LogoutNav";
import { getFareDetails } from '../store/actions/FareAction';
import '../CSS/FetchById.css';


function FetchFareById() {

    const fare = useSelector(state => state.fareReducer.fare)
    const { id } = useParams();
    const dispatch = useDispatch();

    const fetchFareById = () => {
        dispatch(getFareDetails(id));
    }
    useEffect(fetchFareById, [id]);


    return (
        <div className="body-fare-id">
            <LogoutNav /><br></br><hr></hr>
            <div className='contrainer-fare-id'>
                <div className="h2-fare-id">
                    <h3> Fare Details</h3>
                </div><hr></hr>

                {
                    fare !== null &&
                    <div className="row-fare-id">


                       
                        <p>Id: {fare.fareId}</p>
                        <p>Fare Type: {fare.fareType}</p>
                        <p>Fare Price: {fare.farePrice} </p>

                    </div>
                }
                <div>
                    <Link to="/fare/all" className="btn btn-secondary">Back</Link>
                </div>
            </div>
        </div>
    )
}
export default FetchFareById;


