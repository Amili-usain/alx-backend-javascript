import { Subjects } from './Subjects';

// Constants for each subject
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Create a teacher with experience teaching C
export const cTeacher: Subjects.Teacher = { 
  firstName: 'John', 
  lastName: 'Doe',
  experienceTeachingC: 10 
};

// Set the teacher and log the results for Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Set the teacher and log the results for Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Set the teacher and log the results for React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
