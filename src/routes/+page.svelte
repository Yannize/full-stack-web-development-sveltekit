<script>
    // @ts-nocheck
    import TodoItem from "$lib/todo-item.svelte"

    const title = 'Todos'
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<form action="" method="">
    <label for="new-todo">
        <input type="text" name="text" id="new-todo" aria-label="Add a todo" placeholder="+ type to add a todo">
    </label>
</form>

<ul>
    <TodoItem />
    <TodoItem />
    <TodoItem />
</ul>

