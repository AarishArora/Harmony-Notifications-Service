import app from "./src/app.js";
import {connect} from "./src/broker/rabbit.js";
import startListener from "./src/broker/listener.js";
import config from "./src/config/config.js";


connect().then(startListener)

const PORT = config.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Notification Server is running on port ${PORT}`);
})