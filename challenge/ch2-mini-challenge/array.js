let nameFasil = 'Imam';
// isi variable nameStudent yg nilainya namamu
let nameStudent = "Gusde";

/* 
  Soalnya adalah reverse name variable spt = Imam JADI mamI,
  petunjuknya pelajari array method = SPLIT, REVERSE, JOIN dan PUSH
  dibawah ini aku kasih flow pengerjaannya, langkah demi langkah.
*/

// 1. String jadi array = 'imam' jadi ['imam']
// 2. Looping array nya
// 3. Split array = ['i', 'm', 'a', 'm'] dengan SPLIT method
// 4. Di dalam lopping, reverse elemen dalam array nya dengan REVERSE method
// 5. Array ke string dengan JOIN method 

function reverseName(name){
  let names = [{name: name}];
  for(const char in names){
    names[char]["split"] = names[char].name.split('');
    names[char]["reverse"] = names[char].split.reverse();
  }
  return names;
}

console.log(reverseName(nameStudent));