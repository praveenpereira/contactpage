import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { firstname,lastname,deletename } from '../reduxnew/actions/ContactAction';
 import Nav from './Nav';


const Contactpage =()=>{
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const contactdata = useSelector(state=>state.ContactReducer);
    const [showModal, setShowModal] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const dispatch = useDispatch();

      const handleContact =(e)=>{
        e.preventDefault();
        let date = new Date();
        let time = date.getTime();
        let contactObj ={
            id:time,
            add: firstName,
            last: lastName
            
        }
        
        
        dispatch(firstname(contactObj))
      
       
        setFirstname('');
        setLastname('');
        
      }

    return(
        <div>
            <div className="bg-blue-500 p-5 text-center font-bold text-3xl text-white">Contact Page</div>
          
            <div className="flex flex-wrap">
           
                <div><Nav/></div>
                <div className="flex flex-wrap">
                <div className="m-1">
              <button className="mt-1 px-1 py-4 bg-blue-900 text-blue-100 rounded-lg"
               type="button"
               onClick={()=>setShowModal(true)}
              >Create Contact</button>
              {showModal?(<div><div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Create Contact Screen</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    
                  </button>
                </div>
                <div className="relative p-5 flex-auto">
                  <form className="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      First Name
                    </label>
                    <input 
                          value={firstName}
                          onChange={(e)=>setFirstname(e.target.value)}
                    
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Last Name
                    </label>
                    <input  
                       value={lastName}
                       onChange={(e)=>setLastname(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                   
                  </form>


                  
                </div>
                <div>
               
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-blue-700 active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={handleContact}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>):(<div></div>)}
              
              </div>
            <div className="m-1">Contact Names
            <div>{contactdata.map((item)=>{
                return(
                    <div className="flex p-2">
                        <div className="flex bg-gray-200 p-5">
                            
                    <div className="p-2">{item.add}
                    </div>
                    <div className="p-2">{item.last}</div>
                    <div className=" bg-blue-500 text-black ml-12 px-2 py-2 rounded">
                    <button type="button" onClick={()=>setShowEdit(true)}>Edit</button>
                    {showEdit?(<div><div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Edit Contact Screen</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowEdit(false)}
                  >
                    
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      First Name
                    </label>
                    <input 
                          value={firstName}
                          onChange={(e)=>setFirstname(e.target.value)}
                    
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                    <label className="block text-black text-sm font-bold mb-1">
                      Last Name
                    </label>
                    <input  
                       value={lastName}
                       onChange={(e)=>setLastname(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                   
                  </form>


                  
                </div>
                <div>
               
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowEdit(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-blue-700 active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={handleContact}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>):(<div></div>)}
                    </div>
                    <div className=" bg-red-500 text-black ml-12 px-2 py-2 rounded">
                    <button onClick={()=>dispatch(deletename(item.id))}>Delete</button>
                    </div>
                    </div>
                    </div>
                )
            })
            
            
            }</div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Contactpage;