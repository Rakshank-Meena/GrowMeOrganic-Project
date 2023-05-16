import { Button } from '@mui/material';

const Buttons = (props: { type: string, text: string, fn:any,disable:boolean,size:string }) => {
    return (
        <>
            <Button disabled={props.disable} size={props.size=="small"?'small':(props.size=="large"?'large':'medium')} color="primary" onClick={props.fn} variant={props.type==="primary"?"contained":"outlined"}>{props.text}</Button>
        </>
    )
}

export default Buttons
