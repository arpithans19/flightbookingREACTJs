import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../CSS/Payment.css';
import LogoutNav from "../Navbars/LogoutNav";

function RazorPay() {

    const { id } = useParams();
    const [amount, setAmount] = useState(id);
    const navigate = useNavigate();


    const handleSubmit = (e) => {

        e.preventDefault();
        if (amount === "") {
            alert("please enter amount");
        }
        else {
            var options = {
                key: "rzp_test_yIyl72VKQCFZt7",
                key_secret: "xHn8zaaVO0mGWAVKreYrxoqL",
                amount: amount * 100,
                currency: "INR",
                name: "FLIGHT_BOOKING_SYSTEM",
                description: "for payment",
                handler: function (response) {
                    // alert(response.razorpay_payment_id);
                    alert("Payment successfull with paymentId   " + response.razorpay_payment_id);
                    navigate('/checkin/add/:id');

                },
                prefill: {
                    name: "",
                    email: "arpithans1101@gmail.com",
                    contact: "7892553169"
                },
                notes: {
                    address: "Razorpay corporate office"
                },
                theme: {
                    color: "white"
                }
            };
            var pay = new window.Razorpay(options);
            pay.open();
        }
    }





    return (
        <body className="body-razor">

            <LogoutNav/>

            <div className="container"><br></br>

               
                <div className="container-razor">

                <div style={{ float: "left" }}>
                    <button onClick={() => navigate(-1)} className="btn btn-sm btn-secondary">Back</button>
                </div>


                    <div>
                        <h2 className="h2-adbk">Payment</h2><hr></hr>
                    </div>

                    <div >
                        <div><b>Your Fare:</b>&nbsp;&nbsp;&nbsp;
                            <label>

                                <input type="text" className="form-control" placeholder="Enter Amount" name="amount" value={amount} onChange={e => setAmount(id)} disabled />

                            </label>

                        </div><br></br>
                    </div>
                    <div>
                        <button className="btn btn-lg btn-success" onClick={handleSubmit}>
                            PAY</button>&nbsp;
                    </div>
                </div>




            </div>
        </body>






    )

}
export default RazorPay;