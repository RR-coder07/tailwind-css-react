
import axios from "axios"
import Navbar from "../Component/Navbar"
import { useEffect, useState } from "react"
import {  useNavigate, useParams } from "react-router-dom"

function Editblog(){
  const {id} = useParams()
  const navigate = useNavigate()
  const[blog,setblog] = useState({})
  const fetchblog = async() =>{
 const response = await axios.get("http://localhost:3000/blog/"+id)
 setblog(response.data.data)
 setdata({
  title:response.data.data.title || "",
  subtitle:response.data.data.subtitle || "",
  description:response.data.data.description || "",
  image:response.data.data.image || ""
})
  }
console.log(blog)
  
const [data,setdata] =useState({
  title:"",
  subtitle:"",
  description:"",
  image:""
})



const handlechange = (e)=>{

const{name,value} = e.target
setdata({
  ...data,

  [name] : name === 'image'? e.target.files[0]: value

})
}


const submitblog = async(e)=>{
   e.preventDefault()
  const response = await axios.patch("http://localhost:3000/blog/"+id,data,{
    headers:{
      "Content-Type" : "multipart/form-data"
    }
  }) 
  if(response.status === 200){
    console.log("success")
navigate("/homepage")
  }
  else{
    alert("something went wrong.")
  }
}

useEffect(()=>{
  fetchblog()
},[])

return (
    <>
    <Navbar/>
    <form onSubmit={submitblog}>
    <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
<div className="mt-10 text-center font-bold">Wanna Edit Blog !!</div>
<div className="mt-3 text-center text-4xl font-bold">Edit Blog</div>
<div className="p-8">
<div className="flex gap-4">
  <input type="text" name="title" value={data.title} className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"onChange={handlechange} />
  <input type="text" name="subtitle" value={data.subtitle} className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"onChange={handlechange} />
</div>
<div className="my-6 flex gap-4">
<input type="file" name={"image"}   className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" onChange={handlechange}/>
</div>
<div className="">
  <textarea name="description" id="text" cols="30"  rows="10" value={data.description} className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300"onChange={handlechange}>{blog.description}</textarea>
</div>
<div className="text-center">
  <button className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white" >Submit blog</button>
</div>
</div>

</div>
</form>
    </>
)
}
 export default Editblog