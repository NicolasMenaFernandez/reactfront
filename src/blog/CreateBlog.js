import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import '../Create.css';

const URI = "http://localhost:8000/blogs/"

const CompCreateBlog = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    const store = async (e) =>{
        e.preventDefault()
        await axios.post(URI, {title: title, content: content})
        navigate('/')
    }

    return (
        <div className='body-form'>
            <Link to="/" className='btn btn-danger mt-2 mb-2'><img src='https://api.iconify.design/ep:back.svg'></img></Link>
            <h3>vista Crear</h3>
            <form onSubmit={store}>
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
                    <button type='submit' className='btn btn-primary'>Guardar <img src='https://api.iconify.design/ep:collection-tag.svg'></img></button>
            </form>
        </div>
    )
}

export default CompCreateBlog