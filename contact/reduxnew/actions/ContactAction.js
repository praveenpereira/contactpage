export const FIRSTNAME = "FIRSTNAME";
export const LASTNAME = "LASTNAME";
export const DELETENAME = "DELETENAME"


export const firstname =(payload)=>{
    return{
        type: FIRSTNAME,
        payload
    }
}

export const lastname =(payload)=>{
    return{
        type: LASTNAME,
    }
}

export const deletename =(payload)=>{
    return{
        type: DELETENAME,
        payload
    }
}