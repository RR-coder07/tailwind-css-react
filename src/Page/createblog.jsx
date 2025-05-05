import { useState } from "react";
import Navbar from "../Component/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Createblog(){
 
    const[data,setdata] = useState({
        title : "",
        subtitle : "",
        description : "",
        image : ""
    })
const handlechange = (e)=>{
    const{name,value} = e.target
   
setdata({
    ...data, // at first data is same

/*  
name =title , value = hehe
*/
    [name] : name==="image" ?e.target.files[0]: value 
    
})

}
const navigate = useNavigate()

const submitblog = async(e)=>{
  e.preventDefault() // prevent the page from loading
  console.log("form submitted")
  const response = await axios.post("http://localhost:3000/blog/" ,data, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
});

  if(response.status === 200){        
navigate("/homepage")
  }
  else{
    alert("Something went wrong")
  }
}

    return (
        <>
        <Navbar/>
        <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
          <form onSubmit={submitblog}>
  <div className="mt-10 text-center font-bold">Contact Us</div>
  <div className="mt-3 text-center text-4xl font-bold">Create a Blog</div>
  <div className="p-8">
    <div className="flex gap-4">
      <input type="text" name="title" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Title" onChange={handlechange}/>
      <input type="text" name="subtitle" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Subtitle" onChange={handlechange}/>
    </div>
    <div className="my-6 flex gap-4">
    <input type="file" name="image" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" onChange={handlechange} />
    </div>
    <div className="">
      <textarea name="description" placeholder="Description" id="text" cols="30" rows="10" className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300"  onChange={handlechange}></textarea>
    </div>
    <div className="text-center">
      <button className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white" >Submit blog</button>
    </div>
  </div>
  </form>
</div>
        </>
    )
}

export default Createblog