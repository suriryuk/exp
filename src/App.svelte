<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { loadConfig, config, currentLang } from './stores/language';
  import WordAnimation from './lib/WordAnimation.svelte';
  import LanguageToggle from './lib/LanguageToggle.svelte';
  import SocialLinks from './lib/SocialLinks.svelte';
  import Button from './components/ui/Button.svelte';

  let ready = false;

  onMount(async () => {
    await loadConfig();
    ready = true;
  });

  $: translations = $config?.translations?.[$currentLang] || {};

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 64; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
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
    class="min-h-screen bg-background"
    in:fade={{ duration: 500, easing: quintOut }}
  >
    <!-- Fixed Header -->
    <header class="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur-sm">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center gap-2 cursor-pointer" on:click={() => scrollToSection('home')} on:keypress={() => scrollToSection('home')} role="button" tabindex="0">
            <div class="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
              <span class="text-white font-bold text-sm">D</span>
            </div>
            <span class="font-bold text-lg">Derives</span>
          </div>

          <!-- Navigation Links -->
          <nav class="hidden md:flex items-center gap-8">
            <button on:click={() => scrollToSection('home')} class="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {translations.nav_home || 'Home'}
            </button>
            <button on:click={() => scrollToSection('features')} class="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {translations.nav_features || 'Features'}
            </button>
            <button on:click={() => scrollToSection('contact')} class="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {translations.nav_contact || 'Contact'}
            </button>
          </nav>

          <!-- Language Toggle -->
          <LanguageToggle />
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="relative overflow-hidden border-b bg-background pt-16">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-60"></div>

      <div class="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20 text-center">
          <!-- Badge -->
          <div class="mb-8 inline-flex items-center rounded-full border bg-background px-4 py-1.5 text-sm font-medium shadow-sm">
            <span class="mr-2">✨</span>
            {translations.slogan || 'develop. derive. delight.'}
          </div>

          <!-- Main Animation -->
          <div class="w-full max-w-6xl">
            <WordAnimation />
          </div>

          <!-- Description -->
          <p class="mt-8 max-w-2xl text-xl text-muted-foreground">
            {translations.description || 'We develop innovative solutions that transform ideas into reality'}
          </p>

          <!-- CTA Buttons -->
          <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="shadow-lg" on:click={() => scrollToSection('contact')}>
              {translations.cta_start || 'Get Started'}
            </Button>
            <Button variant="outline" size="lg" on:click={() => scrollToSection('features')}>
              {translations.cta_learn || 'Learn More'}
            </Button>
          </div>
        </div>
      </div>

      <!-- Decorative Elements -->
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>

    <!-- Features Section -->
    <section id="features" class="bg-background">
      <!-- Feature 1 -->
      <div class="border-b">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div class="grid gap-12 md:grid-cols-2 items-center">
            <div class="order-2 md:order-1">
              <div class="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 mb-4">
                <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Fast Development
              </div>
              <h2 class="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {translations.feature1_title || 'Rapid Development Process'}
              </h2>
              <p class="text-lg text-muted-foreground mb-6">
                {translations.feature1_desc || 'We leverage cutting-edge tools and frameworks to deliver your projects faster without compromising quality. Our streamlined workflow ensures quick iterations and rapid deployment.'}
              </p>
              <Button variant="outline" on:click={() => scrollToSection('contact')}>
                Learn More
              </Button>
            </div>
            <div class="order-1 md:order-2">
              <div class="rounded-xl border bg-gradient-to-br from-blue-50 to-purple-50 p-12 shadow-lg">
                <svg class="w-full h-48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Feature 2 -->
      <div class="border-b">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div class="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <div class="rounded-xl border bg-gradient-to-br from-purple-50 to-pink-50 p-12 shadow-lg">
                <svg class="w-full h-48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <div>
              <div class="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700 mb-4">
                <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Innovation
              </div>
              <h2 class="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {translations.feature2_title || 'Innovation at Our Core'}
              </h2>
              <p class="text-lg text-muted-foreground mb-6">
                {translations.feature2_desc || 'We push the boundaries of what\'s possible with cutting-edge technologies and creative solutions. Stay ahead of the competition with our innovative approach.'}
              </p>
              <Button variant="outline" on:click={() => scrollToSection('contact')}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      <!-- Feature 3 -->
      <div class="border-b">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div class="grid gap-12 md:grid-cols-2 items-center">
            <div class="order-2 md:order-1">
              <div class="inline-flex items-center rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-700 mb-4">
                <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Collaboration
              </div>
              <h2 class="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {translations.feature3_title || 'Seamless Team Collaboration'}
              </h2>
              <p class="text-lg text-muted-foreground mb-6">
                {translations.feature3_desc || 'Work together efficiently with our collaborative tools and processes. We ensure clear communication and smooth workflows for the best results.'}
              </p>
              <Button variant="outline" on:click={() => scrollToSection('contact')}>
                Learn More
              </Button>
            </div>
            <div class="order-1 md:order-2">
              <div class="rounded-xl border bg-gradient-to-br from-pink-50 to-red-50 p-12 shadow-lg">
                <svg class="w-full h-48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="bg-muted/30 py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {translations.contact || 'Get In Touch'}
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-muted-foreground">
            {translations.contact_desc || 'Ready to start your project? Connect with us through your preferred platform.'}
          </p>
        </div>

        <SocialLinks />
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t bg-background py-12">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div class="text-center md:text-left">
            <p class="text-sm text-muted-foreground">
              © 2024 Derives. All rights reserved.
            </p>
          </div>
          <div class="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <span class="font-semibold text-foreground">Svelte</span>
            <span>&</span>
            <span class="font-semibold text-foreground">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
{/if}
