const tinderUser = {}

tinderUser.id = "123ab"
tinderUser.location = "Dehradun"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "hulululu@redifmail.com",
    fullname: {
        userfullname: {
            fistname: "Ranga",
            lastname: "Reddy"
        }
    }
}

console.log(regularUser.fullname)
console.log("------------------")

const course = {
    coursename: "Module Perplexity",
    price: 989,
    instructor: "Alex Hale",
    languge: "English",
    note: "no prerequisites",
}

const {instructor: inst} = course;
console.log(inst);