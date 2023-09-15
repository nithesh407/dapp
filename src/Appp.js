import React,{useState} from 'react';
const Appp =()=>{
    const [name,setname]=useState('');
   
    const handle =()=> {
        alert(name)
    }
return(
    <div>
        <input type='text' value={name} onChange={(e)=>setname(e.target.value)}/>
        <button onClick={handle}>click</button>
    </div>
)
}
export default Appp;