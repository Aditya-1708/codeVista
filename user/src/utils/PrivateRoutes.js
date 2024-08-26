import { getInitialProps } from 'react-i18next';
import {Outlet,Navigate} from 'react-router-dom';

const PrivateRoutes=({isAuthenticated,children,...rest})=>{
    let auth={'token':false}
    if(isAuthenticated){
        auth={'token':true}
    }
    return(
        auth.token?<Outlet/>:<Navigate to="/"/>
    );
}
export default PrivateRoutes;