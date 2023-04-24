// A function that returns the sum of all the student ids
// Using the reduce function on the array.
export default function getStudentIdsSum(StudentList) {
  return StudentList.reduce((prev, current) => prev + current.id, 0);
}
