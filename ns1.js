module.exports = (namespace1) => {
  namespace1.on("connection", (socket) => {
    console.log("connection namespace1");
    socket.on("chat message", (msg) => {
      namespace1.emit("chat message", msg);
    });

    socket.on("disconnect", () => {
      socket.broadcast.emit("chat message", "disconnect");
      console.log("user disconnected");
    });
  });
};
