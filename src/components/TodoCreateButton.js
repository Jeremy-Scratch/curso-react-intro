import { MdAddCircleOutline } from "react-icons/md";

function CreateTodoButton() {
  return (
    <span className="AddIcon onClickSkew" >
       <MdAddCircleOutline style={{height: "30px",width: "30px"}} />
    </span>
     
    
  );
}
export { CreateTodoButton };