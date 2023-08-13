const mongoose=require("mongoose")
//const DB = 'mongodb+srv://gaurav:UnFxBgF9e13rxiiH@cluster0.axsi04e.mongodb.net/mernstack?retryWrites=true&w=majority

//const DB = "mongodb://127.0.0.1:27017/mernstack"
const DB=process.env.DATABASE
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
    .then(() => {
        console.log(`conection succesfull`)
    }).catch((err) => console.log(`no connection`))
