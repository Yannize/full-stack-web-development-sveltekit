<script context='module'>

    export const load = async ({ fetch }) => {
        const res = await fetch('/API')
        console.log(res)
        if(res.ok) {
            const todos = await res.json()
            return {
                props: { todos }
            }
        }

        return {
            error: new Error('Error')
        }
    }
</script>

<script>
    import './home.css'
    // @ts-nocheck
    import TodoItem from "$lib/todo-item.svelte"

    const title = 'Todos'

    export let todos;
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<form action="/API" method="POST">
    <label for="new-todo">
        <input type="text" name="text" id="new-todo" aria-label="Add a todo" placeholder="+ type to add a todo">
    </label>
</form>

{todos}

<ul>
    <TodoItem isDone={false}/>
    <TodoItem isDone={true}/>
    <TodoItem isDone={false}/>
</ul>

