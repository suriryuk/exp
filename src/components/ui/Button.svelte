<script>
  import { cn } from '../../lib/utils/cn.js';

  export let variant = 'default';
  export let size = 'default';
  export let className = '';

  const variants = {
    default: 'bg-white/20 text-white hover:bg-white/30 border-white/30',
    primary: 'bg-white text-purple-600 hover:bg-white/90',
    ghost: 'hover:bg-white/10 text-white',
  };

  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 px-3',
    lg: 'h-11 px-8',
  };
</script>

<button
  class={cn(
    'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 disabled:pointer-events-none disabled:opacity-50 backdrop-blur-md border-2',
    variants[variant],
    sizes[size],
    className
  )}
  on:click
  {...$$restProps}
>
  <slot />
</button>
