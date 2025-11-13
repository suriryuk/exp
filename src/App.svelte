<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { loadConfig, config, currentLang } from './stores/language';
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
    class="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden"
    in:fade={{ duration: 500, easing: quintOut }}
  >
    <!-- Animated gradient orbs -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-0 -left-4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div class="absolute top-0 -right-4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute -bottom-8 left-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style="animation-delay: 4s;"></div>
    </div>

    <!-- Grid pattern overlay -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

    <LanguageToggle />

    <main class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <!-- Header Section -->
      <header class="text-center mb-16 md:mb-20">
        <div class="inline-block mb-6 px-6 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
          <p class="text-sm font-medium text-purple-300">
            {translations.slogan || 'develop. derive. delight.'}
          </p>
        </div>
      </header>

      <!-- Main Animation Section -->
      <section class="mb-12 md:mb-16">
        <WordAnimation />
      </section>

      <!-- Description Card -->
      <section class="mb-12 md:mb-16 max-w-3xl mx-auto">
        <div class="bg-gradient-to-r from-slate-900/50 via-purple-900/30 to-slate-900/50 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 md:p-10 text-center shadow-2xl">
          <p class="text-xl md:text-2xl text-purple-100 leading-relaxed">
            {translations.description || 'We develop innovative solutions'}
          </p>
        </div>
      </section>

      <!-- Social Links Section -->
      <section class="max-w-4xl mx-auto">
        <SocialLinks />
      </section>

      <!-- Footer -->
      <footer class="mt-20 text-center">
        <div class="inline-flex items-center gap-2 text-sm text-purple-400/60">
          <div class="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          <span>Powered by Svelte & Tailwind CSS</span>
        </div>
      </footer>
    </main>
  </div>
{/if}
