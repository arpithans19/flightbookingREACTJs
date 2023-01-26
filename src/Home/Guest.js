import { Link } from "react-router-dom";
import '../CSS/Guest.css';
import GuestNavBar from "../Navbars/GusetNavBar";


function Guest() {

    return (
       
        
        
        <div  className="container">
        <GuestNavBar/>
           
            

            <div className="para" >
                <h3 style={{ color: "red" }}><b>Flight Booking System</b></h3><br></br><hr></hr>

                <p> It is an Online system through which users can view available Flights,register,view profile and book a Flights</p>&nbsp;
                <p>Nowadays,most of the people prefer flight journeys to enjoy thier vacation.</p>
                <p>Because car journey to any trip with our family or friends give happiness and makesa us to feel comfortable</p>
                <p> Many advantages inFlight booking system rather than using dizzy journey </p>
                <p>It save a lot time ,money and labour.</p>
                <p> it provieds custom feature development and support with software</p>
                <div><br></br>


                    <div>
                    <p>Do you want to enjoy your Journey???</p>
                    <p>
                    <Link to='/user/add'>Click Here</Link></p>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;<br></br>


                <div style={{ float: "right" }}>
                    <p>For more information </p>
                    <p>Contact</p>
                    <p>e-mail: flightbookingsytem@gmail.com</p>
                    <p> phone: 0801234567</p>
                    <p>address: Bangalore</p>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            </div>
        </div>
       
        
    )

}
export default Guest;