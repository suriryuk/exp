<script>
  import { onMount } from 'svelte';
  import { scale, fly, fade } from 'svelte/transition';
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
        }, 1500);
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
  class="animation-container"
  class:clickable
  on:click={restartAnimation}
  on:keypress={restartAnimation}
  role="button"
  tabindex="0"
>
  {#if animationState === 'showing' || animationState === 'initial'}
    <div class="word-group">
      <span
        class="word develop"
        in:fly={{ x: -200, duration: 800, delay: 0, easing: elasticOut }}
      >
        develop
      </span>
      <span
        class="operator plus"
        in:scale={{ duration: 500, delay: 500, easing: quintOut }}
      >
        +
      </span>
      <span
        class="word derive"
        in:fly={{ x: 200, duration: 800, delay: 300, easing: elasticOut }}
      >
        derive
      </span>
    </div>
  {/if}

  {#if animationState === 'merging'}
    <div class="word-group merging">
      <span
        class="word develop"
        out:scale={{ duration: 800, easing: quintOut }}
      >
        develop
      </span>
      <span
        class="operator plus"
        out:fade={{ duration: 500 }}
      >
        +
      </span>
      <span
        class="word derive"
        out:scale={{ duration: 800, easing: quintOut }}
      >
        derive
      </span>
      <span
        class="operator equals"
        in:scale={{ duration: 500, delay: 200, easing: quintOut }}
      >
        =
      </span>
    </div>
  {/if}

  {#if animationState === 'merged'}
    <div class="word-group merged">
      <span
        class="word derives"
        in:scale={{ duration: 1000, easing: elasticOut }}
      >
        derives
      </span>
    </div>
  {/if}
</div>

<style>
  .animation-container {
    min-height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 40px 0;
    transition: transform 0.3s ease;
  }

  .animation-container.clickable {
    cursor: pointer;
  }

  .animation-container.clickable:hover {
    transform: scale(1.05);
  }

  .word-group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .word {
    font-size: clamp(2rem, 6vw, 4rem);
    font-weight: bold;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3),
                 0 0 40px rgba(255, 255, 255, 0.2);
    display: inline-block;
    position: relative;
    background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .word.develop,
  .word.derive {
    animation: glow 2s ease-in-out infinite alternate;
  }

  .word.derives {
    font-size: clamp(2.5rem, 8vw, 5rem);
    background: linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shine 3s ease-in-out infinite, pulse 2s ease-in-out infinite;
    filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.6));
  }

  .operator {
    font-size: clamp(1.8rem, 5vw, 3.5rem);
    font-weight: bold;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .word-group.merging .word {
    animation: merge 0.8s ease-in-out forwards;
  }

  @keyframes glow {
    from {
      filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
    }
    to {
      filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.6));
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

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @keyframes merge {
    0% {
      transform: scale(1) translateX(0);
      opacity: 1;
    }
    50% {
      transform: scale(0.5) translateX(0);
      opacity: 0.5;
    }
    100% {
      transform: scale(0) translateX(0);
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    .word-group {
      gap: 15px;
    }
  }

  @media (max-width: 480px) {
    .word-group {
      gap: 10px;
    }
  }
</style>
