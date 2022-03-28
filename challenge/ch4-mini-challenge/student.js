const student = [
  (gusde = {
    firstName: "Bagus",
    lastName: "Suprapta",
    province: "Bali",
    age: 23,
    status: "single",
  }),
];

function introduce(student, isWestJava, isOver22, isSingle) {
  let speak = `Nama saya ${student.firstName} ${student.lastName},`;
  speak += isWestJava() ? " Saya tinggal di Jawa Barat," : " Saya tidak tinggal di Jawa Barat,";
  speak += isOver22() ? " umur saya diatas 22 tahun." : " umur saya dibawah 22 tahun.";
  speak += isSingle() ? " Dan status saya single." : " Dan saya tidak single.";
  return speak;
}

console.log(
  introduce(
    student[0],
    () => {
      return student.province == "Jawa Barat" ? true : false;
    },
    () => {
      return student.age > 22 ? true : false;
    },
    () => {
      return student.status == "single" ? true : false;
    }
  )
);
