var students = [];
var mentors = [];


var resultsDiv = document.getElementById('results');

var submitButton = document.getElementById('submit');
submitButton.addEventListener("click",addPerson);

var clearButton = document.getElementById('clear');
clearButton.addEventListener("click",removeForm);

function addPerson(){
  event.preventDefault();
  var input = document.getElementsByName('person');
  var name = input[0].value;
  var phone = input[1].value;
  var city = input[2].value;
  var person = {name: name,
                phoneNumber: phone,
                city: city};
  console.log(person);
  var type = document.getElementsByName('type');
  for (var i=0; i<type.length;i++){
    if(type[i].checked){
      type = type[i].value;
      break;
    }
  }
  console.log(type);
  if(type==='student'){
    students.push(person);
  } else if(type==='mentor'){
    mentors.push(person);
  } else {return;}
  print(resultsDiv);
  console.log(students);
  console.log(mentors);
  document.getElementsByTagName('form')[0].reset();
}

function removeForm() {
  event.preventDefault();
  var formDiv = document.getElementById('form');
  formDiv.innerHTML='';
  addCityForm();
}

function addCityForm(){
  var formDiv = document.getElementById('form');
  var inner = "<h1>Enter city of mentor</h1>City:<br><input type=\"text\" name = \'city\'><br>";
  formDiv.innerHTML = inner;
  var button = "<button id = 'citySubmit'>Submit</button>";
  formDiv.innerHTML+=button;
  button = document.getElementById('citySubmit');
  button.addEventListener("click",displayMentorByCity);
}

function print(location){
  location.innerHTML=("There are "+students.length+" students and "+mentors.length+" mentors.<br>");
  location.innerHTML+="<h2>Students</h2>";
  for(var i=0;i<students.length;i++){
    location.innerHTML+=printPerson(students[i]);
  }
  location.innerHTML+="<h2>Mentors</h2>";
  for(var k=0;k<mentors.length;k++){
    location.innerHTML+=printPerson(mentors[k]);
  }
}

function printPerson(person){
  var line = ("<br>Name: "+person.name+
      "<br>Phone Number: "+person.phoneNumber+
      "<br>City: "+person.city+"<br>");
  return line;
}

function displayMentorByCity(){
  var el = document.getElementsByName('city')[0];
  var city = el.value;
  console.log(city);
  var cityDiv=document.getElementById('city');
  cityDiv.innerHTML="<h3>Mentors from "+city+"</h3>";
  for (var i=0;i<mentors.length;i++){
    if(mentors[i].city===city){
      cityDiv.innerHTML+=printPerson(mentors[i]);
    }
  }
}
