
import Components1 from "./Components1";
import Components2 from "./Components2";
function Components(props){
    const isLoggedIn=props.isLoggedIn;
    if(isLoggedIn){
        return<Components1></Components1>
    }else{
        return<Components2></Components2>
    }
}
export default Components;