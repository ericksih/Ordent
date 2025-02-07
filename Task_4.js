function generateAcronym(name) {
  const words = name.split(" ");
  let acronym = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === "von") {
      acronym += "v";
    } else {
      let parts = words[i].split("-");
      for (let part of parts) {
        acronym += part[0].toUpperCase();
      }
    }
  }

  return acronym;
}

console.log(generateAcronym("Thomas Meyer"));
console.log(generateAcronym("martin schmidt"));
console.log(generateAcronym("Jan-Erich Schmidt"));
console.log(generateAcronym("Jan Erich Mueller"));
console.log(generateAcronym("Paul Meyer-Schmidt"));
console.log(generateAcronym("Paul von Lahnstein"));
console.log(generateAcronym("Martin von Lahnstein-Meyer"));
console.log(generateAcronym("Anna-Maria von Hohenberg"));
