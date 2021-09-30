const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = (first) => {
  // first[0].toUpperCase();
  // const newTutorial1 = tutorials.split(0, 6, 11, 15, 20, 28));
  let cap = tutorials.map((first) => {
    first.split(" ");
    console.log(first.split(" "));
    return first
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join(" ");
  });
  return cap;
  // console.log("cap is", cap);
  // let secondTut = cap.map((second) => console.log(second));
  // console.log(secondTut);
  // // secondTut.charAt(0);
  // cap.map((first) => first[0].toUpperCase());
  // console.log();
  // cap.join(" ");
  // return tutorials;
};
