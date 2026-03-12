import { CompleteIcon, IncompleteIcon, DeleteIcon } from "./icons";

function TodoItem(data) {
  return (
    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      
      <span
        onClick={data.onComplete}>
          {data.completed?<CompleteIcon />: <IncompleteIcon />}
      </span>

      <p
        style={{ textDecoration: data.completed && 'line-through' }}>
        {data.text}
      </p>

      
      <span 
        onClick={data.onDelete}
        className="DeleteIcon">
          <DeleteIcon />
      </span>
    </li>
  );
}

export { TodoItem };