export default function createInt8TypedArray(length, position, value) {
  // Creates a new ArrayBuffer with the specified length.
  const buffer = new ArrayBuffer(length);

  // Checks whether the specified position is within the range of the ArrayBuffer.
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Creates a new Int8Array view of the ArrayBuffer.
  const int8Array = new Int8Array(buffer);

  // Sets the specified value at the specified position.
  int8Array[position] = value;

  // Returns the modified ArrayBuffer.
  return buffer;
}
