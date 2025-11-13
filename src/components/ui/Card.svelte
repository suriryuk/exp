<script>
  import { cn } from '../../lib/utils/cn.js';

  export let className = '';
</script>

<div class={cn('rounded-xl border bg-card text-card-foreground shadow', className)}>
  <slot />
</div>
