import React from 'react'
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="" text-center my-3>ToDOs List</h3>
            {props.todos.map((todo) => {
                return <TodoItem todo={todo} onDelete={props.onDelete} />
            })}
           
        </div>
        )

}