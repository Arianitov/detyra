import React,{useState,useEffect} from 'react'
import Card from'./components/card/card'
import axios from 'axios'



const App = () => {
  const [people,setPeople]=useState()

  useEffect(()=>{
    axios.get('https://swapi.dev/api/people/'
    ).then((res)=>{
      console.log(res.data.results,'ress')
      setPeople(res.data.results)
    })
  },[])

  return (
    <>
         <h1 className='header'>Star Wars Characters</h1>
    <div className='cardWrapper'>
 
      {people.map((ppl)=>{
        return (
          <Card 
          img ={require("../src/assets/photos/logo192.png")}
          name ={`Name: ${ppl.name}`}  
          datebirth ={`Birth Year: ${ppl.birth_year}`}
          height = {`Height: ${ppl.height}`}     
         />
        )
      })}
      
     

      </div></>
    )
}

export default App


