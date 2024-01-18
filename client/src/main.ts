import { io } from "socket.io-client";
const mainEle = document.querySelector<HTMLDivElement>("#app");

const socket = io("http://localhost:5000");

mainEle!.innerHTML = `<h1>Hello Socket</h1>`;

socket.on("connect", () => {
  console.log(socket.id);
});
