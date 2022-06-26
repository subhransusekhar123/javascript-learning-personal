function add(){
    var a = 5;
    function addTwo(){
        let b = 6
        console.log(a + b)
    }
    addTwo()

}

add()

// a inner function has access to its outerScope and global variable this is called closure.