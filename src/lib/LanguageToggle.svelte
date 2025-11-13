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
  class="fixed top-5 right-5 md:top-8 md:right-8 flex gap-3 z-50"
  in:scale={{ duration: 500, delay: 3500, easing: quintOut }}
>
  <Button
    variant={$currentLang === 'ko' ? 'primary' : 'default'}
    on:click={() => switchLanguage('ko')}
  >
    한국어
  </Button>
  <Button
    variant={$currentLang === 'en' ? 'primary' : 'default'}
    on:click={() => switchLanguage('en')}
  >
    English
  </Button>
</div>
