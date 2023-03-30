<script lang="ts">
    export let description = ''
    export let title = ''
</script>

<div class="md:h-[17rem] md:w-[15rem] w-40 h-32 bg-trasnparent p-4 flex flex-col items-center justify-center mb-6 mx-3 shadow-md rounded-lg overflow-hidden dark:shadow-lg dark:shadow-zinc-900">
    
    <div class="flex row items-center justify-center my-3 dark:text-zinc-200">
    
        <slot/>
    
        {#if description != ""}
            <p class="text-xl">{@html description}</p>
        {/if}
    </div>

    <h3 class="text-xl font-medium text-zinc-800 dark:text-zinc-300">{title}</h3>
</div>