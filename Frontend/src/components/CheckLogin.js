import Login from "./login";
import Reg from "./components/reg";
export default function CheckLogin(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <Reg/>
    }
    else{
    return <Login/>
}
}