export const makeId = (length) => {
  let result = '';

  // list out all of the characters and numbers that can be included
  const characters = 'abcdefghijklmnopqrstuvwxyz1234567890';

  // loop through the characters string
  while (result.length !== length) {
    const charLength = characters.length;

    const randomNumber = Math.floor(Math.random() * charLength);

    // get one random number from the length of characters
    // add some rules that will help with generating a unique character every time
    // add a single character to the results variable from the loop
    result += characters[randomNumber];
  }
  return result;
};
