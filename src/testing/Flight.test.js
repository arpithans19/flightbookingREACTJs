import axios from 'axios';
import { BASE_URL } from '../store/actions/ActionConstants';

let Flight = {
    flightId: 1,
    fromLocation: "Bangalore",
    destination: "kolar",
    date: "2022-09-09",
    flightName: "kingfishre",
    flightType: "domestic",
    farePrice: 2000

}
test("Testing Flight fetch by id function.", async () => {
    axios.get(BASE_URL+"/flight/get/" + Flight.flightId).then((resp) =>{
        let flightbooking=result.data;
        expect(Flight.flightType).toBe(flightbooking.flightType);
    }
    );
});
test("Testing all Flight funciton.", async () => {
    axios.get(BASE_URL+"/flight/getallflights").then((resp) =>{
        let flightbooking=result.data;
        expect(Flight).toBe(flightbooking);
    }
    );
});
test("Testing delete Flight by id funciton.", async () => {
    let flightId=79;
    axios.delete(BASE_URL+"/flight/delete/" +79).then((resp) =>{
        let flightbooking=result.data;
        expect(null).toBe(null);
    }
    );
});
test("Testing Flight Search by FromLocation,deestination,date number function.", async () => {
    axios.get(BASE_URL+"/flight/" + Flight.fromLocation+Flight.destination+Flight.date).then((resp) =>{
        let flightbooking=result.data;
        expect(Flight.flightType).toBe(flightbooking.flightType);
    }
    );
});
test("Testing Add Flight funciton.", async () => {
    axios.post(BASE_URL+"/flight/addFlight", Flight).then((resp) =>{
        let flightbooking=result.data;
        expect(Flight).toBe(flightbooking);
    }
    );
});