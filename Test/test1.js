function getNumber (){
  const randomNum = Math.floor(Math.random()* 10) +1
  const total = randomNum * 5 
  return total

  const numbers = []
  let i = 0

  for(i < 10; i++; ){
    if (total % 2 ){
      numbers.push(total)
    }
    else{
      getNumber()
    }
  } 
  console.log(numbers)
}


