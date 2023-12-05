const pObject = new Promise((resolve, reject) => {
    setTimeout(() => {
        let roll_no = [1,2,3,4,5,6,7,8,9];
        resolve(roll_no);
        // reject("there are some error in API")
    }, 2000);
});


const getBioData = (data) => {
    return new Promise((resolve, reject)=>{
        setTimeout((data)=>{
            let bioData = {
                name: "rohit",
                age: 30
            };
            return resolve(`My roll number is ${data[1]} and my name is ${bioData.name} and age is ${bioData.age}`);
            // reject("sorry for the error")
        }, 2000, data);
    })
}

// get bio info
pObject.then((data)=>{
    console.log(data)
    return getBioData(data);
})
.then((message)=>{
    console.log("message", message)
})
.catch(err => console.log("error", err))







