import { useEffect, useState } from 'react';

import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Buttons from './Buttons';
import { useNavigate } from 'react-router-dom';
const Form = () => {
    const navigate = useNavigate()
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phNo, setPhNo] = useState<number>()
    const [disable, setDisable] = useState<boolean>(true)

    const submitHandler = () => {
        const item = {
            name, email, phNo
        }
        localStorage.setItem("_uud", JSON.stringify(item))
        localStorage.getItem("_uud") && navigate('/project')
    }

    useEffect(() => {
        localStorage.getItem("_uud") && navigate('/project'),
            (name !== '' && email !== '' && (phNo !== undefined && phNo.toString().length >= 10)) ? setDisable(false) : setDisable(true)
    })
    return (
        <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", width: "100%", minHeight: "100vh", flexDirection: "column", gap: "3rem" }} >
            <TextField sx={{ width: "65%" }} value={name} onChange={(e: any) => setName(e.target.value)} id="filled-basic" label="Name" type="text" variant="filled" />
            <TextField sx={{ width: "65%" }} value={email} onChange={(e: any) => setEmail(e.target.value)} id="filled-basic" label="E-mail" type="email" variant="filled" />
            <TextField sx={{ width: "65%" }} value={phNo} onChange={(e: any) => setPhNo(e.target.value)} id="filled-basic" label="Phone Number" type='number' variant="filled" />
            <Buttons type={'primary'} text={"proceed"} fn={submitHandler} disable={disable} size={"large"} />
        </Box>
    )
}

export default Form
