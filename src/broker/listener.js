import { subscribeToQueue } from "./rabbit.js";
import sendEmail from "../utils/email.js"

function startListener() {
    subscribeToQueue("user_created", async (msg) => {
        const {email, role, fullname:{firstName, lastName}} = msg;

        const template = `
            <h1>Welcome to Face Harmony</h1>
            <p> Dear ${firstName} ${lastName}</p>
            <p>Thank you for registering with Face Harmony. We are excited to have you</p>
            <p>Your role is : ${role}</p>
            <p>We hope you enjoy our services</p>
            <br/>
            <p>Best Regards,</p>
            <p>Face Harmony</p>
        `

        await sendEmail(email, "Welcome to Face Harmony", "Thank you for registering with Face Harmony.", template);
    })
}

export default startListener;