<script lang="ts">
  import { T } from '@threlte/core'
  import { OrbitControls, GLTF} from '@threlte/extras'
  import { level } from './map'
	import Player from './Player.svelte';
	import { AutoColliders } from '@threlte/rapier';
  import * as THREE from 'three'
	import CustomRenderer from './CustomRenderer.svelte';
	import { scale } from 'svelte/transition';
	import Grass from './Grass.svelte';
	import Crate from './Crate.svelte';
	import Fence from './Fence.svelte';
	import Spikes from './Spikes.svelte';

  let x = writable 
  let y, 
  let z;
  let position = ;

  let plane;
  let playerMesh;

  let testMode = false;

  let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
   camera.lookAt(new THREE.Vector3(0, 0, 0));
  $: console.log(camera)
  let cameraHelper = new THREE.CameraHelper(camera);

  let material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.5,
  });

</script>
<T is={camera} makeDefault position={[position[0], position[1], position[2]]}>
  <OrbitControls
    enableZoom={true}
    enablePan
    enableDamping
    target.y={1.5}
    maxPolarAngle={Math.PI * 3/4}
  />
</T>

{#if testMode}
<T is={cameraHelper} />
{/if}


<T.DirectionalLight
  intensity={1}
  position.x={5}
  position.y={10}
/>


<T.AmbientLight intensity={0.7} />


{#each level as line, z}
  {#each line as block, x}
    {#if block === 8}
    <AutoColliders shape="cuboid" >
    <T.Mesh  position={[0-x, 0, z]}>
      <T.BoxGeometry args={[1, 3, 1]} />
      <T.MeshStandardMaterial color="cyan" roughness={0} />
    </T.Mesh>
    </AutoColliders>
    {:else if block === 2}
    <Grass position={[0-x, -0.5, z]}/>
    {:else if block === 3}
    <Crate position={[0-x, -0.5, z]}/>
    {:else if block === 4}
    <Fence position={[0-x, -0.5, z]} rotated />
    {:else if block === 5}
    <T.Mesh  position={[0-x, 0, z]} >
      <T.BoxGeometry args={[1, 0.2, 1]} />
      <T.MeshStandardMaterial color="cyan" transparent opacity={0.5}/>
    </T.Mesh>
    {:else if block === 6}
      <Fence position={[0-x, -0.5, z]} rotated />
    {:else if block === 7}
      <Spikes position={[0-x, -0.5, z]}/>   
    {:else if  block === 1}
   <Player position={position} {playerMesh}/>
    {/if}
  {/each}
{/each}



<AutoColliders shape={'cuboid'} >
<T.Mesh position={[0, -1, 0]} bind:ref={plane} receiveShadow>
  <T.BoxGeometry args={[98,1, 98]} />
  <T.MeshStandardMaterial color="cyan" roughness={-1}/>
</T.Mesh>
</AutoColliders>

<CustomRenderer selectedMesh={plane}/>



