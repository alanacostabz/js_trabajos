const util = require("util");
const sleep = util.promisify(setTimeout);

module.exports = {
  async taskOne() {
    try {
      throw new Error("SOME PROBLEM");
      await sleep(4000);
      return "ONE VALUE";
    } catch (err) {
      console.log(err);
    }
  },

  async taskTwo() {
    try {
      await sleep(2000);
      return "TWO VALUE";
    } catch (error) {
      console.log(err);
    }
  },
};
