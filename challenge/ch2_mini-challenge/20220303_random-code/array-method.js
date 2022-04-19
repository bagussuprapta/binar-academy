let students = ["Chandra", "Dendy", "Devi", "Safira", "Gusde", "Ariawan", "Fadli"];

// For each an array
console.log("FOR EACH");
students.forEach(student => {
  console.log(student);
});

// Try for each with limit
console.log("FOR EACH WITH LIMIT");
students.splice(0, students.length / 2).forEach(student => {
  console.log(student);
})