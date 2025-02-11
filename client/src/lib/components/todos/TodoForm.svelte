<script>
  import { useTodoState } from "$lib/states/todoState.svelte";

    const todoState = useTodoState();

    const addTodo = (e) => {
        const todo = Object.fromEntries(new FormData(e.target));
        todoState.add(todo);
        e.target.reset();
        e.preventDefault();
    };
</script>

<br/>

<form  class="mx-auto w-full max-w-md space-y-4" onsubmit={addTodo}>
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