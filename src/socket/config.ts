import { DefaultEventsMap } from '@socket.io/component-emitter';
import { io, Socket } from 'socket.io-client';

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

export const initiateSocketConnection = () => {
  socket = io('http://localhost:3000', {
    transports: [ "websocket" ]
	});
	console.log(`Connecting socket...`);
}

export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if(socket) socket.disconnect();
}

export const subscribeToMessages = (callback: any) => {
  if (!socket) return(true);
  socket.on('message', msg => {
    console.log('Room event received!');
    return callback(null, msg);
  });
}

export const selectRoom = ({username, room}: any, callback: any) => {
  if (socket) socket.emit('select_room', {username, room}, callback)
}

export const sendMessage = ({username, text, room, date}: any, callback: any) => {
  if (socket) socket.emit('message', {username, text, room, date} , callback);
}