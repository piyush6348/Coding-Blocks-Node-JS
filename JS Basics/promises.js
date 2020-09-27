console.log("\n\n\n------------------Promises---------------\n\n");

function fakeDownload(callback) {
    setTimeout(() => {
        const downloadedData = "Some data"
        callback(downloadedData)
    }, 1000)
}

fakeDownload((downloadedData) => {
    console.log("Download complete " + downloadedData);
})

console.log("\n\n\n------------------Promise version---------------\n\n");

function fakeDownloadPromise() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const downloadedData = "Some data"
            resolve(downloadedData)
        }, 1000)
    })
}
/*
    then function is called when resolve is called on caller side.
    catch function is called when reject is called on caller side.
*/
fakeDownloadPromise()
    .then(function (downloadedData) {
        console.log("Download complete in Promise" + downloadedData);
    })
    .catch(function (err) {
        throw err
    })

/*
    Promises are also resolved if they are attached at a later moment in time.
    The promise callbacks are held by JS and called when the resolving functions are attached. 
*/

const downloadedPromise = fakeDownloadPromise()
downloadedPromise.catch(function(err){
    // This will be called immediately.
})

setTimeout( () => {
    downloadedPromise.then((downloadedData) => {
        // This will be called after 5s ie when the `then` callback is attached 
        // to the promise. The promise will hold the call till then.
        console.log("Download complete in Promise with timeout " + downloadedData);
    })
}, 5000)