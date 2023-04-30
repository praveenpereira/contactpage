import React from 'react';
import {Link} from 'react-router-dom';


const Nav = ()=>{
    return(
        <div>
        

        <div className="flex flex-col p-5 bg-gray-200 w-48 h-screen">
            <div className=" flex-0  p-5"><Link to = "/contactpage">Contact Page</Link></div>
            <div className=" flex-1  p-5"><Link to = "/chartpage">Chart Page</Link></div>
            <div className=" flex-5 p-5">side bar</div>
        </div>
        </div>
    )
}
export default Nav;