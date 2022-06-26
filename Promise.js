

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


