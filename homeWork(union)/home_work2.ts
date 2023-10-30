class School {
  // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

  _areas: Area[] = [];
  _lecturers: Lecturers[] = []; // Name, surname, position, company, experience, courses, contacts

  get areas(): Area[] {
    return this._areas;
  }

  get lecturers(): Lecturers[] {
    return this._lecturers;
  }

  addArea(area: Area): void {
    this._areas.push(area);
  }

  removeArea(area: Area): void {
    const removeEl = this._areas.indexOf(area);
    if (removeEl !== -1) {
      this._areas.splice(removeEl, 1);
    }
  }

  addLecturer(lecturer: Lecturers): void {
    this._lecturers.push(lecturer);
  }

  removeLecturer(lecturer: Lecturers): void {
    const removeEl = this._lecturers.indexOf(lecturer);
    if (removeEl !== -1) {
      this._lecturers.splice(removeEl, 1);
    }
  }
}

class Area {
  // implement getters for fields and 'add/remove level' methods
  _levels: Level[] = [];
  _name: string;

  get name(): string {
    return this._name;
  }

  get levels(): Level[] {
    return this._levels;
  }

  constructor(name: string) {
    this._name = name;
  }

  addLevel(level: Level): void {
    this._levels.push(level);
  }

  removeLevel(level: Level): void {
    const removeLevel = this._levels.indexOf(level);
    if (removeLevel !== -1) {
      this._levels.splice(removeLevel, 1);
    }
  }
}

class Lecturers {
  _name: string;
  _surname: string;
  _position: string;
  _company: string;
  _experience: string;
  _courses: string;
  _contacts: number;

  get name(): string {
    return this._name;
  }

  get surname(): string {
    return this._surname;
  }

  get position(): string {
    return this._position;
  }

  get company(): string {
    return this._company;
  }

  get experience(): string {
    return this._experience;
  }

  get courses(): string {
    return this._courses;
  }

  get contacts(): number {
    return this._contacts;
  }

  constructor(name: string, surname: string, position: string, company: string, experience: string, courses: string, contacts: number) {
    this._name = name;
    this._surname = surname;
    this._position = position;
    this._company = company;
    this._experience = experience;
    this._courses = courses;
    this._contacts = contacts;
  }
}

class Level {
  // implement getters for fields and 'add/remove group' methods

  _groups: Group[] = [];
  _name: string;
  _description: string;

  get groups(): Group[] {
    return this._groups;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
  }

  addGroup(group: Group): void {
    this._groups.push(group);
  }

  removeGroup(group: Group): void {
    const removeGroup = this._groups.indexOf(group);

    if (removeGroup !== -1) {
      this._groups.splice(removeGroup, 1);
    }
  }
}

class Group {
  // implement getters for fields and 'add/remove student' and 'set status' methods

  _area: any;
  _status: boolean;
  _students: Student[] = []; // Modify the array so that it has a valid toSorted method*
  _directionName: string;
  _levelName: string;

  get area() {
    return this._area;
  }

  get status(): boolean {
    return this._status;
  }

  get students(): Student[] {
    return this._students;
  }

  get directName(): string {
    return this._directionName;
  }

  get levelName(): string {
    return this._levelName;
  }

  constructor(directionName: string, levelName: string) {
    this._directionName = directionName;
    this._levelName = levelName;
  }

  setStatus(value: boolean): void {
    this._status = value;
  }

  addStudent(student: Student): void {
    this._students.push(student);
  }

  removeStudent(student: Student): void {
    const removeStudent = this._students.indexOf(student);
    if (removeStudent !== -1) {
      this._students.splice(removeStudent, 1);
    }
  }

  showPerformance(): Student[] {
    const sortedStudents = this._students.sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
    return sortedStudents;
  }
}

class Student {
  // implement 'set grade' and 'set visit' methods

  _firstName: string;
  _lastName: string;
  _birthYear: number;
  // _grades: Record<string, number> = {};
  _grades: Array<{ workName: string; mark: number }> = [];
  // _visits: Array<{ lesson: string; present: number }> = []; // lesson: present
  // _grades: any = {};
  _visits: any = []; // lesson: present

  get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value) {
    [this._lastName, this._firstName] = value.split(' ');
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }

  constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  setGrade(workName: string, mark: number): void {
    this._grades.push({ workName, mark });
  }

  setVisits(lesson: string, present: number): void {
    this._visits.push({ lesson, present });
  }

  getPerformanceRating(): number {
    const gradeValues = Object.values(this._grades);

    if (!gradeValues.length) return 0;

    const averageGrade = gradeValues.reduce((sum: number, grade) => sum + grade.mark, 0) / gradeValues.length;
    const attendancePercentage = (this._visits.filter((present) => present).length / this._visits.length) * 100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
