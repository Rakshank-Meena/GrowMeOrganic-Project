import React, { useEffect, useState } from 'react'

import {DropList} from './DropList';
import { Checkbox } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';



const Accordian = (props:{departments:any}) => {
    const {departments}=props
    const [isOpen, setisopen] = useState<boolean>(true)
    const [checked,setChecked]=useState<boolean>(false)
    const [allSelected,setAll]=useState<boolean>(false)
    return (
        <>
            <div >
                <span style={{display:'flex',alignItems:"center"}}>
                    <RemoveIcon style={{ cursor: "pointer" }} onClick={()=>setisopen(!isOpen)} />
                    <Checkbox checked={checked||allSelected} onChange={()=>setChecked(!checked)}/>
                    {departments.department}({departments.sub_departments.length})
                </span>
                {isOpen&&<DropList setAll={setAll} allChecked={checked} list={departments} />}
            </div>
        </>
    )
}

export default Accordian
