const list = [20,3,234,12,17,541,6,87,275,1000]

const newList = list.filter( list => {
    return list % 2 === 0 && list % 5 === 0

})

console.log(newList)