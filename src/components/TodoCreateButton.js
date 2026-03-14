import React from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { TodoContext } from "../todoContext";

function CreateTodoButton() {
  const { setOpenModal}= React.useContext(TodoContext);
  return (
    <span
    onClick={() => setOpenModal( openModal => !openModal)} 
    className="AddIcon onClickSkew" >
       <MdAddCircleOutline style={{height: "30px",width: "30px"}} />
    </span>
     
  );
}
export { CreateTodoButton };