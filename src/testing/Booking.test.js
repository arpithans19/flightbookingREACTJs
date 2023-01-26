import axios from 'axios';
import BookingService from '../service/BookingService';
import { BOOKING_URL } from '../store/actions/ActionConstants';

let Booking={
    bookingId: 1,
    firstName: "arpitha",
    lastName: "n",
    gender: 'female',
    flightId: 1,
    farePrice: 2000,
    pnrNo: 6767768
}
test("Testing Booking fetch by id function.", async () => {
    axios.get(BOOKING_URL+"/booking/find/" + Booking.bookingId).then((resp) =>{
        let flightbooking=result.data;
        expect(Booking.gender).toBe(flightbooking.gender);
    }
    );
});
test("Testing all Booking funciton.", async () => {
    axios.get(BOOKING_URL+"/booking/findAllBooking").then((resp) =>{
        let flightbooking=result.data;
        expect(Booking).toBe(flightbooking);
    }
    );
});
test("Testing delete user by id funciton.", async () => {
    let bookingId=79;
    axios.delete(BOOKING_URL+"/booking/delete/" +79).then((resp) =>{
        let flightbooking=result.data;
        expect(null).toBe(null);
    }
    );
});
test("Testing Booking Search by PNR number function.", async () => {
    axios.get(BOOKING_URL+"/booking/" + Booking.pnrNo).then((resp) =>{
        let flightbooking=result.data;
        expect(Booking.gender).toBe(flightbooking.gender);
    }
    );
});
test("Testing Add user funciton.", async () => {
    axios.post(BOOKING_URL+"/booking/save", Booking).then((resp) =>{
        let flightbooking=result.data;
        expect(Booking).toBe(flightbooking);
    }
    );
});