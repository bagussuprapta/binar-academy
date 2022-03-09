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

function reverseName(...name){
  let names = [{}];
  for(const i in name){
    names[i]["name"] = name[i];
    names[i]["split"] = name[i].split('');
    names[i]["reverse"] = names[i].split.reverse();
    names[i]["join"] = names[i].reverse.join('');
  }
  return names;
}

console.log(reverseName(nameStudent));