// import { Icon } from "@material-ui/core"
import "./InputOption.css"
function InputOption({Icon,title,color}){
    return(
<div className="inputOption">
    < Icon style={{color:color}}></Icon>
<h4>{title}</h4>
</div>
    )
}
export default InputOption