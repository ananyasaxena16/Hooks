import React,{useState} from 'react'

function Uswo() {
    console.log('render');
    const [msgObj,setMsgObj] =useState({message:'',id:1});
    const handleChange = (e)=>{
    //   msgObj.message = e.target.value;
    //   setMsgObj(msgObj);
    //   console.log(msgObj);
        let obj ={...msgObj, message:e.target.value}//shalow copy: as above one what does is that it compares the refernece of the object which is same due to mutability as on the same referce the value is changed, but the refernce remains same, so rendering isnt done and state is not changed||||| so we used shallow copy by spread operator and then change the message value to the target value;
        console.log(obj);
        setMsgObj(obj)
    }
    return (
        <div>
            <input value={msgObj.message} onChange={handleChange} type="text" placeholder="Type Your message"></input>
            <p>{msgObj.message}</p>
            
        </div>
    )
}

export default Uswo
