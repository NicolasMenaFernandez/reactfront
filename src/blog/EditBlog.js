import axios from 'axios'
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const URI =  "http://localhost:8000/blogs/"

const CompEditBlog = () =>{
    const [title, setTitle] = useState ('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()
    
    const update = async (e) =>{
        e.preventDefault()
        await axios.put(URI+id, {
            title: title,
            content: content
        })
        navigate('/')
    }

    useEffect( ()=>{
        getBlogById()
    },[])

    const getBlogById = async () => {
        const res = await axios.get(URI+id)
        setTitle(res.data.title)
        setContent(res.data.content)
    }

    return (
        <div>
            <Link to="/" className='btn btn-danger mt-2 mb-2'><img src='https://api.iconify.design/ep:back.svg'></img></Link>
            <h3>Edit</h3>
            <form onSubmit={update}>
                    <div className='mb-3'>
                        <label className='form-label'>Title</label>
                        <input
                            value={title}
                            onChange={ (e)=> setTitle(e.target.value)}
                            type="text"
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Content</label>
                        <textarea
                            value={content}
                            onChange={ (e)=> setContent(e.target.value)}
                            type="text"
                            className='form-control'
                        />
                    </div>
                    <button type='submit' className='btn btn-primary'>Guardar Cambios <img src='https://api.iconify.design/ep:collection-tag.svg'></img></button>
            </form>
        </div>
    )
}

export default CompEditBlog