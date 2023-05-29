class Person {
    constructor(name, age, college) {
        this.name = name;
        this.age = age;
        this.college = college;
    }

    saludate() {
        console.log(`Hello, i'm ${this.name}`);
    }
}

class Teacher extends Person {
    constructor(name, age, college, courses) {
        super(name, age, college);
        this.courses = courses;
    }

    saludate() {
        console.log(`Hi, i'm ${this.name} and im teacher of ${this.college}`)
    }

    getCourses() {
        console.log(`i teach ${this.courses} courses in ${this.college}`)
    }
}

class Student extends Person {
    constructor(name, age, college, course) {
        super(name, age, college);
        this.course = course;
    }

    saludate() {
        console.log(`Hi, i'm ${this.name} and i'm learning in ${this.course} from ${this.college}`)
    }
}
