<script lang="ts">
    import{setupI18n,t} from '../i18n'
    export let title = ''
    export let description = ''
    export let src = ''
    export let link =''
</script>

<div class="!min-h-[32rem] lg:my-4 lg:max-w-md max-w-xs shrink-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="{link}">
        <div class="lg:h-60 h-40 overflow-y-hidden rounded-t-lg">
            <img class="w-full" src="{src}" alt="{src}"/>
        </div>
    </a>
    <div class="p-5">
        <a href="{link}">
            <h5 class="my-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <a href="{link}" class="inline-flex items-center px-3 py-2 text-xl font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {@html $t('vicino.bottone')}
            <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
