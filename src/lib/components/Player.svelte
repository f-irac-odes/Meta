<script lang="ts">;
    import { T } from '@threlte/core';
	import { OrbitControls } from "@threlte/extras"; 
	import { AutoColliders, BasicPlayerController, RigidBody } from '@threlte/rapier';
	import { CapsuleGeometry, Color, Mesh, MeshStandardMaterial, Vector4 } from 'three';
    import hidend  from './Scene.svelte';
	import CustomRenderer from './CustomRenderer.svelte';

    export let position; 
    export let playerMesh : Mesh;

</script>
<BasicPlayerController 
 {position}
speed={8}
radius={0.3}
height={1.8}
jumpStrength={3}
groundCollisionGroups={[15]}
playerCollisionGroups={[0]}>

        <T.Mesh receiveShadow castShadow position.y={0.9} bind:ref={playerMesh} >
            <T.CapsuleGeometry args={[0.3, 1.8 - 0.3 * 2]}/>
            <T.MeshStandardMaterial color="white" roughness={0}/>
        </T.Mesh>
        <T.Mesh position={[position[0],  0-0.5, position[2]]} rotation.x={-Math.PI/2} bind:ref={playerMesh} >
            <T.CircleGeometry args={[3, 32, 32]}/>
            <T.MeshStandardMaterial color={[1, 1, 1]} transparent opacity={0.5} doubleSide/>
        </T.Mesh>
</BasicPlayerController>






