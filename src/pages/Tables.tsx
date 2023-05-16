import React, { useEffect, useState } from 'react'
import apiCalls from '../ApiCalls.tsx/Api'
import UpperSecTable from '../components/UpperSecTable'
import { Box } from '@mui/material'
import DropDown from '../components/DropDown'
import { useNavigate } from 'react-router-dom'

const Tables = () => {
    const navigate=useNavigate()
    const [data, setData] = useState<{ body: string, id: number, title: string, userId: number }[]>([])
    useEffect(() => {
        if (localStorage.getItem("_uud") === null || localStorage.getItem("_uud") === undefined) {
            navigate('/')
        }
        apiCalls((res: any) => setData(res.data), (error) => console.log(error), "https://jsonplaceholder.typicode.com/posts")
    }, [])

   


    return (
        <>
            <Box sx={{ px: "10rem" }}>
                <UpperSecTable data={data} />
                <DropDown/>
            </Box>
        </>
    )
}

export default Tables
