<script>
  import { currentLang } from '../stores/language';
  import { scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  function switchLanguage(lang) {
    currentLang.set(lang);
  }
</script>

<div
  class="fixed top-4 right-4 z-50 inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground shadow-sm"
  in:scale={{ duration: 500, delay: 3500, easing: quintOut }}
>
  <button
    on:click={() => switchLanguage('ko')}
    class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 {$currentLang === 'ko'
      ? 'bg-background text-foreground shadow-sm'
      : 'hover:bg-background/50'}"
  >
    한국어
  </button>
  <button
    on:click={() => switchLanguage('en')}
    class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 {$currentLang === 'en'
      ? 'bg-background text-foreground shadow-sm'
      : 'hover:bg-background/50'}"
  >
    English
  </button>
</div>
