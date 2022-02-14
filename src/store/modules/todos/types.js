export const namespace = 'todos';

export const mutations = {
    ADD_TODO: "addTodo",
    INITIAL_TODO: "initialTodo",
    UPDATE_TODO: "updateTodo",
    DELETE_TODO: "deleteTodo",
}

export const actions = {
    ADD_TODO_TO_REPOSITORY: `${namespace}/addTodoToRepository`,
    GET_ALL_TODOS: `${namespace}/getAllTodos`,
    UPDATE_TODO_TO_REPOSITORY: `${namespace}/updateTodoToRepository`,
    DELETE_TODO_TO_REPOSITORY: `${namespace}/deleteTodoToRepository`,
}