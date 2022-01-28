window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');

    const textError = document.querySelector('.text-error');

    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        var emp = new EmployeePayroll();
        try {
            emp.name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const salary = document.querySelector('#salary');
    const salaryOp = document.querySelector('.salary-output');
    salaryOp.textContent = salary.value;
    salary.addEventListener('input', function() {
        salaryOp.textContent = salary.value;
    });


    /*const gender = document.querySelectorAll('[name=gender]');

    gender.forEach(
        e => {
            e.addEventListener('change', function() {
                alert(e.value);
            })
        }
    );*/
});