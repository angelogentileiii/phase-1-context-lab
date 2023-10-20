/* Your Code Here */
let employeeRecord;

function createEmployeeRecord ([firstName, familyName, title, payPerHour]) {
    employeeRecord = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };

    return employeeRecord;
}

function createEmployeeRecords (twoRows) {
    return twoRows.map(createEmployeeRecord)
}

function createTimeInEvent(date) {
    
    const year = date.slice(0,4);
    const month = date.slice(5,7); //=
    const day = date.slice(8,10); //=
    const hour = Number(date.slice(11,15)); //=
    
    let newEvent = {
        type: `TimeIn`,
        hour: hour,
        date: `${year}-${month}-${day}`
    }
    
    let bpRecord = this.timeInEvents;

    bpRecord.push(newEvent);

    return employeeRecord;
}

function createTimeOutEvent(date) {

    const year = date.slice(0,4);
    const month = date.slice(5,7);
    const day = date.slice(8,10);
    const hour = Number(date.slice(11,15));
    
    let newEvent = {
        type: `TimeOut`,
        hour: hour,
        date: `${year}-${month}-${day}`
    }
    
    let bpRecord = this.timeOutEvents;

    bpRecord.push(newEvent);

    return employeeRecord;
}

function hoursWorkedOnDate (date){
    let timeIn;
    let timeOut;

    this.timeInEvents.map(inTime => {
        if (date === inTime.date) {
            return timeIn = inTime.hour
        }
     })

    this.timeOutEvents.map(outTime => {
        if (date === outTime.date) {
            return timeOut = outTime.hour
        }
     })

     if (timeIn && timeOut) {
        return Number((timeOut - timeIn) / 100)
     } return 0
}

function wagesEarnedOnDate (date) {
   return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */



function allWagesFor () {
    // console.log(this.timeInEvents)
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        // console.log(this)
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName (srcArray, firstName) {
    for (const employee of srcArray) {
        if (employee.firstName === firstName) {
            return employee //=
        }
    }
}

cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
// Earns 324
createTimeInEvent.call(cRecord, "2044-03-14 0900")
createTimeOutEvent.call(cRecord, "2044-03-14 2100")
// Earns 54
createTimeInEvent.call(cRecord, "2044-03-15 0900")
createTimeOutEvent.call(cRecord, "2044-03-15 1100")
// 324 + 54
allWagesFor.call(cRecord)


function calculatePayroll (employeeRecords) {
    let totalPayroll = 0
    
    console.log(employeeRecords)
    employeeRecords.forEach(employee => {
        totalPayroll += allWagesFor.call(employee)
    })

    return totalPayroll

}

const csvDataEmployees = [
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300]
  ]

  const csvTimesIn = [
    ["Thor", ["2018-01-01 0800", "2018-01-02 0800", "2018-01-03 0800"]],
    ["Loki", ["2018-01-01 0700", "2018-01-02 0700", "2018-01-03 0600"]],
    ["Natalia", ["2018-01-01 1700", "2018-01-05 1800", "2018-01-03 1300"]],
    ["Darcey", ["2018-01-01 0700", "2018-01-02 0800", "2018-01-03 0800"]],
    ["Jarvis", ["2018-01-01 0500", "2018-01-02 0500", "2018-01-03 0500"]],
    ["Anthony", ["2018-01-01 1400", "2018-01-02 1400", "2018-01-03 1400"]]
  ]

  const csvTimesOut = [
    ["Thor", ["2018-01-01 1600", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Loki", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Natalia", ["2018-01-01 2300", "2018-01-05 2300", "2018-01-03 2300"]],
    ["Darcey", ["2018-01-01 1300", "2018-01-02 1300", "2018-01-03 1300"]],
    ["Jarvis", ["2018-01-01 1800", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Anthony", ["2018-01-01 1600", "2018-01-02 1600", "2018-01-03 1600"]]
  ]

//   let employeeRecords = createEmployeeRecords(csvDataEmployees) //=

//   calculatePayroll(employeeRecords) //=

//   allWagesFor(employeeRecords)

let employeeRecords = createEmployeeRecords(csvDataEmployees)
employeeRecords.forEach(function (rec) {
    let timesInRecordRow = csvTimesIn.find(function (row) {
    return rec.firstName === row[0]
    })

    let timesOutRecordRow = csvTimesOut.find(function (row) {
    return rec.firstName === row[0]
    })

    timesInRecordRow[1].forEach(function(timeInStamp){
    createTimeInEvent.call(rec, timeInStamp)
    })

    timesOutRecordRow[1].forEach(function(timeOutStamp){
    createTimeOutEvent.call(rec, timeOutStamp)
    })
}) 
console.log("Debugging")
console.log(calculatePayroll(employeeRecords))
console.log(calculatePayroll(employeeRecords) === 12480)
console.log("End debug")