<script>
    import { useTodoState } from "$lib/states/todoState.svelte";

    const todoState = useTodoState();
    let { todo } = $props();
</script>

<div class="flex items-center space-x-4 card border-[2px] p-4">
    <div class="shrink-0">
        <input lass="w-8 h-8 rounded-full" type="checkbox" checked={todo.done} id={todo.id} onchange={() => todoState.update(todo.id, todo.done)}/>
     </div>
    <div class="flex-1 min-w-0">
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
            {todo.name} ({todo.done ? "done" : "not done"})
        </p>
    </div>
    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        <button type="button" onclick={() => todoState.remove(todo.id)} class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Remove</button>
    </div>
</div>