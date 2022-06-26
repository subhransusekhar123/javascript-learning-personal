let a = 10 //global scope

function add(){
    //local scope
    var a = 5;
    function addTwo(){
        let b = 6
        console.log(a + b)
    }
    addTwo()

}

add()

// a inner function has access to its outerScope/parentscope/parent's parentscope even after the parent function is closed this is called closure.

function parentFunction(outerValue){
    function childFunction(innerValue){
        console.log(outerValue,innerValue)
    }
    return childFunction

}

let exicute_parent = parentFunction("subhransu")
exicute_parent("gudu")

// a Closure is created when we define a function , not when a function is executed.