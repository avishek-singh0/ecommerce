import React,{useEffect, useState} from 'react'

export default function Find(data) {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(['']);
  const [Data, setData] = useState(['']);
 
 const fetchdata = (value) =>{
   fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
     .then(json => {
      const  result = json.filter((user)=>{
        return user && user.name.toLowerCase().includes(value)
      })
      setFilteredData(result);
      setData(result) ; 
      console.log(Data)   

     }
    
     )
     
 }


 const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    fetchdata(e.target.value);
  };

const handlereq = (username)=>{
console.log('clicked')
setSearchQuery(username)

console.log(username[0])

}

  return (
   
    <div className='flex flex-col items-center   '>
    <label htmlFor="firstName" className='text-4xl p-4'>Search</label>
        <input
          className='w-72  h-10  rounded-lg  text-black         '
          type="text"
          id="firstName"
          name="firstName" 
          value={searchQuery}  
          onChange={handleSearchInputChange}

        /> 
        
             {searchQuery.trim() !== '' && ( // Render only when search query has text
        <ul>
          {filteredData.map(user => (
       
            <li  onClick={() => handlereq(user.name) } key={user.id}>{user.name}</li>
            
           
          )
          )}
          
        </ul>

        
      )}
      <div>
         {searchQuery.trim() !== '' && Data.map(user=>(
           <li key={user.id}>{user.name}</li>,
         <h1>
          id={user.id}
          name={user.name}
          username={user.username}
     </h1>

         ))}
      </div>
    </div>
    
  
  )
}


