var randomstring = require("randomstring");
const { Otp } = require("./models");

const otpHelperGenerate = () => {
  return randomstring.generate({
    length: parseInt(process.env.OTP_CHARACTER_LENGTH),
    charset: "numeric",
  });
};

const otpHelperCreate = async (email) => {
  await Otp.create({ email, code: otpHelperGenerate() });
};

module.exports = {
  otpHelperGenerate,
  otpHelperCreate,
};
