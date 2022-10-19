let saveEl =document.getElementById("save-el")
let countEl =document.getElementById("count-el")

console.log(countEl)


let count = 0 


function increment() {

  count += 1 
  countEl.textContent = count
    console.log(count)
}
document.getElementById("count-el").innerText=5


function save(){
let countStr = count + "- "

saveEl.textContent += countStr
countEl.textContent = 0
count = 0
    console.log(count)
}

save();
















//let firstBatch = 5
//let secondBatch = 7

//let count = 5 
//.log(count)
    







//let bonusPoints = 50

//bonusPoints = bonusPoints * 2                                                                                

//bonusPoints = bonusPoints / 4

// = bonusPoints + 45

//console.log(bonusPoints)




//let myAge = 26
//let humanDogRation = 7
//let myDogAge = myAge * humanDogRation
   // console.log(myDogAge)