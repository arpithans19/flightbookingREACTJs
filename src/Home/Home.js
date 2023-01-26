// import HomeNavBar from "../Navbars/HomeNavBar";
import '../CSS/Home.css';
import Navbar from "../Navbars/Navabar";

function Home() {
    return (
        <div className="container-home">
            <Navbar /><hr></hr>
            <div >
                <h1 className="h1">Welcome to
                   Flight Booking System</h1>
          
           
                <h5 className="h5-info">Fly high to meet the sky</h5><br></br>
                </div>
           
        </div>
    )
}
export default Home;