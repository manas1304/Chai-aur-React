import {useContext, useState} from 'react';
import {TodoContext} from '../context/TodoContext'

function TodoItem({ todo }) {
    
    const {updateTodo, deleteTodo, toggleComplete} = useContext(TodoContext);
    // State to keep track whether the todo item is editable or not
    const [isEditable, setIsEditable] = useState(false);
    // State to keep track of the message after updation
    const [todoMsg, setTodoMsg] = useState(todo.todoContent);

    function editTodo(){
        updateTodo(todo.id, {...todo, todoContent: todoMsg});
        // Now the todo is edited so we will make the current sate of isEditable to false
        setIsEditable(false);
    }

    function toggleCompleted(){
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed} // This checks whethere the tick is applied on the current todo item or not
                onChange={toggleCompleted} // Whenever a change happend ( check or uncheck ) we call this function 
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`} // If checked it get's strike through .........
                value={todoMsg} // Setting the value so the user can see this
                onChange={(e) => setTodoMsg(e.target.value)} // calling the setTodoMsg so the user can update the todo Item
                readOnly={!isEditable} // If isEditable is true so the user is trying to edit the todo item so readOnly becomes false
                // If isEditable is false, that means user is just viewing so in that case the todo item should be readOnly then.
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isEditable) {
                        editTodo(); // This function is the one that actually manages the edit - without this user can't edit the todo Item
                    } else setIsEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
