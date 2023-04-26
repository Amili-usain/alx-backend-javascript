// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Amili",
  lastName: "Mugigayi",
  age: 20,
  location: "Kampala"
};

const student2: Student = {
  firstName: "Hussein",
  lastName: "Mugigayi",
  age: 22,
  location: "Mbale"
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Get the table element from the DOM
const table = document.getElementById("students-table");

// Loop through the students and append a new row for each student
studentsList.forEach(student => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();
  firstNameCell.innerHTML = student.firstName;
  locationCell.innerHTML = student.location;
});
