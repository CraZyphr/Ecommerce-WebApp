import {createRouter} from "next-connect";
import db from "../../../utils/db";
import User from "../../../models/user";
import {  createResetToken } from "../../../utils/tokens";
import { sendEmail } from "@/utils/sendEmail";
import { resetEmailTemplate } from "@/email/resetEmailTemplate";
const router = createRouter();

router.post(async (req, res) => {
  try {
    await db.connectDb();
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "This email does not exist." });
    }
    const user_id = createResetToken({
      id: user._id.toString(),
    });
    const url = `${process.env.BASE_URL}/auth/reset/${user_id}`;
    sendEmail(email, url, "", "Reset your password.", resetEmailTemplate);
    await db.disconnectDb();
    res.json({
      message: "Email has been sent, use it to reset your password.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router.handler();
