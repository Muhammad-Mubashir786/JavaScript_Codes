const grades = [75, 89, 90, 78, 76, 95];
let gradeSum = 0;
for (var i = 0; i < grades.length; i++) {
  gradeSum += grades[i];
}
console.log(gradeSum / grades.length);
