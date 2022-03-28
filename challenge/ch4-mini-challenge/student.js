const student = [
  gusde = {
    firstName: "Bagus",
    lastName: "Suprapta",
    province: "Bali",
    age: 23,
    status: "single",

    isWestJava: function() {
      return this.province == "West Java" ? true : false;
    },
    isOver22: function() {
      return this.age > 22 ? true : false;
    },
    isSingle: function() {
      return this.status == "single" ? true : false;
    },
    introduce: function() {
      let speak = `Nama saya ${this.firstName} ${this.lastName},`;
      speak += this.isWestJava() ? " Saya tinggal di Jawa Barat," : " Saya tidak tinggal di Jawa Barat,";
      speak += this.isOver22() ? " umur saya diatas 22 tahun." : " umur saya dibawah 22 tahun.";
      speak += this.isSingle()? " Dan status saya single." : " Dan saya tidak single.";
      return speak;
    }
  }
];

console.log(student[0].isWestJava());
console.log(student[0].isOver22());
console.log(student[0].isSingle());
console.log(student[0].introduce());