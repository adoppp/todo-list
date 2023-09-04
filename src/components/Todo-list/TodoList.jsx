export const TodoList = ({todos}) => {
    const item = todos.map(todo => 
    <li key={todo.id}>
        <h2>{todo.title}</h2>
        <p>{todo.text}</p>
        <input type="checkbox" checked={todo.compeled}/>
    </li>);
    
    return (
        <section>
            <ul>
                {item}
            </ul>
        </section>
    )
}