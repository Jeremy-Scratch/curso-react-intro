import { MdCheckBox, MdCheckBoxOutlineBlank,  MdDeleteOutline } from "react-icons/md";


function CompleteIcon () {
    return (
        <MdCheckBox color="green"/>
    )
};

function IncompleteIcon () {
    return (
        <MdCheckBoxOutlineBlank color="gray"/>
    )
};

function DeleteIcon () {
    return (
        <MdDeleteOutline  />
    )
};

export {CompleteIcon, IncompleteIcon, DeleteIcon};