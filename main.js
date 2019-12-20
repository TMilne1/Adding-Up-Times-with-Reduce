console.log('hello')

// completed prior to looking at video and without using reduce

/* -----------------------------------
const timeNodes = document.querySelectorAll('[data-time]')
const times = Array.from(timeNodes);

let timeInSeconds = 0;

times.map(item => {
    let timeString = item.dataset.time
    let timeArr = timeString.split(':');

    timeInSeconds += (parseInt(timeArr[0]) * 60)
    timeInSeconds += (parseInt(timeArr[1]))

})

console.log(timeInSeconds)

let hours = Math.floor(timeInSeconds / 3600)
let mins = Math.floor((timeInSeconds%3600)/ 60)
let seconds = timeInSeconds %60
console.log(hours, mins, seconds)
--------------------------------------------  */


//version 2 - Project redone using the reduce method

const timeArray = Array.from(document.querySelectorAll('.videos li'))
const totalTimeInSeconds = timeArray.map(item=>{
    return item.dataset.time.split(":")
}).map(time=>{
    return parseInt(time[0])*60 + parseInt(time[1])
}).reduce((total,item)=>{
    return total += item
},0)
let x = totalTimeInSeconds

const hours2 = Math.floor(timeInSeconds/3600);
x = x - hours2 * 3600
const mins2 = Math.floor(x / 60);
x = x - mins*60
const secs2 = x

console.log(hours2, mins2, secs2)


    


