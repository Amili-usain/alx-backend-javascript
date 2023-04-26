namespace Subjects {
  export class Cpp extends Subject {
    getRequirements() {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher() {
      const teacher = this.teacher;
      if (teacher && teacher.experienceTeachingC) {
        return `Available Teacher: ${teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
