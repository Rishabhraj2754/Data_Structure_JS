const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const NUM_OF_WORKING_DAYS = 20;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDaliyWageArr = new Array();
let empDaliyWageMap = new Map();
let empDaliyHrsMap = new Map();

function getWorkingHours(empcheck){
    switch(empcheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
   
}

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empcheck = Math.floor(Math.random() * 10)% 3;
    let empHrs = getWorkingHours(empcheck);
    totalEmpHrs += empHrs;
    empDaliyWageArr.push(calcDailyWage(empHrs));
//    empDaliyHrsMap.set(totalWorkingDays, empHrs);
//    empDaliyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}

function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

let empWage = calcDailyWage(totalEmpHrs);
console.log("total Days:"+ totalWorkingDays +
             " Total Hrs:" + totalEmpHrs + " Emp wage:" + empWage);

//UC 7A- Calc total Wage using Array forEach traversal or reduce method
let totEmpWage = 0;
function sum(dailyWage){
    totEmpWage +=  dailyWage;
}

empDaliyWageArr.forEach(sum);
console.log("UC7A -Total Days:" + totalWorkingDays +
                "Total Hrs:" + totalEmpHrs + "Emp Wage:" + totEmpWage);

function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
} 
console.log("UC7A - Emp wage with reduce:" 
            + empDaliyWageArr.reduce(totalWages,0));

//UC 7 show the day along with Daily Wage using Array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++
    return dailyCntr + "=" + dailyWage;
}
let mapDayWithWageArr = empDaliyWageArr.map(mapDayWithWage);
console.log("UC7B -Daily Wage Map");
console.log(mapDayWithWageArr);

//UC 7C -Show Days When Full Time Wage of 160 were earned
function fulltimewage(dailyWage){
    return dailyWage.includes("160");
}

let fullDayWageArr =  mapDayWithWageArr.filter(fulltimewage);
console.log("UC7C - Daily Wage Filter when Fulltime wage Earned");
console.log(fullDayWageArr);

//UC 7D - Find the first occurance when full Time wage was earned using find function
function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 7D - First time fulltime wage was earned on Day: " + 
                mapDayWithWageArr.find(findFulltimeWage));

//UC 7E - Check if every element of full Time Wage is truely holding Full time wage
function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 7E - Check All Element have Full Time Wage: " + 
                fullDayWageArr.every(isAllFulltimeWage));

//UC 7F - Check if there is any part Time Wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
    console.log("UC 7F - Check If Any Part Time Wage: " + 
                mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G - Find the number of days the employee worked
function totalDaysWorked(numOfDays, dailyWage) {
    if(dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("UC 7G- Number of Days Emp Worked:" + 
                empDaliyWageArr.reduce(totalDaysWorked, 0));