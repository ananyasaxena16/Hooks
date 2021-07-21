import React,{useState,useEffect} from 'react'

function Infinite() {
    const [count,setCount] = useState(0);
    useEffect(() => {
      console.log('useEffect');
      let num = Math.random()*100;
      setCount(num);
    }) //baar bar chalega as [] array nahi hai, thats why its infinite 
    //as state is changed everytime it will re render
    console.log('render');
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
        </div>
    )
}

export default Infinite