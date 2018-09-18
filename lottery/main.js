

function lotteryNumbers() {

  var numbers = [];

  for(var i = 0; i < 6; i++) {

    var lottery = Math.floor(Math.random() * 49);

    if(numbers.indexOf(lottery) === -1) {
        numbers.push(lottery);
        document.getElementById("ball" + i).innerHTML = numbers[i];
    } else {
      i--;
    }
  }
}





// ** Code below - trying to add the requirement of changing the lottery balls colours **

// function lotteryNumbers() {
//
//   var numbers = [];
//   var lotteryBalls = document.getElementsByClassName('number');
//
//   for(var i = 0; i < 6; i++) {
//     var lottery = Math.floor(Math.random() * 49);
//
//
//   ** (Adding colours to the lottery balls) **
//
//     if (lottery === 0 < 9 ) {
//       Math.floor(Math.random() * 9);
//       lotteryBalls.numbers[i].style.backgroundColor = 'white';
//     } else if {
//         (lottery === 10 < 19) {
//           Math.floor((Math.random() * 11) + 9);
//            lotteryBalls.numbers[i].style.backgroundColor = 'blue';
//       } else if {
//           (lottery === 20 < 29) {
//             Math.floor((Math.random() * 21) + 9);
//              lotteryBalls.numbers[i].style.backgroundColor = 'pink';
//       } else if {
//           (lottery === 30 < 39) {
//             Math.floor((Math.random() * 31) + 9);
//               lotteryBalls.numbers[i].style.backgroundColor = 'green';
//       } else {
//           (lottery === 40 < 49) {
//             Math.floor((Math.random() * 41) + 9);
//               lotteryBalls.numbers[i].style.backgroundColor = 'yellow';
//           }
//
//
//
//           if(numbers.indexOf(lottery) === -1) {
//               numbers.push(lottery);
//               document.getElementById("ball" + i).innerHTML = numbers[i];
//           } else {
//             i--;
//           }
//         }
//       }
//     }
//   }
// }
