import { createServer } from "node:http";
import config from 'config'
import { Server } from "socket.io";

const wsServer = createServer();

const ALLOWED_DOMAINS = [
    "*"
];


const io = new Server(wsServer, { cors: { origin:  ALLOWED_DOMAINS as string[]} });

io.on("connection", (socket) => {
  console.log("Client connected", socket.id);

  socket.on("join", (data) => {
    socket.join(String(data.tenantId));

    socket.emit("join", { roomId: String(data.tenantId) });
  });
});

export default {
  wsServer,
  io,
};
