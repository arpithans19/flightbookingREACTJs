import axios from 'axios';
import { CHECKIN_URL } from '../store/actions/ActionConstants';

let Checkin={
    checkInId: 1,
    status: "Checkedin",
    seatNo: 12,
    pnrNo: 987652

}
test("Testing checkin fetch by id function.", async () => {
    axios.get(CHECKIN_URL+"/checkin/find/" + Checkin.checkInId).then((resp) =>{
        let flightbooking=result.data;
        expect(Checkin.status).toBe(flightbooking.status);
    }
    );
});
test("Testing all checkin funciton.", async () => {
    axios.get(CHECKIN_URL+"/checkin/getallcheckin").then((resp) =>{
        let flightbooking=result.data;
        expect(Checkin).toBe(flightbooking);
    }
    );
});
test("Testing delete Checkin by id funciton.", async () => {
    let checkinId=79;
    axios.delete(CHECKIN_URL+"/checkin/delete/" +79).then((resp) =>{
        let flightbooking=result.data;
        expect(null).toBe(null);
    }
    );
});

test("Testing Add Flight funciton.", async () => {
    axios.post(CHECKIN_URL+"/checkin/save", Checkin).then((resp) =>{
        let flightbooking=result.data;
        expect(Checkin).toBe(flightbooking);
    }
    );
});