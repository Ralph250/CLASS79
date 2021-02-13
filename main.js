var names=[];

function submit(){
var name_of_student_1 =document.getElementById("student1").value;
var name_of_student_2 = document.getElementById("student2").value;
var name_of_student_3 = document.getElementById("student3").value;
var name_of_student_4 = document.getElementById("student4").value;
 
names.push(name_of_student_1);
names.push(name_of_student_2);
names.push(name_of_student_3);
names.push(name_of_student_4);
console.log (names);
document.getElementById("sorting-div").innerHTML=(names);
document.getElementById("submitbutton").style.display="none";
document.getElementById("sort-button").style.display="inline-block";

}

function sorting(){
names.sort();
console.log(names);
document.getElementById("sorting-div").innerHTML=(names);

}