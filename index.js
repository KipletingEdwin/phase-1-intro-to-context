// Your code here
let createEmployeeRecord= function (row){
    return{
        firstName:row[0],
        familyName:row[1],
        title:row[2],
        payPerHour:row[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
}
let createEmployeeRecords=function (employeeData){
    return employeeData.map(function(row){
        return createEmployeeRecord(row)
    })
}
let createTimeInEvent = function(stampedDate){
    let [date, hour] = stampedDate.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

let createTimeOutEvent=function(stampedDate){
    let [date,hour] = stampedDate.split('')

    this.timeOutEvents.push({
        type:"TimeOut",
        hour:parseInt(hour,10),
        date,
    })
    return this
}
let hoursWorkedOnDate=function(manageDate){
    let timeIn=this.timeInEvents.find(function(e){
        return e.date === manageDate
    })

    let timeOut=this.timeOutEvents.find(function(e){
        return e.date === manageDate
    })
    return (timeIn.hour - timeOut.hour)/100
}
let wage = function (manageDate){
    let dayWage = hoursWorkedOnDate.call(this,manageDate) * this.payPerHour

    return parseFloat(dayWage.toString())
}

let allWagesFor=function(){
    let  availableDates = this.timeInEvents.map(function(e){
        return e.date
    })

    let totalPay =  availableDates.reduce(function(memo,d){
        return memo + wage.call(this,d)
    }.bind(this),0)

    return payable
}

let findWorkerByFirstName = function(listOfWorkers){
    return listOfWorkers.reduce(function(memo,record){
        return memo + allWagesFor.call(record)
    },0)
}
