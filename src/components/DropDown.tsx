
import Accordian from './Accordian';
const DropDown = (props: any) => {
  const section2 = [
    {
        "department": "customer_service",
        "sub_departments": [
            "support",
            "customer_success"
        ]
    },
    {
        "department": "design",
        "sub_departments": [
            "graphic_design",
            "product_design",
            "web_design"
        ]
    }
]
  return (
    <div style={{ height: 'auto', width: 'fit-content',paddingLeft:"3rem",paddingRight:"3rem",overflow:"auto",background:"#e2e2e2",margin:"auto" }}>
      {section2.map((departments:any,i:number)=>{
        return(
          <Accordian departments={departments}/>
        )
      })}
    </div>
  )
}

export default DropDown
