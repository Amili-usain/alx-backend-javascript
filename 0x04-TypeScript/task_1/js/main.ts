// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  teach(course: string): void;
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Define the printTeacherFunction interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define the StudentClass constructor interface
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Define the StudentClass interface
interface StudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Implement the Teacher interface in a class
class ScienceTeacher implements Teacher {
  constructor(public firstName: string, public lastName: string) {}

  teach(course: string): void {
    console.log(`Teaching ${course} to students.`);
  }
}

// Implement the Directors interface in a class
class MathDirector implements Directors {
  constructor(public firstName: string, public lastName: string, public numberOfReports: number) {}

  teach(course: string): void {
    console.log(`Teaching ${course} to students.`);
  }
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Implement the StudentClass in a class
class Student implements StudentClass {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Implement the StudentClassConstructor interface
const createStudentClass: StudentClassConstructor = class StudentClassImpl implements StudentClass {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Test the code
const scienceTeacher = new ScienceTeacher("Jane", "Doe");
const mathDirector = new MathDirector("John", "Doe", 5);
const student1 = new Student("Bob", "Smith");
const student2 = new createStudentClass("Alice", "Johnson");

scienceTeacher.teach("Chemistry");
mathDirector.teach("Calculus");
console.log(printTeacher("John", "Doe"));
console.log(student1.displayName());
console.log(student2.workOnHomework());
