<script lang="ts">
  import App from '$lib/components/App.svelte'
  import { io } from 'socket.io-client'

  const socket = io()

  socket.on('eventFromServer', (message: any) => {
    console.log(message)
  })

</script>

<div>
  <App />
</div>

<style>
  :global(body) {
    margin: 0;
  }
</style>
