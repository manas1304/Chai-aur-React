import {createContext} from 'react';
export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todoContent: "Todo Msg",
            completed: false
        }
    ], // This how each todo is going to look like 
    // Each todo item would have a id, todoMsg, and completed checkbox

    addTodo: function(todoContent){

    }, 

    updateTod: function(id, todoContent){

    },

    deleteTodo: function(id){

    },

    toggleComplete: function(id){

    }
})
// Whatever be the component, we will take the values from here only - That is where the usage of context comes into the picture.