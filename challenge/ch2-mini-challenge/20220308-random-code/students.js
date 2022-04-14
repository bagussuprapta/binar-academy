const students = [
  {
      name: 'Fadli',
      age: 22,
      city: 'Heaven',
      income: 100000000,
      status: 'Married'
  },
  {
      name: 'Aulia',
      age: 17,
      city: 'Dream',
      income: 0,
      status: 'Single'
  },
  {
    name: 'Gusde',
    age: 20,
    city: 'Zimbabwoy',
    income: 10000000,
    status: 'Single'
  },
  {
    name: 'Gozali',
    age: 20,
    city: 'Island',
    income: 50000000,
    status: 'Married'
  }
]

// Jangan tampilkan income sama status dari student yang income nya < 5000000, status single
function getStudentsLimitIncomeAndSingle(){
  students.forEach(student => {
    if(student.income > 50000000 && student.status != "Single"){
      console.log(student);
    }
  });
}

function deleteIncome(){
  students.forEach(student => {
    if(student.income < 50000000){
      delete student.income;
    }
  });
}

function deleteSingle(){
  students.forEach(student => {
    student.status == "Single" ? delete student.status : "";
  });
}

deleteIncome();
deleteSingle();
console.log(students);
