import { Link, useParams } from 'react-router-dom';
import logo from '../images/logo.png';
function GuestNavBar() {

    const { id } = useParams();

    return (
        <nav className="navbar navbar-expand-sm  navbar-dark sticky-top" style={{ fontSize: "30Px", marginLeft: "0px" }}>

            <Link className="nav-link" to="/"><img className="card-img-top rounded-circle" src={logo} style={{ width: "35px", height: "35px" }} alt="Card image" /></Link>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <button className='btn btn-sm btn-secondary'>
                        <Link className="nav-link" to="/">Home</Link>
                    </button>&nbsp;
                </li>



            </ul>
           
        </nav>
    )
}
export default GuestNavBar;