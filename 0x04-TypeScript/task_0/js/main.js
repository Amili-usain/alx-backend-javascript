// Create two students
var student1 = {
    firstName: "Amili",
    lastName: "Mugigayi",
    age: 20,
    location: "Kampala"
};
var student2 = {
    firstName: "Hussein",
    lastName: "Mugigayi",
    age: 22,
    location: "Mbale"
};
// Create an array of students
var studentsList = [student1, student2];
// Get the table element from the DOM
var table = document.getElementById("students-table");
// Loop through the students and append a new row for each student
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var firstNameCell = row.insertCell();
    var locationCell = row.insertCell();
    firstNameCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.location;
});
