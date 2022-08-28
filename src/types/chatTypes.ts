export interface User {
  username: string;
  room: string
  socket_id: string;
}

export interface Message {
  room: string;
  text: string;
  username: string;
  createdAt: Date;
}