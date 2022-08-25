import React from "react";
import './TodoItem.css';
import {CompleteIcon} from "../TodoIcon/CompleteIcon";
import {DeleteIcon} from "../TodoIcon/DeleteIcon";

function TodoItem({text, completed, toggleComplete, onRemove}) {

	return (
		<li className="TodoItem">
			<CompleteIcon
				completed={completed}
				toggleComplete={toggleComplete}
			/>

			<p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`} > { text } </p>

			<DeleteIcon
				onRemove={onRemove}
			/>
		</li>
	)
}

export { TodoItem };