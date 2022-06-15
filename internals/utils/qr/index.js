import qrcode from "qrcode";
import chalk from "chalk";

const toTerminal = async (url) => {
  qrcode.toString(url, function (err, string) {
    if (err) throw err;
    console.log(string);
    console.log(
      chalk.white.bold.bgCyan(`Scan QR to view app on mobile @ ${url}`)
    );
  });
};

const toDataURL = (url, callback) => {
  return qrcode.toDataURL(url, async (err, string) => {
    if (err) throw err;
    return await callback(string);
  });
};

module.exports = { toTerminal, toDataURL };
