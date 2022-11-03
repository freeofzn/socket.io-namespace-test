const SocketIO = require("socket.io");
const ns1 = require("./ns1");
const ns2 = require("./ns2");

module.exports = (server) => {
  const io = SocketIO(server); // 소켓생성 !!!
  const namespace1 = io.of("/ns1"); // namespace1
  const namespace2 = io.of("/ns2"); // namespace2
  ns1(namespace1);
  ns2(namespace2);
};
