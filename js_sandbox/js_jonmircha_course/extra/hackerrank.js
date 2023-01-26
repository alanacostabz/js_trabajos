function isPangram(string) {
  console.log(
    string
      .toLowerCase()
      .split(" ")
      .join("")
      .replace(/^[a-z]+$/i, "")
  );
  return ["abcdefghijklmnopqrstuvwxyz"].every((letter) =>
    letter.includes(string.toLowerCase().split(" ").join(""))
  );
}
console.log(isPangram("The quick brown fox jumps over the lazy dog."));
