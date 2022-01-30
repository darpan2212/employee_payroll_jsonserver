function save() {

    flag = true;

    var name = document.getElementById("empForm").elements.namedItem("name").value;
    var gender = document.getElementById("empForm").elements.namedItem("gender").value;
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

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const empDate = !startDate ? "undefined" : new Date(startDate).toLocaleDateString('en-US', options);

    emp.name = name;
    emp.gender = gender;
    emp.department = allDept.join(',');
    emp.salary = salary;
    emp.startDate = empDate;

    if (flag) {
        addEmpData(emp);
    }

    return flag;
}

function addEmpData(emp) {
    let empList = JSON.parse(localStorage.getItem('EmpList'));
    if (empList == undefined) {
        localStorage.setItem('lastId', 1);
        empList = [emp];
    } else {
        emp.id = parseInt(localStorage.getItem('lastId')) + 1;
        localStorage.setItem('lastId', emp.id);
        empList.push(emp);
    }

    localStorage.setItem('EmpList', JSON.stringify(empList));
}