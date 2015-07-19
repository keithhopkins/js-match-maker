var students = [];
var mentors = [];


function fill(list){
  while(true){
    var person = {name: null,
                   phoneNumber: null,
                   city: null};
    person.name = prompt("Please enter person's name:");
    if(person.name===null){
      break;
    }
    person.phoneNumber = prompt("Please enter "+person.name+"\'s phone number:");
    person.city = prompt("Please enter "+person.name+"\'s city:");
    if(!validate(person)){
      continue;
    }
    list.push(person);
  }
  return list;
}

function validate(input) {
  for(var key in input){
    if(input[key]===null || input[key]===""){
      alert("Cannot submit blank forms");
      return false;
    }
  }
  return true;
}

function print(){
  alert("There are "+students.length+" students.\nThere are "+mentors.length+" mentors.");
  for(var i=0;i<students.length;i++){
    alert("Student:\nName: "+students[i].name+
        "\nPhone Number: "+students[i].phoneNumber+
        "\nCity: "+students[i].city);
  }
  for(var i=0;i<mentors.length;i++){
    alert("Mentor:\nName: "+mentors[i].name+
        "\nPhone Number: "+mentors[i].phoneNumber+
        "\nCity: "+mentors[i].city);
  }
}
prompt("Please enter students");
fill(students);
prompt("Please enter mentors");
fill(mentors);
print();
