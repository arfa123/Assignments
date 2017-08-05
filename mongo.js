var mongoose = require("mongoose");
mongoose.connect('mongodb://ahmed:ahmed@ds129733.mlab.com:29733/mongo',{
    useMongoClient: true
});

var userSchema = mongoose.Schema({
    name: String,
    email: {type: String, required: true, unique: true}
});
var userModel = mongoose.model("User", userSchema);

var users = new userModel({name: "ali", email: "ali@gmail.com"});

userModel.findOne({name: "ali"}, function (err, user){
    if(err) return handleError(err);
    if(user)
})

// users.save(function (err, data){
//     if(!err){
//         console.log(data);
//     }
//     else{
//         console.log(err);
//     }
// });


// When successfully connected
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ');
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

