function save() {

    flag = true;

    var name = document.getElementById("empForm").elements.namedItem("name").value;
    var gender = document.getElementById("empForm").elements.namedItem("gender").value;
    var hrSelected = document.getElementById("empForm").elements.namedItem("hr").checked;
    var salary = document.getElementById("empForm").elements.namedItem("salary").value;
    var day = document.getElementById("empForm").elements.namedItem("Day").value;
    var month = document.getElementById("empForm").elements.namedItem("Month").value;
    var year = document.getElementById("empForm").elements.namedItem("Year").value;

    const department = document.querySelectorAll('.checkbox');

    let allDept = [];
    department.forEach(
        e => {
            if (e.checked) {
                allDept.push(e.value);
            }
        }
    );

    const profilePic = document.querySelectorAll('[name=profile]');
    const profileError = document.querySelector('.profile-error');

    var selectedProfile = "";
    profilePic.forEach(e => {
        if (e.checked) {
            selectedProfile = e;
        }
    });
    var emp = new EmployeePayroll();
    try {
        emp.profilePic = selectedProfile.value;
        profileError.textContent = "";
    } catch (e) {
        profileError.textContent = e;
        flag = false;
    }

    var startDate = day + "/" + month + "/" + year;

    emp.name = name;
    emp.gender = gender;
    emp.hrSelected = hrSelected;
    emp.salary = salary;
    emp.startDate = startDate;

    addEmpData(emp);

    /*const emp = {
        name: name,
        profile: profile,
        gender: gender,
        hrSelected: hrSelected,
        salary: salary,
        startDate: startDate
    }
    alert(emp.name + "\n" + emp.profile + "\n" + emp.gender + "\n" + emp.hrSelected + "\n" + emp.salary + "\n" + emp.startDate);*/
    return flag;
}

function addEmpData(emp) {
    let empList = JSON.parse(localStorage.getItem('EmpList'));

    if (empList == undefined) {
        empList = [emp];
    } else {
        empList.push(emp);
    }
    alert(empList.toString());

    localStorage.setItem('EmpList', JSON.stringify(empList));
}