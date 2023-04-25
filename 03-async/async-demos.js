(function(){
    //sync
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        var result = x + y
        console.log(`   [@service] returning result`)
        return result
    }

    function addSyncClient(x,y) {
        console.log(`[@client] invoking the service`)
        var result = addSync(x,y)
        console.log(`[@client] result = ${result}`)
    }

    window['addSyncClient'] = addSyncClient

    //async using callbacks
    function addAsync(x, y, callbackFn) {
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(() => {
            var result = x + y
            console.log(`   [@service] returning result`)
            if (typeof callbackFn === 'function')
                callbackFn(result)    
        }, 4000);
        
    }

    function addAsyncClient(x, y) {
        console.log(`[@client] invoking the service`)
        addAsync(x, y, function(result){
            console.log(`[@client] result = ${result}`)
        })
    }

    window['addAsyncClient'] = addAsyncClient


    //async using promise
    function addAsyncPromise(x, y) {
        console.log(`   [@service] processing ${x} and ${y}`)
        var p = new Promise(function(resolveFn, rejectFn){
            setTimeout(() => {
                var result = x + y
                console.log(`   [@service] returning result`)
                resolveFn(result)
            }, 4000);
        })
        return p;
    }

    //sync client
    function addSyncClient(x, y) {
        console.log(`[@client] invoking the service`)
        var result = addSync(x, y)
        console.log(`[@client] result = ${result}`)
    }

    //promise client
   /* 
    function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking the service`)
        var p = addAsyncPromise(x, y)
        p.then(function (result) {
            console.log(`[@client] result = ${result}`)
        }) 
    } 
    */

    async function addAsyncAwaitPromiseClient(x, y) {
        console.log(`[@client] invoking the service`)
        var result = await addAsyncPromise(x, y)
        console.log(`[@client] result = ${result}`)

        //followup - sync
        // return result * 2

        //followup - async
        return new Promise((resolveFn, rejectFn) => {
            setTimeout(() => {
                var doubleResult = result * 2
                resolveFn(doubleResult)
            }, 4000);
        })
    }
    window['addAsyncAwaitPromiseClient'] = addAsyncAwaitPromiseClient

   /* 
    function addAsyncAwaitPromiseClient2(x, y) {
        console.log(`[@client][1] invoking the service`)
        var p1 = addAsyncPromise(x, y)
        p1.then((result1) => {
            console.log(`[@client][1] result1 = ${result1}`)
        })

        console.log(`[@client][2] invoking the service`)
        var p2 = addAsyncPromise(1000, 2000)
        p2.then((result2) => {
            console.log(`[@client][2] result2 = ${result2}`)
        })
        
    } 
    */

    function addAsyncAwaitPromiseClient2(x, y) {
        console.log(`[@client][1] invoking the service`)
        var p1 = addAsyncPromise(x, y)
        
        console.log(`[@client][2] invoking the service`)
        var p2 = addAsyncPromise(1000, 2000)

        Promise
            .all([p1, p2])
            .then(([result1, result2]) => {
                console.log(`[@client][1] result1 = ${result1}`)        
                console.log(`[@client][2] result2 = ${result2}`)
            })
        
    } 
    /* 
    async function addAsyncAwaitPromiseClient2(x, y) {

        console.log(`[@client][1] invoking the service`)
        var result1 = await addAsyncPromise(x, y)
        console.log(`[@client][1] result1 = ${result1}`)
        
        console.log(`[@client][2] invoking the service`)
        var result2 = await addAsyncPromise(1000, 2000)
        console.log(`[@client][2] result2 = ${result2}`)

    } 
    */
    window['addAsyncAwaitPromiseClient2'] = addAsyncAwaitPromiseClient2
})()

// promise followup - async
/* 
console.log(`[@client] invoking the service`)
var p = addAsyncPromise(100, 200)

var p2 = p.then(function (result) {
    console.log(`[@client] result = ${result}`)
    var p2 = new Promise(function (resolveFn, rejectFn) {
        setTimeout(function () {
            var doubleResult = result * 2;
            resolveFn(doubleResult)
        }, 5000)
    });
    return p2;
}) 
*/

//promise followup - sync - part - 1
/* 
console.log(`[@client] invoking the service`)
var p = addAsyncPromise(100, 200)

var p2 = p.then(function (result) {
    console.log(`[@client] result = ${result}`)
    var p2 = new Promise(function (resolveFn, rejectFn) {
        var doubleResult = result * 2;
        resolveFn(doubleResult)
    })
    return p2;
}) 
*/

//promise followup - sync - part - 2
/* 
console.log(`[@client] invoking the service`)
var p = addAsyncPromise(100, 200)

var p2 = p.then(function (result) {
    console.log(`[@client] result = ${result}`)
    var doubleResult = result * 2;
    var p2 = Promise.resolve(doubleResult)
    return p2;
})
*/

//promise followup - sync - part - 3
/* 
console.log(`[@client] invoking the service`)
var p = addAsyncPromise(100, 200)

var p2 = p.then(function (result) {
    console.log(`[@client] result = ${result}`)
    var doubleResult = result * 2;
    return doubleResult;
}) 
*/