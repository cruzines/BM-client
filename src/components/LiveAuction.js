import React from 'react'

function LiveAuction() {

    const [counter, setCounter] = React.useState(60);
    React.useEffect(() => {
        const timer =
          counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
      }, [counter]);
    
      return (
        <div className="App">
          <div>Countdown: {counter}</div>
        </div>
      );
    }

export default LiveAuction


// function LiveAuction() {
//     const year = new Date().getFullYear();
//     const difference = +new Date(`${year}-10-1`) - +new Date();
//     let timeLeft = {};
  
//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60)
//       };
//     }
  
//     return timeLeft;
//   }
  
//   export default function LiveAuction() {
//     const [timeLeft, setTimeLeft] = React.useState(LiveAuction());
  
//     React.useEffect(() => {
//       const id = setTimeout(() => {
//         setTimeLeft(LiveAuction());
//       }, 1000);
  
//       return () => {
//         clearTimeout(id);
//       };
//     });
  
//     const timerComponents = Object.keys(timeLeft).map(interval => {
//       if (!timeLeft[interval]) {
//         return;
//       }
  
//       return (
//          <span>
//           {timeLeft[interval]} {interval}{" "}
//         </span>
//       )
//     });
  
//     return (
//       <div>
//         {timerComponents.length ? timerComponents : <span>Time's up! No more bidding is allowedd</span>}
//       </div>
//     );
//   }
  