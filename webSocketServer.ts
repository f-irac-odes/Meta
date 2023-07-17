import { Server } from 'socket.io';
const plugin = {
	name: 'webSocketServer',
	configureServer(server: { httpServer: any; }) {
	  // we can pass the server to Socket.io
	  const io = new Server(server.httpServer)
	  // ...
	}
  }
export default plugin