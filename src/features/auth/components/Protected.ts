import { useAppSelector } from "../../../app/hooks";
import { useNavigate } from "react-router-dom";
import { PROPS } from "../../../components/PROPS";

function Protected({children} : PROPS) {
    const navigate = useNavigate()
    const user = useAppSelector((state)=> state.auth.loggedInUserToken);

    if(!user){
        return navigate('/login');
    }
    return children;
} 
export default Protected;