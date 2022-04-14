const helloWorld = () => {
  console.log('Hello World');
  let total = 100 + 1000
  console.log(total)
}

const hi = (callbackk) => {
  console.log('Hi')
  callbackk();
}

hi(helloWorld)

hi(function test() {
      console.log('ini function baru');
})

const student = (callback) => {
  callback("Kami FSW 13", 25)
}

student((perkenalan, jumlah_murid) => {
  console.log(`Perkenalkan ${perkenalan} dengan ${jumlah_murid} murid !`)
})
