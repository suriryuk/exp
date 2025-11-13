<script>
  import { onMount } from 'svelte';
  import { scale, fly } from 'svelte/transition';
  import { elasticOut, quintOut } from 'svelte/easing';

  let animationState = 'initial'; // initial, showing, merging, merged
  let clickable = false;

  function startAnimation() {
    animationState = 'initial';
    setTimeout(() => {
      animationState = 'showing';
      setTimeout(() => {
        animationState = 'merging';
        setTimeout(() => {
          animationState = 'merged';
          clickable = true;
        }, 1200);
      }, 2500);
    }, 100);
  }

  function restartAnimation() {
    if (!clickable) return;
    clickable = false;
    startAnimation();
  }

  onMount(() => {
    startAnimation();
  });
</script>

<div
  class="min-h-[150px] flex items-center justify-center relative my-10 transition-transform duration-300 {clickable ? 'cursor-pointer hover:scale-105' : ''}"
  on:click={restartAnimation}
  on:keypress={restartAnimation}
  role="button"
  tabindex="0"
>
  {#if animationState === 'showing' || animationState === 'initial'}
    <div class="flex items-center justify-center gap-8 flex-wrap">
      <span
        class="text-5xl md:text-7xl font-bold bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] animate-pulse"
        in:fly={{ x: -200, duration: 800, delay: 0, easing: elasticOut }}
      >
        develop
      </span>
      <span
        class="text-5xl md:text-7xl font-bold bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] animate-pulse"
        in:fly={{ x: 200, duration: 800, delay: 300, easing: elasticOut }}
      >
        derive
      </span>
    </div>
  {/if}

  {#if animationState === 'merging'}
    <div class="flex items-center justify-center gap-8">
      <span
        class="text-5xl md:text-7xl font-bold bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent"
        out:fly={{ x: 100, y: 0, duration: 800, easing: quintOut }}
        style="animation: mergeToCenter 0.8s ease-in-out forwards;"
      >
        develop
      </span>
      <span
        class="text-5xl md:text-7xl font-bold bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent"
        out:fly={{ x: -100, y: 0, duration: 800, easing: quintOut }}
        style="animation: mergeToCenter 0.8s ease-in-out forwards;"
      >
        derive
      </span>
    </div>
  {/if}

  {#if animationState === 'merged'}
    <div class="flex items-center justify-center">
      <span
        class="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,215,0,0.8)] animate-pulse"
        in:scale={{ duration: 1000, easing: elasticOut }}
        style="background-size: 200% 200%; animation: shine 3s ease-in-out infinite, pulseGlow 2s ease-in-out infinite;"
      >
        derives
      </span>
    </div>
  {/if}
</div>

<style>
  @keyframes mergeToCenter {
    0% {
      transform: translateX(0) scale(1);
      opacity: 1;
    }
    50% {
      transform: translateX(0) scale(0.7);
      opacity: 0.5;
    }
    100% {
      transform: translateX(0) scale(0);
      opacity: 0;
    }
  }

  @keyframes shine {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @keyframes pulseGlow {
    0%, 100% {
      transform: scale(1);
      filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.6));
    }
    50% {
      transform: scale(1.05);
      filter: drop-shadow(0 0 40px rgba(255, 215, 0, 0.9));
    }
  }
</style>
