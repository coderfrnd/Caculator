import React, { useState } from 'react';
import './App.css'

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const change=(event)=>{
    setCount(count+(event.target.value));
  }
  const clear=()=>{
    setCount(" ");
  }
  const lele =()=>{
      if(count.length===0)setCount(" ");
     setCount(eval(count).toString());
  }

  return (
    <>
       <div className="Calc">
      <input type="text" value={count} placeholder='0' id='answer' className='entry' />
   <div className="age">
   <input type="button" value="." onClick={change}/>
<input type="button" value="9" onClick={change} />
<input type="button"value="8" onClick={change} />
<input type="button" value="7" onClick={change} />
<input type="button" value="6" onClick={change}  />
<input type="button" value="5" onClick={change}  />
<input type="button" value="4"  onClick={change} />
<input type="button" value="3" onClick={change}  /> 
<input type="button" value="2" onClick={change}  />
<input type="button" value="1" onClick={change} />
<input type="button" value="0" onClick={change} />
<input type="button" value="+" onClick={change}  />
<input type="button" value="-"  onClick={change} /> 
<input type="button" value="*" onClick={change} />
 <input type="button" value="%" onClick={change} />
 <input type="button" value="|" onClick={change} />
 <input type="button" value="=" onClick={lele} className='butt'/>
 <input type="button" value="Clear" onClick={clear} className='butt'/>
</div>
  
     
      
    </div>

    </>
 
  );
}
export default App;