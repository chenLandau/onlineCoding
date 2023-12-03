import { io } from "socket.io-client";
const socket = io("localhost:5000", {
  autoConnect: false,
  transports: ["websocket"],
});
export const connectSocket = async () => {
  socket.connect();
  socket.on("connect", () => {
    console.log("connected to socket");
  });
};
export const joinRoom = (roomId, cb) => {
  socket.emit("join-room", roomId, cb);
};
export const leaveRoom = (roomId) => {
  socket.emit("leave-room", roomId);
  socket.disconnect();
};

export const sendCode = (roomId, code) => {
  socket.emit("send_code", roomId, code);
};

export const receiveCode = (cb) => {
  socket.on("receive_code", cb);
};
