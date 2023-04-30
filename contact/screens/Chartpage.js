import React,{useState, useEffect} from 'react';
import Country from './Country';
import Nav from './Nav';
import World from './World';


const Chartpage =()=>{

     
    const url = 'https://disease.sh/v3/covid-19/all';
    const [isLoading, setIsLoading] = useState('true');
    const [data, setWorldData] = useState([]);

    useEffect(()=>{
           fetch(url)
           .then(response => response.json())
           .then(response => setWorldData(response))
           .finally(()=>setIsLoading(false));
    },[])
    return(
        <div>
            <div className="bg-blue-500 p-5 text-center font-bold text-3xl text-white">Contact Page</div>
            <div className="flex">
              <div>  <Nav/></div>
              <div className=""></div>

              <div>
               <div>
               </div>
               <div className="flex  justify-center items-center flex-wrap">
             <div className="flex-1 m-4 p-8 bg-blue-200 rounded">

             <World/>
             </div>

             <div className="flex-1 m-4 p-8 bg-blue-200 rounded">
                <Country/>
             </div>
             </div>
              </div>
              
            </div>
        </div>
    )
}

export default Chartpage;