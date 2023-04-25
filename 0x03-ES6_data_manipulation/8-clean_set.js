export default function cleanSet(set, startString) {
  // If startString is falsy, return an empty string
  if (!startString) {
    return '';
  }

  // Initialize an empty array to store matching elements
  const result = [];

  // Iterate over the Set using a for...of loop
  for (const element of set) {
    // If the element starts with the startString, removes the startString and
  // adds the resulting substring to the result array
    if (element.startsWith(startString)) {
      result.push(element.slice(startString.length));
    }
  }

  // Joins the result array with hyphens and return the resulting string
  return result.join('-');
}
