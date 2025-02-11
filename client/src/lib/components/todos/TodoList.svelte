<script>
    import { useTodoState } from "$lib/states/todoState.svelte";
    import TodoItem from "./TodoItem.svelte";
    
    const todoState = useTodoState();

    $effect(() => todoState.fetchTodos());
</script>

{#if todoState?.todos.length !== 0}
    <ul class="space-y-4">
        {#each todoState.todos as todo}
            <li>
                <TodoItem {todo} />
            </li>
        {/each}
    </ul>
    
{:else}
    <p>The todos list is empty yet.</p>
{/if}
