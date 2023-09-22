import { useAppSelector } from "../../../app/hooks";
import { Navigate } from "react-router-dom";
import { PROPS } from "../../../components/PROPS";

export const Protected =({children} : PROPS)=> {
    
    const user = useAppSelector((state)=> state.auth.loggedInUserToken);

    if(!user){
        return <Navigate to='/login'/>;
    }
    return <>{children}</>;
} 
