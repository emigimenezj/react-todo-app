import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import './TodoForm.css';


function TodoForm(props) {

	const {
		addTodo,
		setOpenModal,
	} = React.useContext(TodoContext);

	const onCancel = () => {
		setOpenModal(false);
	}

	const onSubmit = (event) => {
		event.preventDefault();
		addTodo(event.target.elements["newTodoValue"].value)
		setOpenModal(false);
	}

	return (
		<form
			onSubmit={onSubmit}
		>
			<label>NUEVA TAREA</label>

			<textarea
				name="newTodoValue"
				cols="50"
				rows="5"
				placeholder="Escriba aquí su tarea..."
			></textarea>

			<div className="TodoForm-buttonContainer">
				<button
					className="TodoForm-button TodoForm-button--cancel"
					type="button"
					onClick={onCancel}
				>
					Cancelar
				</button>
				<button
					className="TodoForm-button TodoForm-button--submit"
					type="submit"
				>
					Agregar
				</button>
			</div>
		</form>
	);
}

export { TodoForm };