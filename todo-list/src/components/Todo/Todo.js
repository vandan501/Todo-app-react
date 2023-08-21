function Todo({todoData})
{
return(
    
    <div>

    {todoData}
    <input type="checkbox" />
    <button>Edit</button>
    <button>Delete</button>

    </div>);
}

export default Todo;