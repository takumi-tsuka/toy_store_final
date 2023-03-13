import Users from "./Users";
class LoggedUsers{
    logUsers = new Map();
    log(logged){
        let user = new Users (logged.uid,logged.fname,logged.lname,logged.email,logged.pass);
        this.logUsers.set(user);
    }
}
export default LoggedUsers;