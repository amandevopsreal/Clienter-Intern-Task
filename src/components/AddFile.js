import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import fileContext from '../context/files/fileContext'
export const AddFile = () => {
    const [title, setTitle] = useState()
    const [file, setFile] = useState()
    const context = useContext(fileContext)
    const { addFile } = context
    const handelSubmit = async (e) => {
        e.preventDefault()
        addFile(title, file)
    }
    return (
        <div className='container my-3'>
            <h2>
                Add a file</h2>
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">File Name</label>
                    <input required onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">File</label>
                    <input required onChange={(e) => setFile(e.target.files[0])} type="file" accept='application/pdf' className="form-control" id="description" name='description' />
                </div>
                <button onClick={handelSubmit} type="submit" className="btn btn-primary">Add File</button>
            </form>
        </div>
    )
}