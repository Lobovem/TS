// class School {
//   directions: any = [];

//   addDirection(direction: string): void {
//     this.directions.push(direction);
//   }
// }

// class Direction {
//   levels: any = [];
//   private _name: string;

//   constructor(name: string) {
//     this._name = name;
//   }

//   get name(): string {
//     return this._name;
//   }

//   addLevel(level: any): void {
//     this.levels.push(level);
//   }
// }

// class Level {
//   groups: any = [];

//   private _name: string;
//   private _program: string;

//   constructor(name: string, program: string) {
//     this._name = name;
//     this._program = program;
//   }

//   get name(): string {
//     return this._name;
//   }

//   get program(): string {
//     return this._program;
//   }

//   addGroup(group: any): void {
//     this.groups.push(group);
//   }
// }

// class Group {
//   _students: any = [];
//   //why is it code whithout private
//   directionName: string;
//   levelName: string;

//   constructor(directionName: string, levelName: string) {
//     this.directionName = directionName;
//     this.levelName = levelName;
//   }

//   get students(): any {
//     return this._students;
//   }

//   addStudent(student: any): void {
//     this._students.push(student);
//   }

//   showPerformance(): any {
//     const sortedStudents = this.students.toSorted((a: any, b: any) => b.getPerformanceRating() - a.getPerformanceRating());

//     return sortedStudents;
//   }
// }

// class Student {
//   grades: any = {};
//   attendance: any = [];

//   private firstName: string;
//   private lastName: string;
//   private birthYear: number;

//   constructor(firstName: string, lastName: string, birthYear: number) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthYear = birthYear;
//   }

//   get fullName(): string {
//     return `${this.lastName} ${this.firstName}`;
//   }

//   set fullName(value: string) {
//     [this.lastName, this.firstName] = value.split(' ');
//   }

//   get age(): number {
//     return new Date().getFullYear() - this.birthYear;
//   }

//   get grade(): number {
//     return this.grades;
//   }

//   //string and number
//   setGrade(subject: string, grade: any): void {
//     this.grades[subject] = grade;
//   }

//   //boolean
//   markAttendance(present: boolean): void {
//     this.attendance.push(present);
//   }

//   getPerformanceRating(): number {
//     //array grades - number
//     const gradeValues: any = Object.values(this.grades);
//     console.log('gradeValues', gradeValues);

//     if (gradeValues.length === 0) return 0;

//     const averageGrade = gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;

//     const attendancePercentage = (this.attendance.filter((present: boolean) => present).length / this.attendance.length) * 100;

//     return (averageGrade + attendancePercentage) / 2;
//   }
// }

// let school = new School();
// console.log(school);

// let direction1: any = new Direction('JS');
// direction1.addLevel('Pro');
// console.log(direction1);

// let level1: any = new Level('Front', 'TS');
// console.log(level1);

// let group1 = new Group('Back', 'Node');
// console.log(group1);

// let student1 = new Student('Lobov', 'Yevhen', 1987);
// let student2 = new Student('Amk', 'Dima', 2000);
// student1.markAttendance(true);
// student2.markAttendance(false);

// student1.setGrade('web', 10);
// student1.setGrade('css', 5);
// student1.setGrade('js', 7);

// student2.setGrade('web', 2);
// student2.setGrade('css', 1);
// student2.setGrade('js', 5);

// console.log(student1);
// console.log(student2);
// student1.getPerformanceRating();

// group1.addStudent(student1);
// group1.addStudent(student2);
// console.log('after added student1 ===>', group1);

// level1.addGroup(group1);
// console.log('after added group1 ===>', level1);

// direction1.addLevel(level1);
// console.log('after added level1 ===>', direction1);

// school.addDirection(direction1);
// console.log('after added direction1 ===>', school);
