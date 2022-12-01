import React, { useState } from 'react'
import './App.css';
// unsplash clone  
// 5dwU0452UunBxilAADplUzYmItan-d94fvvwYXFhtEQ
function App() {
  const [value, setValue] = useState("");
  const [results, setResult]= useState([]);
  const fetchImages =() =>{
    fetch(`https://api.unsplash.com/search/photos?client_id=5dwU0452UunBxilAADplUzYmItan-d94fvvwYXFhtEQ&query= ${value} &orientation=squarish`)
   .then(res=>res.json())
   .then (data => { console.log(data)
    setResult(data.results)
  })

  }
  // suppose we search image like wallpaper then it will only show us by default 10 pictures
  return (
    <div className='App'> <></>
    <div className='mydiv'>
    <span> Search </span>
    {/* we will use there url as user jo b search krega wo unspalsh mm jo b pictures hongi usko use krega  */}
 <input
  style={ {width :"60%"}}
  type= 'text' value={value} onChange={(e) => setValue(e.target.value)} />
   <button onClick={ () => fetchImages()}> Send</button>
    
    </div> 

  <div className='gallery'>
   {/* for iteration we are using map[] */}
    { 
      results.map( (item ) =>
      {
        return <img className='item' key = {item.id} src= {item.urls.regular}/>
      })
    }
  </div>
   </div>
  )
}

export default App