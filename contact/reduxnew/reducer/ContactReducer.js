import { DELETENAME, FIRSTNAME,LASTNAME } from "../actions/ContactAction";

const initialState=[];
    


const ContactReducer = (state = initialState, action)=>{
    switch(action.type){

        case FIRSTNAME:
            return[...state,action.payload]
        case LASTNAME:
            return[...state,action.payload]

         case DELETENAME:
             const filtered = state.filter((item)=>item.id !== action.payload);
             return filtered;

       default: return state;

    }
}
export default ContactReducer;