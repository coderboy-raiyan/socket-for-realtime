import { io } from "socket.io-client";
const mainEle = document.querySelector("#app") as HTMLDivElement;

const socket = io("http://localhost:5000");

mainEle.innerHTML = `<h1>Hello Socket</h1>`;

socket.on("connect", () => {
  socket.emit("message", { msg: `Hello I'm client ${socket.id}` });
  socket.on("message", (msg) => {
    console.log(msg);
  });
});
