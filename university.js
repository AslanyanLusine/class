class UniversityMember {
    constructor(name, age, role, energy = 24) {
      this.name = name;
      this.age = age;
      this.role = role;
      this.energy = energy;
    }
    info() {
      return `${this.name}  ${this.age}  is a ${this.role} with ${this.energy} energy. `;
    }
  }
  class Teacher extends UniversityMember {
    constructor(name, age, role = "Teacher") {
      super(name, age, "Teacher");
    }
  }
  class Student extends UniversityMember {
    constructor(name, age) {
      super(name, age, "Student");
    }
  }
  class University {
    constructor() {
      this.teachers = [];
      this.students = [];
    }
    addMember(member) {
      if (member instanceof Teacher) {
        this.teachers.push(member);
      } else this.students = [...this.students, member];
    }
    removeMember(member) {
      if (member instanceof Teacher) {
        let target = this.teachers.indexOf(member);
        if (target !== -1) this.teachers.splice(target, 1);
      } else {
        let target = this.students.indexOf(member);
        if (target !== -1) this.students.splice(target, 1);
      }
    }
    startLesson() {
      this.students.forEach((student) => {
        student.energy -= 2;
      });
      this.teachers.forEach((teacher) => {
        teacher.energy -= 5;
      });
    }
  }
  let university = new University();
  const teacher = new Teacher("Gor", 35);
  const student = new Student("Karen", 20);
  university.addMember(teacher);
  console.log(university.teachers);
  console.log(teacher.info());
  university.addMember(student);
  console.log(student.info());
  university.startLesson();
  console.log(teacher.info());
  console.log(university.teachers);