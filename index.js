// code your solution here
// function isAWin(result){
//     return (result.result === 'W')
// }

// function superbowlWin(record){
//     const found = record.find(isAWin)
//     if(found){
//         return found.year
//     }else{
//         return undefined
//     }
// }


function superbowlWin(records){
    const win = records.find((element) => (element.result === 'W'))
    return win ? win.year : undefined
}