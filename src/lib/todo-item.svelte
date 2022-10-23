<style>
    li {
        list-style-type: none;

        background-color: #d5dee8;

        padding: .3rem;
        width: 100%;
        height: 100%;
        border-radius: 5px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 0.5rem;
    }



    form {
        align-self: stretch;
    }
    
    label {
        width: 100%;
        height: 100%;
        display: flex; 
        column-gap: 10px;
    }

    form:has(#todo-text-content) {
        width: 100%;
    }

    button {
        border: none;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        line-height: 1rem;

        background-color: transparent;
    }

    button:hover {
        cursor: pointer;
    }

    #done-btn {
        border: 1.5px solid rgb(164, 164, 164);
        width: 20px;
        height: 20px;
        border-radius: 100px;
        
        color: grey;
        font-size: .6rem;
        
        /* display: flex;
        justify-content: center;
        align-items: center; */

        position: relative;
    }


    #done-btn.done::before {
        content: "✔️";
    }


</style>


<script>
// @ts-nocheck

    export let isDone;
</script>

<li>
    <form action="" method="">
        <label for="todo-done-btn">
            <input type="hidden" name="todo-done-btn" id="todo-done-btn" value="">
            <button id='done-btn' class="{isDone && 'done'}" aria-label="Mark done/not done"></button>
        </label>
    </form>
    
    <form action="" method="">
        <label for="todo-text-content">
            <input type="text" name="todo-text-content" id="todo-text-content" value="I'm a Todo">
            <button aria-label="Save todo">💾</button>
        </label>
    </form>
    
    <form action="" method="">
        <button aria-label="Delete the todo">❌</button>
    </form>
</li>

