// import React , {useState,useEffect} from 'react';

// export default function App (){
//   const countBtn = buttons(0);

//   return (
//     <>
//       <button {...countBtn}></button>
//     </>
//   )
// }

// function buttons (data){
//   const [count, setCheck] = useState(data);
//   function onClicks(e){
//     setCheck(count+1)
//   }
//   useEffect(onClicks,[])
//   return {
//     value : count,
//     onClick : onClicks
//   }
// }

// // export default App;

import React, { useState } from 'react';

const App = () => { 
  const [check, setCheck] = useState(0); 
  const onClickEvent = () => setCheck(check + 1); 
  return (
    <> 
      <div onClick={onClickEvent}> Hooks! {check} </div>
    </>
  ) 
} 
export default App;

