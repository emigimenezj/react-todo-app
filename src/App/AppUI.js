import React from "react";
import { TodoContext } from "../TodoContext/TodoContext.js";
// importing list components
import { TodoCounter } from '../TodoCounter/TodoCounter.js';
import { TodoSearch } from '../TodoSearch/TodoSearch.js';
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from '../TodoItem/TodoItem.js';
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
// importing form for adding a task
import { Modal } from "../Modal/Modal";
import { TodoForm } from "../TodoForm/TodoForm";
// importing app's states
import { TodoLoading} from "../TodoLoading/TodoLoading";
import { TodoEmpty } from "../TodoEmpty/TodoEmpty";
import { TodoError} from "../TodoError/TodoError";

function AppUI() {

	const {
		error,
		loading,
		searchedTodos,
		toggleCompleteTodo,
		removeTodo,
		openModal,
		setOpenModal
	} = React.useContext(TodoContext);

	return (
		<>
            <TodoCounter />
            <TodoSearch />

			<TodoList>
				{error && <TodoError error={error} />}
				{loading && <TodoLoading />}
				{(!loading && !error && !searchedTodos.length) && <TodoEmpty />}
				{searchedTodos.map(todo =>
					<TodoItem
						key={todo.id}
						text={todo.text}
						completed={todo.completed}
						toggleComplete={() => toggleCompleteTodo(todo.id)}
						onRemove={() => removeTodo(todo.id)}
					/>
				)}
			</TodoList>

			{!!openModal &&
				<Modal>
					<TodoForm />
				</Modal>
			}



            <CreateTodoButton
				setOpenModal={setOpenModal}
			/>
        </>
	);
}

export { AppUI };