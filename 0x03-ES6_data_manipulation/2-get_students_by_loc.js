// A function that returns an array of objects located in a specific city.
// Using the filter function on the array.
export default function getStudentsByLocation(StudentList, City) {
  return StudentList.filter((obj) => obj.location === City);
}
