

const getDataPromise = (data) => new Promise( (resolve, reject) => {
    setTimeout( () => {
        typeof data === 'number' ? resolve(data * 2) : reject('Number must be provided')
        // reject('An error has taken place')
    }, 2000)
})

getDataPromise(2).then( (data) => {
    return getDataPromise(data)
}).then( (data) => {
    return getDataPromise(data)
}).then( (data) => {
    console.log(data)
}).catch( (err) => {
    console.log(err)
})