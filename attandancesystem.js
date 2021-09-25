// console.log("ok");

let inputForm = document.getElementById("studentform");
let myTable = document.getElementById("studenttable");
let tbody = document.getElementById("tableTbody");
let idForNewRow = 0;
let newStudentDetails = [];
let nameOfStudentOfCurrentRow;
let studentCurrentRowStatus;
let currentDay;
let currentDateNumber;
let currentMonth;
let currentYear;
let currentMonthInNumber;
let setIdToStudentRecord = 0;
// let daysInMonth;
let currentDateObj = new Date();
let daysCurrentMonth;
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const weekdays = ["S", "M", "Tu", "W", "Th", "F", "S"];

// display current month with tabular form
function displayMonthOnTable() {
    let monthDisplayTable = document.getElementById("tableForSetStudentRecord");
    document.getElementById("displayMonth").innerHTML = monthNames[currentDateObj.getMonth()];
    daysCurrentMonth = daysInGivenmonth(currentDateObj.getFullYear(), currentDateObj.getMonth() + 1);
    let newRowForDisplayTable = monthDisplayTable.insertRow();
    let firstCell = newRowForDisplayTable.insertCell(0);
    firstCell.setAttribute("rowspan", "2");
    firstCell.setAttribute("class", "text-white pt-3 font-weight-bold");
    firstCell.style.width = '260px';
    firstCell.style.backgroundColor = "skyblue";
    firstCell.innerText = "Names";
    for (let counter = 1; counter <= daysCurrentMonth; counter++) {
        newRowForDisplayTable.insertCell(counter);
        newRowForDisplayTable.childNodes[counter].setAttribute("style", "padding:10px 0px 0px 0px");
        newRowForDisplayTable.childNodes[counter].setAttribute("Width", "28px");
        newRowForDisplayTable.childNodes[counter].setAttribute("class", " font-weight-bold text-white pt-1");
        newRowForDisplayTable.childNodes[counter].style.backgroundColor = "skyblue";
        // newRowForDisplayTable.childNodes[counter].style.color = "white";
        newRowForDisplayTable.childNodes[counter].innerText = counter;
        // newRowForDisplayTable.childNodes[counter]
        // console.log(counter);
    }
    let newRowForDisplayTable2 = monthDisplayTable.insertRow();
    let counterForDayDisplay = 1;
    for (let counter = 0; counter < daysCurrentMonth; counter++) {
        newRowForDisplayTable2.insertCell(counter);
        newRowForDisplayTable2.childNodes[counter].setAttribute("style", "padding:10px 0px 0px 0px");
        newRowForDisplayTable2.childNodes[counter].setAttribute("Width", "28px");
        newRowForDisplayTable2.childNodes[counter].setAttribute("class", "font-weight-bold text-white pt-1");
        newRowForDisplayTable2.childNodes[counter].style.backgroundColor = "skyblue";
        newRowForDisplayTable2.childNodes[counter].style.color = "white";
        let dt = new Date(currentDateObj.getFullYear(), currentDateObj.getMonth(), counterForDayDisplay++);
        newRowForDisplayTable2.childNodes[counter].innerText = weekdays[dt.getDay()];
        // newRowForDisplayTable2.childnodes[counter].innerText = weekdays[currentDateObj(currentDateObj.getFullYear(), currentDateObj.getMonth() + 1, 1).getDay()];
        // newRowForDisplayTable2.childNodes[counter].innerText = weekdays[counter];
    }

    // let newRow2 = monthDisplayTable.insertRow(1);
    // let td4 = newRow2.insertCell(0);
    // td4.innerText = "Month";

}
function daysInGivenmonth(year, month) {
    return new Date(year, month, 0).getDate();// retruns days in given month 
}
displayMonthOnTable();

inputForm.addEventListener("submit", addNewStudenForAttandance);
function addNewStudenForAttandance(e) {
    let checkBoxIdCounter = 0;
    // let checkboxValueCounter = 2;
    let rowCellIds = 1;
    // create new rows

    let newRow1 = myTable.insertRow(0);
    let td1 = newRow1.insertCell(0);
    let td2 = newRow1.insertCell(1);
    let td3 = newRow1.insertCell(2);
    let td4 = newRow1.insertCell(3);
    let td5 = newRow1.insertCell(4);
    //set id to new row
    newRow1.setAttribute("id", idForNewRow++);
    // set ids to row cells
    td1.setAttribute("id", rowCellIds++);
    td1.setAttribute("class", "text-primary");
    // td1.setAttribute("value", document.getElementById("newstudent").value);
    td2.setAttribute("id", rowCellIds++);
    td3.setAttribute("id", rowCellIds++);
    td4.setAttribute("id", rowCellIds++);
    td5.setAttribute("id", rowCellIds++);
    // create checkbox and append it to cell2
    let checkboxcell2 = document.createElement("INPUT");
    let checkboxcell3 = document.createElement("INPUT");
    let checkboxcell4 = document.createElement("INPUT");
    let checkboxcell5 = document.createElement("INPUT");
    //set some attribute to checkboxes
    checkboxcell2.setAttribute("type", "checkbox");
    checkboxcell2.setAttribute("id", checkBoxIdCounter++);
    checkboxcell2.setAttribute('onclick', 'selectOnlyOneCheckBox(this)');
    checkboxcell2.setAttribute("value", "P");// p means present
    // checkboxcell2.setAttribute("value", "value" + checkboxValueCounter++);
    checkboxcell3.setAttribute("type", "checkbox");
    checkboxcell3.setAttribute("id", checkBoxIdCounter++);
    checkboxcell3.setAttribute('onclick', 'selectOnlyOneCheckBox(this)');
    checkboxcell3.setAttribute("value", "A"); // A means absent
    // checkboxcell3.setAttribute("value", "value" + checkboxValueCounter++);
    checkboxcell4.setAttribute("type", "checkbox");
    checkboxcell4.setAttribute("id", checkBoxIdCounter++);
    checkboxcell4.setAttribute('onclick', 'selectOnlyOneCheckBox(this)');
    checkboxcell4.setAttribute("value", "L"); // L means leave
    // checkboxcell4.setAttribute("value", "value" + checkboxValueCounter++);
    checkboxcell5.setAttribute("type", "checkbox");
    checkboxcell5.setAttribute("id", checkBoxIdCounter++);
    checkboxcell5.setAttribute('onclick', 'selectOnlyOneCheckBox(this)');
    checkboxcell5.setAttribute("value", "H"); // H means half leave
    // checkboxcell5.setAttribute("value", "value" + checkboxValueCounter++);
    //set value of row's first cell 
    td1.innerHTML = document.getElementById("newstudent").value;
    // append input to row cells
    td2.appendChild(checkboxcell2);
    td3.appendChild(checkboxcell3);
    td4.appendChild(checkboxcell4);
    td5.appendChild(checkboxcell5);
    myTable.tBodies[0].appendChild(newRow1);
    // console.log(myTable);
    // clear input field

    addStudentsFunction();
    clearInputField();
    e.preventDefault();
}


function addStudentsFunction() {
    let studentName = document.getElementById("newstudent").value;
    let tableForStudentRecord = document.getElementById("tableForSetStudentRecord");
    let newRowforStudentRecord = tableForStudentRecord.insertRow();
    newRowforStudentRecord.setAttribute("id", ++setIdToStudentRecord);
    let firstCell = newRowforStudentRecord.insertCell(0);
    firstCell.innerText = studentName;
    firstCell.setAttribute("class", " font-weight-bold text-white pt-2");
    firstCell.style.backgroundColor = "skyblue";
    firstCell.style.width = "250px";
    for (let index = 1; index <= daysCurrentMonth; index++) {
        newRowforStudentRecord.insertCell(index);
        newRowforStudentRecord.childNodes[index].setAttribute("style", "padding:10px 0px 0px 0px");
        newRowforStudentRecord.childNodes[index].setAttribute("Width", "28px");
        newRowforStudentRecord.childNodes[index].setAttribute("class", "text-center");

    }

    tableForStudentRecord.tBodies[0].appendChild(newRowforStudentRecord);
    console.log(tableForStudentRecord);
    // console.log(tableForStudentRecord.tBodies[0]);
}






// clear all fields
function clearInputField() {
    inputForm.reset();
}


function selectOnlyOneCheckBox(inputCell) {
    // debugger;
    let currentCellID = inputCell.id;
    let currentRowID = inputCell.parentElement.parentElement.id;
    // console.log(currentRowID);
    // console.log(inputCell.parentElement.parentElement.firstChild.innerHTML);
    // console.log(inputCell.parentElement.parentElement.id);
    let currentCellPareentsRow = inputCell.parentElement.parentElement;
    // console.log(currentCellPareentsRow.id);
    let check = currentCellPareentsRow.getElementsByTagName("INPUT");
    for (let counter = 0; counter < check.length; counter++) {
        check[counter].checked = false;
    }
    check[currentCellID].checked = true;


}

// add addtancdance to table

function addAttancdancetoTable() {
    // clear all json data before adding new usar data into json
    // debugger;
    if (!newStudentDetails.length == 0) {
        newStudentDetails.splice(0, newStudentDetails.length);
        // console.log("after deleteing array :", newStudentDetails);
    }

    let mytbaleID = document.getElementById("studenttable");
    let tbody = mytbaleID.getElementsByTagName("tbody")[0];
    let lengthOfTbodyRows = tbody.rows.length;
    // let rowID = tbody.rows[0].id;
    let rowID = tbody.rows;
    // console.log(rowID);
    // debugger;
    for (let counter = 0; counter < lengthOfTbodyRows; counter++) {
        let inputLengthOfRow = rowID[counter].getElementsByTagName("INPUT");
        for (let counterForInput = 0; counterForInput < inputLengthOfRow.length; counterForInput++) {
            if (inputLengthOfRow[counterForInput].checked == true) {
                // newStudentDetails["status"] = inputLengthOfRow[counterForInput].value;
                newStudentDetails.push({
                    "name": tbody.rows[counter].cells[0].firstChild.nodeValue,
                    "status": inputLengthOfRow[counterForInput].value,
                    // "Date": [currentYear, currentMonth, currentDay]
                });
            }
        }

        // if (newStudentDetails[counter].status == "undefined") {
        //     console.log("undefined");
        // }

    }

    let dateValue = new Date(document.getElementById("myDate").value);
    // debugger;
    if (isNaN(dateValue)) {
        // currentYear = currentDateObj.getFullYear();
        // currentMonth = monthNames[currentDateObj.getMonth()];
        currentDay = currentDateObj.getDate();
        // currentMonthInNumber = currentDateObj.getMonth() + 1;

    } else {
        // currentYear = dateValue.getFullYear();
        // currentMonth = monthNames[dateValue.getMonth()];
        currentDay = dateValue.getDate();
        // currentMonthInNumber = dateValue.getMonth() + 1;
    }
    newStudentDetails.push({ "Date": [currentDateObj.getMonth() + 1, currentDay, currentDateObj.getFullYear()] });
    console.log(newStudentDetails);
    setUserDetail();

}
function setUserDetail() {
    // debugger;
    let counterForjson = 0;
    let counterForbgcolor = 0;
    let mytbaleID = document.getElementById("tableForSetStudentRecord");
    let tbody = mytbaleID.getElementsByTagName("tbody")[0];

    for (let counter = 2; counter < tbody.rows.length; counter++) {
        for (let innerCounter = 1; innerCounter <= daysCurrentMonth; innerCounter++) {
            if (innerCounter == currentDay) {
                tableForSetStudentRecord.rows[counter].childNodes[innerCounter].innerText = newStudentDetails[counterForjson++].status ?? "";
                // debugger;
                switch (newStudentDetails[counterForbgcolor++].status) {
                    case "P":
                        // tableForSetStudentRecord.rows[counter].childNodes[innerCounter].style.backgroundColor = "green";
                        // tableForSetStudentRecord.rows[counter].childNodes[innerCounter].style.color = "white";
                        tableForSetStudentRecord.rows[counter].childNodes[innerCounter].setAttribute("Class", "font-weight-bold text-white bg-success");

                        // console.log("p");
                        break;
                    case "A":
                        // tableForSetStudentRecord.rows[counter].childNodes[innerCounter].style.backgroundColor = "#ff4d4d";
                        // tableForSetStudentRecord.rows[counter].childNodes[innerCounter].style.color = "white";
                        tableForSetStudentRecord.rows[counter].childNodes[innerCounter].setAttribute("Class", "font-weight-bold text-white bg-danger");
                        // console.log("A");
                        break;
                    case "L":
                        tableForSetStudentRecord.rows[counter].childNodes[innerCounter].style.backgroundColor = "#e66767";
                        // tableForSetStudentRecord.rows[counter].childNodes[innerCounter].style.color = "white";
                        tableForSetStudentRecord.rows[counter].childNodes[innerCounter].setAttribute("Class", "font-weight-bold text-white");
                        // console.log("L");
                        break;
                    case "H":
                        // tableForSetStudentRecord.rows[counter].childNodes[innerCounter].style.backgroundColor = "#fffa65";
                        // tableForSetStudentRecord.rows[counter].childNodes[innerCounter].style.color = "white";
                        tableForSetStudentRecord.rows[counter].childNodes[innerCounter].setAttribute("Class", "font-weight-bold text-white bg-warning");
                        // console.log("H");
                        break;
                    default:
                        break;
                }
            }
        }
    }
    unCheckedAllCheckBoxes();
}
// unchecked all checkboxes after submission record
function unCheckedAllCheckBoxes() {
    // debugger;
    let tbody = document.getElementById("tableTbody");
    let allCheckBoxlength = tbody.getElementsByTagName("input");
    for (let counter = 0; counter < allCheckBoxlength.length; counter++) {
        allCheckBoxlength[counter].checked = false;
    }
}
//tbody.getElementsByTagName("input")[0].checked == true
// tbody.getElementsByTagName("input")[0].checked == true
// function displayDaysOFCurrentMonth(y, m_name, d, m_number) {
//     let C_year = y;
//     let C_month_name = m_name;
//     let C_days = d;
//     let Current_month_number = m_number;
//     let C_daysInMonth;
//     let tableForDays = document.getElementById("displayDaysInCurrentMonth");
//     let tbody;



//     // this part id for remove element from the table if exits any
//     var Parent = document.getElementById("displayDaysInCurrentMonth");
//     while (Parent.hasChildNodes()) {
//         Parent.removeChild(Parent.firstChild);
//     }

//     let newRowForDays = tableForDays.insertRow(0);
//     // newRowForDays.setAttribute("class", "d-flex flex-row flex-wrap");

//     // this function is for return actual days in current month
//     function daysInGivenmonth(Current_year, Current_month) {

//         return new Date(Current_year, Current_month, 0).getDate();// retruns days in given month 
//     }
//     daysInMonth = daysInGivenmonth(C_year, Current_month_number);
//     console.log(daysInMonth);




//     let firstCell = newRowForDays.insertCell(0);
//     firstCell.innerText = "DAYS";
//     for (let index = 1; index <= daysInMonth; index++) {

//         newRowForDays.insertCell(index);
//         newRowForDays.childNodes[index].setAttribute("style", "padding:10px 0px 0px 0px");
//         newRowForDays.childNodes[index].setAttribute("Width", "28px");
//         newRowForDays.childNodes[index].setAttribute("class", "text-center");
//         newRowForDays.childNodes[index].innerText = index;
//         // console.log(index);
//     }

//     // add newly created row to tbody 
//     tbody = tableForDays.tBodies[0];
//     tbody.appendChild(newRowForDays);
//     console.log(displayDaysInCurrentMonth);



//     // for (let outerCounter = 0; outerCounter < newStudentDetails.length - 1; outerCounter++) {
//     //     newRowForDays.insertCell(outerCounter);
//     //     for (let innerCounter = 1; innerCounter <= daysInMonth; innerCounter++) {
//     //         newRowForDays.insertCell(innerCounter);
//     //     }

// }

// function dispalyRecordsToTable() {
//     let tableForRecords = document.getElementById("displayDaysInCurrentMonth");
//     let tbody;
//     // let newRowForRecords = tableForRecords.insertRow(1);
//     // newRowForRecords.setAttribute("class", "d-flex flex-row flex-wrap");
//     // this function is for return actual days in current month
//     function daysInGivenmonth(Current_year, Current_month) {
//         return new Date(Current_year, Current_month, 0).getDate();// retruns days in given month 
//     }
//     // debugger;
//     let daysInAMonth = daysInGivenmonth(currentYear, currentMonthInNumber);
//     let newRowForRecords;


//     for (let outerCounter = 0; outerCounter < newStudentDetails.length - 1; outerCounter++) {
//         newRowForRecords = tableForRecords.insertRow(0);
//         newRowForRecords.insertCell(outerCounter);
//         newRowForRecords.childNodes[outerCounter].setAttribute("Width", "20px");
//         newRowForRecords.childNodes[outerCounter].setAttribute("style", "padding:10px 0px 0px 0px");
//         newRowForRecords.childNodes[outerCounter].innerText = newStudentDetails[outerCounter].name;

//         for (let innerCounter = 1; innerCounter <= daysInAMonth; innerCounter++) {
//             newRowForRecords.insertCell(innerCounter);
//             newRowForRecords.childNodes[innerCounter].setAttribute("style", "padding:10px 0px 0px 0px");
//             newRowForRecords.childNodes[innerCounter].setAttribute("Width", "28px");
//             newRowForRecords.childNodes[innerCounter].setAttribute("class", "text-center");
//         }
//         tbody = tableForRecords.tBodies[0];
//         tbody.appendChild(newRowForRecords);
//     }
//     console.log(tableForRecords);
// }











































/*
function selectOnlyThis(id) {
    for (var i = 1;i <= 4; i++)
    {
        document.getElementById(i).checked = false;
    }
    document.getElementById(id).checked = true;
}
*/

/*
// // console.log(inputCell);
    // console.log(document.getElementById(inputCell));

    // for (let counter = 0; counter < check.length - 1; counter++) {
    //     // if (check[counter].checked) {
    //     check[counter].checked = false;
    //     // }
    //     // console.log(check[counter].id);
    // }
    // check[currentCellID].checked = true;

    // let currentCellID = inputCell.id;
    // console.log("td id :", inputCell.parentElement.id);
    // // document.getElementById("inpur");
    // // console.log("input id : ", inputCell.id);
    // for (let counter = 1; counter <= 4; counter++) {
    //     // console.log(document.getElementById(inputCell.parentElement.id).childNodes.id);
    //     console.log(document.getElementById());
    // }
    // // document.getElementById(inputCell.id).checked = ture;
*/

/*
     // // date Function
    // function myDateFunction(e) {


    //     console.log("year :", e);

    // }




    // console.log(rowID);
    // let lengthOfTbodyRowsCells = tbody.rows[counter].cells.length;
    // console.log(tbody.rows[0].cells.length);
    // for (let counter = 0; counter < lengthOfTbodyRows; counter++) {
    // debugger;
    // for (let innerCounter = 1; innerCounter <= 4; innerCounter++) {
    //     console.log(rowID[innerCounter].id);
    //     // // console.log(tbody.rows[counter].cells[innerCounter]);
    //     // if (innerCounter >= 1) {
    //     //     if (tbody.rows[counter].cells[innerCounter].firstChild.checked) {
    //     //         console.log((tbody.rows[counter].cells[innerCounter]));
    //     //     }
    //     //     // if (tbody.rows[counter].cells[innerCounter]) {
    //     //     //     console.log(tbody.rows[counter].cells[innerCounter].id);
    //     //     // }

    //     // }
    // }
    // }

*/

/*
    // nameOfStudentOfCurrentRow = inputCell.parentElement.parentElement.firstChild.innerHTML;
    // studentCurrentRowStatus = check[currentCellID].value;
    // newStudentDetails.push({
    //     "RowID": inputCell.parentElement.parentElement.id,
    //     "name": inputCell.parentElement.parentElement.firstChild.innerHTML,
    //     "status": check[currentCellID].value,

    // });
    // console.log(newStudentDetails);
    // console.log(document.getElementById(currentCellPareentsRow.firstChild).innerText);
    // return;
    // return check[currentCellID].value;

    // newStudentDetails.push([td1]):

    // console.log(document.getElementById(currentCellPareentsRow.id).firstElementChild);
    // newStudentDetails.push([]);
    // console.log(check[currentCellID].value);
*/