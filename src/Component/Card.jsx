import { Link } from "react-router-dom"

function Card(props){

    return(
        <>
        <Link to={`/blog/${props.blog._id}`}>
      
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
        <img src={props.blog.image}  className="w-full h-64 object-cover"/>
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{props.blog.title}</h1>
            <h2 className="text-1xl font-bold text-gray-800 mb-2">{props.blog.subtitle}</h2>
            <p className="text-gray-700 leading-tight mb-4">
                {props.blog.description}
            </p>
          
        </div>
    </div>

</Link>
        </>
    )
}

export default Card