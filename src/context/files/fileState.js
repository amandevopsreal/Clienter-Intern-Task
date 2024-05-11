import { useState } from "react";
import FileContext from "./fileContext";
import axios from 'axios'

const FileState = (props) => {
    const host = "http://localhost:5000"
    const [files, setFiles] = useState([])

    const getFiles = async () => {
        const files = await axios.get("http://localhost:5000/api/file/get-files", {
            headers: { "auth-token": localStorage.getItem("token") }
        })
        console.log(files.data.data)
        setFiles(files.data.data)
    }

    const addFile = async (title, file) => {
        const formData = new FormData()
        formData.append("title", title)
        formData.append("file", file)
        console.log(title, file)
        const result = await axios.post("http://localhost:5000/api/file/upload-files", formData, {
            headers: { " Content-Type": "multipart/form-data", "auth-token": localStorage.getItem("token") }
        })
        console.log(result)
    }
    const deleteFile = async (id) => {
        const response = await fetch(`${host}/api/file/deletefile/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
        });
        const json = await response.json()
        console.log(json)
        setFiles(files.filter(function (file) {
            return file._id !== id;
        }))
    }

    const editNote = async (id, title, description, tag) => {

    }
    return (
        <FileContext.Provider value={{ files, addFile, getFiles,deleteFile }}>
            {props.children}
        </FileContext.Provider>
    )
}

export default FileState