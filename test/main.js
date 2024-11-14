//task1
function Numbers(str) {
    return /^\d+$/.test(str);}
console.log(Numbers("12345"));true
console.log(Numbers("123a45"));false
console.log(Numbers(""));false
//task2
function logEverySecond() {
setInterval(() => {console.log("Прошла секунда");
}, 1000);}
logEverySecond();


//task3
function printNumbers() {
    let number = 1;    const intervalId = setInterval(() => {
        console.log(number);        number++;
        if (number > 10) {            clearInterval(intervalId);
        }    }, 1000);
}
printNumbers();


//task4
function printNumbers() {
    let number = 1;    const intervalId = setInterval(() => {
        console.log(number);        number++;
        if (number > 10) {            clearInterval(intervalId);
        }    }, 1000);
}
printNumbers();
colorBox.addEventListener("click", () => {
    colorBox.classList.toggle("active-background");