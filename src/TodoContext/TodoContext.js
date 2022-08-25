import React from 'react';
import {useLocalStorage} from "./useLocalStorage";

const TodoContext = React.createContext(undefined);

function TodoProvider(props) {

    const defaultTodos =  [
        { id: 0, text: 'Comprar un choripán', completed: true },
        { id: 1, text: 'Ir a la luna', completed: false },
        { id: 2, text: 'Tomar el curso de intro a React', completed: true },
        { id: 3, text: 'Terminar el The Witcher 3', completed: false },
        { id: 4, text: 'Ver el señor de los Anillos', completed: false },
        { id: 5, text: 'Salir de joda', completed: false },
        { id: 6, text: 'Dominar el mundo', completed: false },
        { id: 7, text: 'Jugar al CS', completed: false },
        { id: 8, text: 'Hola', completed: true },
    ];

    // HOOKS
	const {
        loading,
        error,
        item: todos,
        persistItemOnLocalStorage: persistTodosList,
    } = useLocalStorage('TODOS_V1', defaultTodos);

    // STATES
    const [openModal, setOpenModal] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    // VARS
    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => todo.completed).length;

    let searchedTodos = todos;
    if (searchValue)
        searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

    // FUNCTIONS
    const addTodo = (text) => {

        if (!text) return;

        const newTodosList = [...todos];

        const newId = todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 0 ;
        const todoToBeAdded = {
            id: newId,
            text,
            completed: false,
        };

        newTodosList.push(todoToBeAdded);

        persistTodosList(newTodosList);
    }
    const toggleCompleteTodo = (id) => {
        const newTodosList = [...todos];
        const index = todos.findIndex(todo => todo.id === id);

        newTodosList[index].completed = !newTodosList[index].completed;

        persistTodosList(newTodosList);
    }
    const removeTodo = (id) => {
        const newTodosList = todos.filter(todo => todo.id !== id);
        persistTodosList(newTodosList);
    }

	return (
		<TodoContext.Provider value={{
			loading,
            error,
            openModal,
            setOpenModal,
            searchValue,
            setSearchValue,
            totalTodos,
            completedTodos,
            searchedTodos,
            addTodo,
            toggleCompleteTodo,
            removeTodo,
		}}>
			{props.children}
		</TodoContext.Provider>
	);
}

export { TodoContext, TodoProvider };