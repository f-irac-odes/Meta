<script>
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
  import {Debug, World} from '@threlte/rapier'

  let testMode = false;
</script>

<Canvas>
  <World>
    {#if testMode}
      <Debug />
    {/if}
    <Scene />
  </World>
</Canvas>
