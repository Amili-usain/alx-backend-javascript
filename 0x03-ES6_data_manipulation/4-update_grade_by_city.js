export default function updateStudentGradeByCity(students, city, newGrades) {
  // Define a default grade object with a grade of 'N/A'.
  const defaultGrade = { grade: 'N/A' };

  // Check whether the students parameter is an array.
  if (students instanceof Array) {
    // filter method creates an array for students that only match the specified city parameter.
    // map method creates a new array of updated student objects.
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  // Returns an empty array if the students parameter is not an array.
  return [];
}
