<script>
  import { currentLang } from '../stores/language';
  import { scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import Button from '../components/ui/Button.svelte';

  function switchLanguage(lang) {
    currentLang.set(lang);
  }
</script>

<div
  class="fixed top-6 right-6 z-50 flex gap-2 bg-slate-900/80 backdrop-blur-md border border-purple-500/20 rounded-full p-1 shadow-lg shadow-purple-500/10"
  in:scale={{ duration: 500, delay: 3500, easing: quintOut }}
>
  <button
    on:click={() => switchLanguage('ko')}
    class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 {$currentLang === 'ko'
      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
      : 'text-purple-300 hover:text-white hover:bg-purple-900/50'}"
  >
    한국어
  </button>
  <button
    on:click={() => switchLanguage('en')}
    class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 {$currentLang === 'en'
      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
      : 'text-purple-300 hover:text-white hover:bg-purple-900/50'}"
  >
    English
  </button>
</div>
