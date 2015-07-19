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

function print(location){
  location.innerHTML=("There are "+students.length+" students and "+mentors.length+" mentors.<br>");
  location.innerHTML+="<h2>Students</h2>";
  for(var i=0;i<students.length;i++){
    location.innerHTML+=printPerson(students[i]);
  }
  location.innerHTML+="<h2>Mentors</h2>";
  for(var i=0;i<mentors.length;i++){
    location.innerHTML+=printPerson(mentors[i]);
  }
}

function printPerson(person){
  var line = ("<br>Name: "+person.name+
      "<br>Phone Number: "+person.phoneNumber+
      "<br>City: "+person.city);
  return line;
}


function displayMentorByCity(cityName){
  var cityDiv=document.getElementById('city');
  cityDiv.innerHTML="<h3>Mentors from "+cityName+"</h3>";
  for (var i=0;i<mentors.length;i++){
    if(mentors[i].city===cityName){
      cityDiv.innerHTML+=printPerson(mentors[i]);
    }
  }
}
alert("Please enter students");
fill(students);
alert("Please enter mentors");
fill(mentors);
var resultsDiv = document.getElementById('results');
print(resultsDiv);
var cityName = prompt("Please enter city name");
displayMentorByCity(cityName);
