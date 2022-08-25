import React from "react";
import { TodoIcon } from "./TodoIcon";

function DeleteIcon({ onRemove }) {
	return (
		<TodoIcon
			type="delete"
			onClick={onRemove}
		/>
	);
}

export { DeleteIcon };