import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'



const  CompShowBlogs = ()=> {

    const [blogs, setBlog] = useState([])
    useEffect(()=>{
        getBlogs()
    },[])

    const getBlogs = async ()=>{
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    const deleteBlog = async (id) =>{
        await axios.delete( `${URI}${id}`)
        getBlogs()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><img src="https://api.iconify.design/ep:circle-plus.svg" width="20px" heigth="20px"></img></Link>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map ( (blog)=> (
                                <tr key={blog.id}>
                                    <td> {blog.id}</td>
                                    <td> {blog.title} </td>
                                    <td> {blog.content} </td>
                                    <td>
                                        <Link to={`/edit/${blog.id}`} className='btn btn-info'><img src="https://api.iconify.design/ep:edit.svg"></img></Link>
                                        <buton onClick={ ()=>deleteBlog(blog.id) } className='btn btn-danger'><img src="https://api.iconify.design/ep:delete-filled.svg"></img></buton>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowBlogs