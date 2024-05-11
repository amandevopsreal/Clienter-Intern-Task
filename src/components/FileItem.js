import React from 'react'
import { useContext } from 'react'
import fileContext from "../context/files/fileContext"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
const FileItem = ({ file }) => {
    const context = useContext(fileContext)
    const { deleteFile } = context
    const showFile = (file) => {
        window.open(`http://localhost:5000/files/${file}`, "_blank", "noreferrer")
    }
    return (
        <>
            <div style={{margin:"5px"}} className="card col-md-3 my-3">
                <div className="card-body ">
                    <div className='d-flex align-items-center'>
                        <h5 className="card-title">{file.title}</h5>
                        <i style={{ cursor: "pointer" }} onClick={() => { deleteFile(file._id); alert("File deleted successfully") }} className="fa-solid fa-trash mx-2"></i>
                        <RemoveRedEyeIcon sx={{ cursor: "pointer" }} onClick={() => showFile(file.pdf)} />
                    </div>

                </div>
            </div >
        </>
    )
}

export default FileItem