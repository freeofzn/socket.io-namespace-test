module.exports = (namespace2) => {
  namespace2.on("connection", (socket) => {
    console.log("connection namespace2");
    socket.on("chat message", (msg) => {
      namespace2.emit("chat message", msg);
    });

    socket.on("disconnect", () => {
      socket.broadcast.emit("chat message", "disconnect");
      console.log("user disconnected");
    });
  });
};
