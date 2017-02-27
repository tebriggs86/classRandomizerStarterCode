$(document).ready(function(){
    var students = [
        "Richard",
        "Adrian",
        "Gerardo",
        "Tim",
        "Jorge",
        "Garrett",
        "Spencer",
        "Evila",
        "Kaci",
        "Isaac",
        "Abby",
        "Alexis",
        "Thomas",
        "Basil"];
    var teachers = [
        "Matt",
        "Samuel",
        "Sam",
        "Trey"];
    
    $("#teacherButton").click(function () {
        var randomTeacher = teachers[Math.floor(Math.random() * teachers.length)];
        $("#teacherDisplay").html(randomTeacher + " is your teacher.");
    });

    $("#studentButton").click(function() {
        var randomStudent = students[Math.floor(Math.random() * students.length)];
        $("#studentDisplay").html(randomStudent + " is your student.");
    });
    
    $("#addStudentButton").click(function() {
        var newStudent = $("#txtAddStudent").val();
        console.log(newStudent);
        students.push(newStudent);
        $("#addStudentDisplay").html(newStudent + " added!")
    })

});
