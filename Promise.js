// const alarm = (x) => {
    
//     setTimeout(()=>{
//         console.log('tring tring')
//         x()
//     },2000)
// }

// const wakeUp = (x) => {
//     setTimeout(()=>{
//         console.log('good morning i woke up')
//         x()
//     },1000)
// }

// const brush = (x) => {
//     setTimeout(()=>{
//         console.log('brusing teeth')
//         x()
//     },5000)
// }

// const breakfast = (x) => {
//     setTimeout(()=>{
//         console.log('having my breakfast');
//         x()
//     },2000)
// }

// const bath = () => {
//     setTimeout(()=>{
//         console.log('taking bath')
//     },1000)
// }

// alarm(()=>{
//     wakeUp(()=>{
//         brush(()=>{
//             breakfast(()=>{
//                 bath()
//             })
           
//         })
      
//     });
   
// });

const alarm = () => {
    return new Promise((res,rej)=>{
            setTimeout(()=>{
                console.log('tring tring')
                res()
            },2000) 
        })
    
  
}

const wakeUp = () => {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('good morning i woke up')
            res()
        },1000)
    })
   
}

const brush = () => {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('brusing teeth')
            res()
        },5000)
    })
   
}

const breakfast = () => {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('having my breakfast');
            res()
        },2000)
    })
   
}

const bath = () => {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('taking bath')
            res()
        },1000)
    })
}

alarm()
.then(wakeUp)
.then(brush)
.then(breakfast)
.then(bath)


