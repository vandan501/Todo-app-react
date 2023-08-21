import { useState } from "react";

function AddTodo(updateList)
{
    const [inputText,setInputText]=useState('');
    return(
<div>

<input type="text" placeholder="Add your next Todo" value={inputText} onChange={e =>setInputText(e.target.value)}/>
<button onClick={updateList(inputText)}>Add</button>

</div>
    );
}

export default AddTodo;