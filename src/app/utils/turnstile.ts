import axios from "axios";

export const validateTurnstile = async (token: string) => {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  try {
    const res = await axios.post(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      new URLSearchParams({
        secret: secret!,
        response: token,
      })
    );
    return res.data.success;
  } catch (err) {
    console.error(err);
    return false;
  }
};
