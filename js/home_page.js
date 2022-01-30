window.addEventListener('DOMContentLoaded', (event) => {
    const empList = JSON.parse(localStorage.getItem('EmpList'));

    var empCount = document.querySelector('.emp-count');

    empCount.innerHTML = `${empList.length}`;

    createTabularInnterHtml();
});

const createTabularInnterHtml = () => {
    const empList = JSON.parse(localStorage.getItem('EmpList'));

    const headerHtml = `<tr>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
</tr>`;

    let innerHtml = `${headerHtml}`;

    for (const empData of empList) {
        innerHtml = `${innerHtml}
            <tr>
                <td><img src="${empData._profilePic}" alt="">    ${empData._name}</td>
                <td>${empData._gender}</td>
                <td>${empData._department}</td>
                <td>${empData._salary}</td>
                <td>${empData._startDate}</td>
                <td>
                    <img src="../assets/icons/delete-black-18dp.svg" alt="" onclick="remove('${empData._id}')">

                    <img src="../assets/icons/create-black-18dp.svg" alt="" onclick="edit('${empData._id}')">
                </td>
            </tr>`;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;
};

const remove = (node) => {
    let empList = JSON.parse(localStorage.getItem('EmpList'));
    let emp = empList.find(empData => empData._id == node);
    const index = empList.map(empData => empData._id).indexOf(emp._id);
    empList.splice(index, 1);
    localStorage.setItem('EmpList', JSON.stringify(empList));

    var empCount = document.querySelector('.emp-count');

    empCount.innerHTML = `${empList.length}`;

    createTabularInnterHtml();
};

const edit = (node) => {
    alert(node);
};