// import React, { useState } from 'react'

// export default function Counter() {
//     const [output,setOut]=useState('')
//     const[quan,setQuan]=useState('')
//     const handlefood=()=>{
//       setOut(` <p>Quantity:${quan}cup (about 200 grams)</p>
//       <p>Calories:${250*quan} kcal</p>
//       <p>Protein:${5*quan} grams</p>
//       <p>Carbohydrates:${35*quan}</p>
//       <p>Fat:${10*quan} grams </p>
//       <p>Fibre:${2*quan} grams</p>`)
//     }
//   return (
//     <div>
//         <form onSubmit={handlefood} >
//             <h1>Select a food</h1>
//             <label>Food</label>
            
//             <input type='number'  onChange={(e)=>setQuan(e.target.value)}/>
//         </form>
//         <p>{output}</p>
//     </div>
//   )
// }
