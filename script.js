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

// Object destructuring
const { name, courses } = student;
console.log("Destructured Name:", name);
console.log("Destructured Courses:", courses);

// Array destructuring
const scores = [85, 92, 78, 90];
const [firstScore, secondScore] = scores;
console.log("First Score:", firstScore);
console.log("Second Score:", secondScore);


// ------------------------------------------
// Part 4: Spread Operator
// ------------------------------------------

// Clone student object
const studentClone = { ...student, graduationYear: 2026 };
console.log("Cloned Student:", studentClone);

// Merge arrays
const newCourses = ["Databases", "Cloud Computing"];
const mergedCourses = [...student.courses, ...newCourses];
console.log("Merged Courses:", mergedCourses);
