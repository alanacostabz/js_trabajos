const { taskOne, taskTwo } = require("./tasks");

async function main() {
  try {
    console.time("Measuring time");
    const results = await Promise.all([taskOne(), taskTwo()]);
    console.timeEnd("Measuring time");

    console.log("Task one returned", valueOne);
    console.log("Task two returned", valueTwo);
  } catch (error) {
    console.log(e);
  }
}

main();
