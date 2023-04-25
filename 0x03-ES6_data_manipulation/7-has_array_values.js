export default function hasValuesFromArray(set, array) {
  // Check whether all elements in the array exist in the set.
  return array.every((element) => set.has(element));
}
