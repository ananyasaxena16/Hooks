//2nd variation(ComponentDidMount):only once after, first render is executed
import React,{useEffect, useState} from 'react'

function Ue1() {
    const [count, setCount] = useState(0);
    //const [movies,setMovies] =useState([]);
    useEffect(() => { //every time after render it will execute (works as both componentdidmount and componentdidupdate)
        console.log('useEffect');
        document.title=`Clicked ${count} times`;
        // n/w request
        // movies state ko set krata

    },[]) //dependency array if vacant and put up here , it  will behave as only componentdidmount
    console.log('render');
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)} >Click Me</button>
        </div>
    )
}

export default Ue1
