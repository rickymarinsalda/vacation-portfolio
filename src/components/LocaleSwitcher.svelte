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
    <div> <select value={value} on:change={switchLocale}>
        <option value="en">EN</option>
        <option value="it">IT</option>
      </select> </div>
  </div>

