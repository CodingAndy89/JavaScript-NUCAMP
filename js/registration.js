class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegister) {
        if (studentToRegister instanceof Student) {
            if (!studentToRegister.name || !studentToRegister.email) {
                console.log("Invalid name or email");
                return false;
            }

            //console.log(studentToRegister.name);
            for (let i = 0; i < this.students.length; i++) {
                if (studentToRegister.email === this.students[i].email) {
                    console.log("Email already registered");
                    return false
                }
            }
            this.students.push(studentToRegister);
            console.log(`${studentToRegister.name} Registered Successfully! in the ${reactBootcamp.name}`);
            return true;
        }
    }

    listStudents(){
        if(this.students.length == 0){
            console.log(`No students are registered to the ${this.name} bootcamp`);
            return false;
        }
        console.log(`The students registered in ${this.name} bootcamp are: `);
        for(let student of this.students){
            console.log(`name : ${student.name} email : ${student.email}`);
        }
        return true;
    }

    getInfo() {
        console.log( `The bootcamp's name: ${this.name} and level: ${this.level}`);
    }

    removeStudent(email){
            console.log(this.students);
            for(let i = 0; i< this.students.length; i++){
                if(this.students[i].email === email){
                    this.students.splice(i, 1);
                    console.log(`The student with email: ${email} has been removed`);
                    break;
                }
            }    
    }
}

testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if ( testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
}

reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if ( reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
        && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log('TASK 2: PASS');
}

const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student);
    const attemptTwo = bootcamp.registerStudent(student);
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
    console.log(attemptOne);
    console.log(attemptTwo);
    console.log(attemptThree);
    if ( attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }
    bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));
    if (bootcamp.listStudents()) {
        console.log("TASK 4 : PASS 1/2");
    }
    bootcamp.students = []; // We can comment this line to execute removeStudent()
    if (!bootcamp.listStudents()){
        console.log("TASK 4 : PASS 2/2");
    }
    bootcamp.getInfo();
    bootcamp.removeStudent(testStudent.email);
};

runTest(reactBootcamp, testStudent);