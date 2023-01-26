export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('myUser'));
    
    if (user && user.jwt) {
      return { Authorization: 'Bearer ' + user.jwt};
    } else {
      return {};
    }
  }