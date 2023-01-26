import axios from 'axios';

import { USER_URL } from '../store/actions/ActionConstants';
let User = {
    userId: 1,
    userName: "ArpithaN",
    mobileNumber: "9807654321",
    age: 13,
    email: "arpitha@gmail.com",
    password: "arpi1234",
    userRole: "user",
    firstName: "arpithaN",
    lastName: "arpi"
}
test("Testing user fetch by id function.", async () => {
    axios.get(USER_URL+"/user/find/" + User.userId).then((resp) =>{
        let flightbooking=result.data;
        expect(User.email).toBe(flightbooking.email);
    }
    );
});
test("Testing all user funciton.", async () => {
    axios.get(USER_URL+"/user/all").then((resp) =>{
        let flightbooking=result.data;
        expect(User).toBe(flightbooking);
    }
    );
});
test("Testing delete user by id funciton.", async () => {
    let userId=79;
    axios.delete(USER_URL+"/user/delete/" +76).then((resp) =>{
        let flightbooking=result.data;
        expect(null).toBe(null);
    }
    );
});
test("Testing Add user funciton.", async () => {
    axios.post(USER_URL+"/user/save", User).then((resp) =>{
        let flightbooking=result.data;
        expect(User).toBe(flightbooking);
    }
    );
});
