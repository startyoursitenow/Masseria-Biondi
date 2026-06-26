const path = require("path");
const { startServer } = require("next/dist/server/lib/start-server");

process.env.__NEXT_DEV_SERVER = "1";
process.env.NEXT_PRIVATE_WORKER = "1";
process.env.NEXT_TELEMETRY_DISABLED = "1";

const dir = path.resolve(__dirname, "..");
const portArgIndex = process.argv.indexOf("-p");
const port = portArgIndex >= 0 ? Number(process.argv[portArgIndex + 1]) : 3000;

startServer({
  dir,
  port,
  allowRetry: false,
  isDev: true,
  hostname: "localhost",
  serverFastRefresh: true
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
