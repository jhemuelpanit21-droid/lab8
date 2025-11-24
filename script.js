// ------------------------------------------
// Part 1: Creating and Understanding Objects
// ------------------------------------------

const student = {
  name: "Alex Johnson",
  age: 20,
  enrolled: true,
  courses: ["Math", "Physics", "Web Development"],

  displayInfo() {
    return `Student: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}`;
  },

  addCourse(newCourse) {
    this.courses.push(newCourse);
  },

  totalCourses() {
    return this.courses.length;
  }
};

// Output basic info
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Info:", student.displayInfo());



// ------------------------------------------
// Part 2: Working with JSON
// ------------------------------------------

const jsonString = JSON.stringify(student);
console.log("JSON String:", jsonString);

const parsedStudent = JSON.parse(jsonString);
console.log("Parsed Object:", parsedStudent);

// ------------------------------------------
// Part 3: Manipulating the Object
// ------------------------------------------