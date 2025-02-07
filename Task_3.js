function combineStrings(str1, str2, str3) {
  let result = "";

  for (let i = 0; i < str1.length; i++) {
    result += str1[i] + str2[i] + str3[i];
  }

  return result;
}

console.log(combineStrings("aa", "bb", "cc"));
console.log(combineStrings("hello", "world", "12345"));
console.log(combineStrings("xx", "yy", "zz"));
console.log(combineStrings("abc", "def", "ghi"));
