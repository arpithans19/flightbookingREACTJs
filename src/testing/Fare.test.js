import axios from 'axios';
import { FARE_URL } from '../store/actions/ActionConstants';

let Fare={
    fareId: 1,
    farePrice:2000,
    fareType:"premium"

}
test("Testing fare fetch by id function.", async () => {
    axios.get(FARE_URL+"/fare/find/" + Fare.fareId).then((resp) =>{
        let flightbooking=result.data;
        expect(Fare.fareType).toBe(flightbooking.status);
    }
    );
});
test("Testing all fare funciton.", async () => {
    axios.get(FARE_URL+"/fare/getallfares").then((resp) =>{
        let flightbooking=result.data;
        expect(Fare).toBe(flightbooking);
    }
    );
});
test("Testing delete fare by id funciton.", async () => {
    let fareId=79;
    axios.delete(FARE_URL+"/fare/delete/" +79).then((resp) =>{
        let flightbooking=result.data;
        expect(null).toBe(null);
    }
    );
});

test("Testing Add Flight funciton.", async () => {
    axios.post(FARE_URL+"/fare/save", Fare).then((resp) =>{
        let flightbooking=result.data;
        expect(Fare).toBe(flightbooking);
    }
    );
});