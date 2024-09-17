import server from "./server";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
