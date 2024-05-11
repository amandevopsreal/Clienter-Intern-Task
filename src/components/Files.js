import React, { useEffect, useRef, useState } from 'react'
import { AddFile } from './AddFile'
import { useContext } from 'react'
import fileContext from "../context/files/fileContext"
import FileItem from './FileItem'
import { useNavigate } from "react-router-dom"

const Files = () => {
    const navigate = useNavigate();

    const context = useContext(fileContext)
    const { files, getFiles } = context

    useEffect(() => {
        if (localStorage.getItem("token")) {
            getFiles()
        }
        else {
            navigate("/login")
        }

        // eslint-disable-next-line
    },[files])
    return (
        <>
            <AddFile />
            <div>
                <div className='row my-3'>
                    <h2>Your files</h2>
                    <div className='container mx-2'>
                        {files.length === 0 && "No files to display"}
                    </div>
                    {files.map(file => {
                        return <FileItem key={file._id} file={file} />
                    })}</div>
            </div>
        </>
    )
}

export default Files
//ref={refClose}