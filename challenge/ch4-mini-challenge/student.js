const student = [
  (gusde = {
    firstName: "Bagus",
    lastName: "Suprapta",
    province: "Bali",
    age: 23,
    status: "single",
  }),
  (joko = {
    firstName: "Joko",
    lastName: "Widodo",
    province: "Jawa Barat",
    age: 15,
    status: "married",
  })
];

function introduce(student, isFromWestJava, isOver22, isSingle) {
  let speak = `Nama saya ${student.firstName} ${student.lastName},`;
  speak += isFromWestJava(student.province) ? " Saya tinggal di Jawa Barat," : " Saya tidak tinggal di Jawa Barat,";
  speak += isOver22(student.age) ? " umur saya diatas 22 tahun." : " umur saya dibawah 22 tahun.";
  speak += isSingle(student.status) ? " Dan status saya single." : " Dan status saya tidak single.";
  return speak;
}

console.log(
  introduce(
    student[0],
    (province) => {
      return province == "Jawa Barat" ? true : false;
    },
    (age) => {
      return age > 22 ? true : false;
    },
    (status) => {
      return status == "single" ? true : false;
    }
  )
);

console.log(
  introduce(
    student[1],
    (province) => {
      return province == "Jawa Barat" ? true : false;
    },
    (age) => {
      return age > 22 ? true : false;
    },
    (status) => {
      return status == "single" ? true : false;
    }
  )
);
