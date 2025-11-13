<script>
  import { onMount } from 'svelte';
  import { scale, fly } from 'svelte/transition';
  import { elasticOut, backOut } from 'svelte/easing';
  import Card from '../components/ui/Card.svelte';

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
  class="relative"
  on:click={restartAnimation}
  on:keypress={restartAnimation}
  role="button"
  tabindex="0"
>
  <Card className="bg-gradient-to-br from-slate-900/90 via-purple-900/50 to-slate-900/90 backdrop-blur-xl border-purple-500/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 p-8 md:p-12 {clickable ? 'cursor-pointer hover:scale-[1.02]' : ''}">
    <div class="min-h-[200px] md:min-h-[250px] flex items-center justify-center relative">
      {#if animationState === 'showing' || animationState === 'initial'}
        <div class="flex items-center justify-center gap-12 md:gap-16 flex-wrap">
          <div
            class="relative group"
            in:fly={{ x: -300, duration: 1000, delay: 0, easing: elasticOut }}
          >
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <span class="relative text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
              develop
            </span>
          </div>
          <div
            class="relative group"
            in:fly={{ x: 300, duration: 1000, delay: 300, easing: elasticOut }}
          >
            <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <span class="relative text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
              derive
            </span>
          </div>
        </div>
      {/if}

      {#if animationState === 'merging'}
        <div class="flex items-center justify-center gap-12">
          <span
            class="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            out:fly={{ x: 100, y: -50, duration: 800, easing: backOut }}
          >
            develop
          </span>
          <span
            class="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            out:fly={{ x: -100, y: -50, duration: 800, easing: backOut }}
          >
            derive
          </span>
        </div>
      {/if}

      {#if animationState === 'merged'}
        <div class="relative group">
          <div class="absolute -inset-4 bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-600 rounded-2xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity animate-gradient-x"></div>
          <div
            class="relative"
            in:scale={{ duration: 1200, easing: elasticOut }}
          >
            <span class="text-7xl md:text-9xl font-black bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x">
              derives
            </span>
            <div class="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          </div>
        </div>
      {/if}
    </div>

    {#if clickable}
      <p class="text-center text-sm text-purple-300/60 mt-4 animate-pulse">
        Click to replay
      </p>
    {/if}
  </Card>
</div>
