import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
function Exit({Isloading,SetLogin}){
   const setLogin=()=>{
   SetLogin(false);
    }
    return(
        <div>
            <Button variant="danger" onClick={()=>{setLogin()}}>Exit</Button>
        </div>
    )
}

export default Exit;