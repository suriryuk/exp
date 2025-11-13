<script>
  import { currentLang } from '../stores/language';

  function switchLanguage(lang) {
    currentLang.set(lang);
  }
</script>

<div class="inline-flex h-9 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
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
