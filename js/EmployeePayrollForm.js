var salary = document.getElementById("salary");
var output = document.getElementById("rangeValue");

salary.oninput = function() {
    output.innerHTML = salary.value;
};
salary.onloadeddata = function() {
    output.innerHTML = salary.value;
};

function save() {
    var name = document.getElementById("empForm").elements.namedItem("name").value;
    var profile = document.getElementById("empForm").elements.namedItem("profile").value;
    var gender = document.getElementById("empForm").elements.namedItem("gender").value;
    var hrSelected = document.getElementById("empForm").elements.namedItem("hr").checked;
    var salary = document.getElementById("empForm").elements.namedItem("salary").value;
    var day = document.getElementById("empForm").elements.namedItem("Day").value;
    var month = document.getElementById("empForm").elements.namedItem("Month").value;
    var year = document.getElementById("empForm").elements.namedItem("Year").value;

    let nameRegex = RegExp('[A-Z]{1}[a-zA-Z]{2,}$');

    let flag = true;
    if (!nameRegex.test(name)) {
        document.getElementById("nameError").innerHTML = "Name is incorrect";
        flag = false;
    } else {
        document.getElementById("nameError").innerHTML = "";
    }

    if (profile == '') {
        document.getElementById("profileError").innerHTML = "Profile must be selected";
        flag = false;
    } else {
        document.getElementById("profileError").innerHTML = "";
    }
    var startDate = day + "/" + month + "/" + year
    const emp = {
        name: name,
        profile: profile,
        gender: gender,
        hrSelected: hrSelected,
        salary: salary,
        startDate: startDate
    }
    alert(emp.name + "\n" + emp.profile + "\n" + emp.gender + "\n" + emp.hrSelected + "\n" + emp.salary + "\n" + emp.startDate);
    return flag;
}