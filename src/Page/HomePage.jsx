
import { useEffect, useState } from "react";

import axios from "axios";
import Navbar from "../Component/Navbar";
import Card from "../Component/Card";

function Homepage(){
    const[blogs,setblogs] = useState([])
const fetchblogs= async() =>{
    const response = await axios.get("http://localhost:3000/blog")
 setblogs(response.data.data)
}

    useEffect(()=>{
        fetchblogs()
    },[])


    
    console.log(blogs)
    console.log(blogs.title)
    return(
        <>
        <Navbar/>
       
       
       <div className="flex justify-evenly flex-wrap " >
        {
blogs.map(function(blog){
    return(
        <Card blog={blog}/>
    )

}
  
)
}
        </div>     
        </>
    )
}

export default Homepage