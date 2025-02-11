<script>
  import { useTodoState } from "$lib/states/todoState.svelte";

    let error = $state("");
    const todoState = useTodoState();

    const addTodo = async (e) => {
        const todo = Object.fromEntries(new FormData(e.target));
        const result = await todoState.add(todo);
        if (result) error = result.error;
        else error = "";
        e.target.reset();
        e.preventDefault();
    };
</script>

<br/>

<form  class="mx-auto w-full max-w-md space-y-4" onsubmit={addTodo}>
    {#if error}
        <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <span class="font-medium">{error}</span> 
        </div>
    {/if}

    <label for="name" class="label">
        <span class="label-text">Todo name:</span >
        <input class="input" id="name" name="name" type="text" placeholder="Enter name..." />
    </label>
    <label class="flex items-center space-x-2">
        <input class="checkbox" type="checkbox" id="done" name="done" />
        <p>Done</p>
    </label>
    <button type="submit" class="w-full btn preset-filled-primary-500">Add todo</button>
</form>

<br/>