<script>
    import {
      createEventDispatcher
    } from 'svelte';
    export let value = 'en';
    const dispatch = createEventDispatcher();
  
    // @ts-ignore
    function switchLocale(event) {
      event.preventDefault();
      dispatch('locale-changed', event.target.value);
    }

  </script>
  <style>
    .choose-locale {
      display: flex;
      justify-content: center;
    }
  
    
  </style>
  <div class="choose-locale ">
    <div> <select value={value} on:change={switchLocale} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="en">EN</option>
        <option value="it">IT</option>
      </select> </div>
  </div>


