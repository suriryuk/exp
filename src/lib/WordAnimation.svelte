<script>
  import { onMount } from 'svelte';
  import { scale, fly } from 'svelte/transition';
  import { elasticOut, backOut } from 'svelte/easing';

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
  class="relative py-12"
  on:click={restartAnimation}
  on:keypress={restartAnimation}
  role="button"
  tabindex="0"
>
  <div class="min-h-[200px] md:min-h-[250px] flex items-center justify-center relative {clickable ? 'cursor-pointer' : ''}">
    {#if animationState === 'showing' || animationState === 'initial'}
      <div class="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
        <div
          class="relative"
          in:fly={{ x: -300, duration: 1000, delay: 0, easing: elasticOut }}
        >
          <span class="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            develop
          </span>
        </div>
        <div
          class="relative"
          in:fly={{ x: 300, duration: 1000, delay: 300, easing: elasticOut }}
        >
          <span class="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            derive
          </span>
        </div>
      </div>
    {/if}

    {#if animationState === 'merging'}
      <div class="flex items-center justify-center gap-12">
        <span
          class="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-br from-blue-600 to-cyan-500 bg-clip-text text-transparent"
          out:fly={{ x: 100, y: -50, duration: 800, easing: backOut }}
        >
          develop
        </span>
        <span
          class="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent"
          out:fly={{ x: -100, y: -50, duration: 800, easing: backOut }}
        >
          derive
        </span>
      </div>
    {/if}

    {#if animationState === 'merged'}
      <div class="relative">
        <div
          class="relative"
          in:scale={{ duration: 1200, easing: elasticOut }}
        >
          <span class="text-7xl md:text-9xl lg:text-[12rem] font-black bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
            derives
          </span>
        </div>
      </div>
    {/if}
  </div>

  {#if clickable}
    <p class="text-center text-sm text-muted-foreground mt-6">
      Click to replay animation
    </p>
  {/if}
</div>
