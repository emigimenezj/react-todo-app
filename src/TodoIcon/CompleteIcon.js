import React from "react";
import { TodoIcon } from "./TodoIcon";

function CompleteIcon({ completed, toggleComplete }) {
	return (
		<TodoIcon
			type="check"
			color={completed ? "#4caf50" : "gray"}
			onClick={toggleComplete}
		/>
	);
}

export { CompleteIcon };