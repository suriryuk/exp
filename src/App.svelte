<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { loadConfig, config, currentLang } from './stores/language';
  import ParticleBackground from './lib/ParticleBackground.svelte';
  import WordAnimation from './lib/WordAnimation.svelte';
  import LanguageToggle from './lib/LanguageToggle.svelte';
  import SocialLinks from './lib/SocialLinks.svelte';

  let ready = false;

  onMount(async () => {
    await loadConfig();
    ready = true;
  });

  $: translations = $config?.translations?.[$currentLang] || {};
</script>

{#if ready}
  <div class="app" in:fade={{ duration: 500, easing: quintOut }}>
    <ParticleBackground />
    <LanguageToggle />

    <main class="container">
      <section class="hero">
        <WordAnimation />

        <h1 class="slogan">
          {translations.slogan || 'develop. derive. delight.'}
        </h1>

        <p class="description">
          {translations.description || 'We develop innovative solutions'}
        </p>
      </section>

      <SocialLinks />
    </main>
  </div>
{/if}

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  .app {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .app::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at 30% 50%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%
    );
    animation: rotate 20s linear infinite;
    pointer-events: none;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    padding: 60px 20px;
    position: relative;
    z-index: 10;
  }

  .hero {
    margin-bottom: 80px;
  }

  .slogan {
    font-size: clamp(1.8rem, 5vw, 2.8rem);
    margin: 40px 0 20px;
    font-weight: 300;
    letter-spacing: 3px;
    color: white;
    text-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    animation: fadeInUp 1s ease-out 3s both;
  }

  .description {
    font-size: clamp(1rem, 3vw, 1.3rem);
    margin-bottom: 40px;
    color: rgba(255, 255, 255, 0.95);
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    animation: fadeInUp 1s ease-out 3.5s both;
    line-height: 1.6;
  }

  @keyframes fadeInUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 40px 20px;
    }

    .hero {
      margin-bottom: 60px;
    }
  }
</style>
