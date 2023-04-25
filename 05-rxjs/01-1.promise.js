function addAsyncPromise(x, y) {
    console.log(`   [@service] processing ${x} and ${y}`)
    var p = new Promise(function (resolveFn, rejectFn) {
        setTimeout(() => {
            var result = x + y
            console.log(`   [@service] returning result`)
            resolveFn(result)
        }, 4000);
    })
    return p;
}


function fromPromise(/* ???? */){
/* ???? */
}


// client
var obs$ = fromPromise(/*  */)
obs$.subscribe(result => console.log(result))