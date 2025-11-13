<script>
  import { currentLang } from '../stores/language';
  import { scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  function switchLanguage(lang) {
    currentLang.set(lang);
  }
</script>

<div class="language-toggle" in:scale={{ duration: 500, delay: 3500, easing: quintOut }}>
  <button
    class="lang-btn"
    class:active={$currentLang === 'ko'}
    on:click={() => switchLanguage('ko')}
  >
    한국어
  </button>
  <button
    class="lang-btn"
    class:active={$currentLang === 'en'}
    on:click={() => switchLanguage('en')}
  >
    English
  </button>
</div>

<style>
  .language-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    display: flex;
    gap: 10px;
    z-index: 1000;
  }

  .lang-btn {
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    color: white;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  .lang-btn:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  .lang-btn:active {
    transform: translateY(0);
  }

  .lang-btn.active {
    background: rgba(255, 255, 255, 0.95);
    color: #667eea;
    border-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    .language-toggle {
      top: 10px;
      right: 10px;
    }

    .lang-btn {
      padding: 8px 16px;
      font-size: 12px;
    }
  }
</style>
