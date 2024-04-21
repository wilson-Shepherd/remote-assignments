// callback
function delayedResult(n1, n2, delayTime, callback) {
    // your code here
    setTimeout(() => {
        const num = n1 + n2;
        callback(num);
    }, delayTime);
}

delayedResult(4, 5, 3000, function (result) {
    console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds
    
delayedResult(-5, 10, 2000, function (result) {
    console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds

// promise
function delayedResultPromise(n1, n2, delayTime) {
    // your code here
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = n1 + n2;
            resolve(num);
        }, delayTime);
    })
}

delayedResultPromise(4, 5, 3000).then(console.log); // 9 (4+5) will be shown in the console after 3 seconds

// async / await
async function main(n1, n2, delayTime) {
    // your code here, you should call delayedResultPromise here and get the result using async/await.
    const num = await delayedResultPromise(n1, n2, delayTime);
    console.log(num);
    }

main(4, 5, 3000); // result will be shown in the console after <delayTime> seconds