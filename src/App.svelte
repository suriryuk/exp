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

<svelte:head>
  <style>
    body {
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }
  </style>
</svelte:head>

{#if ready}
  <div
    class="min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-purple-800 flex items-center justify-center relative overflow-hidden"
    in:fade={{ duration: 500, easing: quintOut }}
  >
    <!-- Animated background overlay -->
    <div class="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] pointer-events-none animate-spin-slow">
      <div
        class="w-full h-full"
        style="background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);"
      ></div>
    </div>

    <ParticleBackground />
    <LanguageToggle />

    <main class="max-w-6xl w-[90%] mx-auto text-center py-16 md:py-24 relative z-10">
      <section class="mb-20 md:mb-32">
        <WordAnimation />

        <h1 class="text-4xl md:text-5xl lg:text-6xl mt-10 mb-5 font-light tracking-[0.15em] text-white drop-shadow-lg animate-fade-in-up">
          {translations.slogan || 'develop. derive. delight.'}
        </h1>

        <p class="text-lg md:text-xl lg:text-2xl mb-10 text-white/95 drop-shadow-md leading-relaxed animate-fade-in-up-delayed">
          {translations.description || 'We develop innovative solutions'}
        </p>
      </section>

      <SocialLinks />
    </main>
  </div>
{/if}

<style>
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  :global(.animate-spin-slow) {
    animation: spin-slow 20s linear infinite;
  }

  @keyframes fade-in-up {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  :global(.animate-fade-in-up) {
    animation: fade-in-up 1s ease-out 3s both;
  }

  :global(.animate-fade-in-up-delayed) {
    animation: fade-in-up 1s ease-out 3.5s both;
  }
</style>
