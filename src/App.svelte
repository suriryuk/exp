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
    <LanguageToggle />

    <!-- Hero Section -->
    <section class="relative overflow-hidden border-b bg-background">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-60"></div>

      <div class="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex min-h-[90vh] flex-col items-center justify-center py-20 text-center">
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
            {translations.description || 'We develop innovative solutions'}
          </p>

          <!-- CTA Buttons -->
          <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="shadow-lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <!-- Decorative Elements -->
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>

    <!-- Features Section -->
    <section class="border-b bg-background py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-16 text-center">
          <h2 class="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why Choose Us
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-muted-foreground">
            We combine innovation, creativity, and technical excellence to deliver outstanding results.
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <div class="rounded-lg border bg-card p-8 shadow-sm transition-all hover:shadow-md">
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-semibold">Fast Development</h3>
            <p class="text-muted-foreground">
              Rapid prototyping and development with modern tools and frameworks.
            </p>
          </div>

          <div class="rounded-lg border bg-card p-8 shadow-sm transition-all hover:shadow-md">
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-semibold">Innovation First</h3>
            <p class="text-muted-foreground">
              Cutting-edge solutions that push the boundaries of what's possible.
            </p>
          </div>

          <div class="rounded-lg border bg-card p-8 shadow-sm transition-all hover:shadow-md">
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100 text-pink-600">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 class="mb-2 text-xl font-semibold">Team Collaboration</h3>
            <p class="text-muted-foreground">
              Seamless teamwork and communication for better outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="bg-muted/30 py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {translations.contact || 'Get In Touch'}
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-muted-foreground">
            Connect with us through your preferred platform. We're always here to help.
          </p>
        </div>

        <div class="mx-auto max-w-4xl">
          <SocialLinks />
        </div>
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
