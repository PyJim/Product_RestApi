const mongoose = require('mongoose');


module.exports = () =>{
    const DATABASE = process.env.DATABASE;

    mongoose.connect(DATABASE, 
    {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
        .then(() =>{
            console.log('Connected to database');
        })
        .catch(err => console.log(err.message));


    mongoose.connection.on('connected', () =>{
        console.log('Connected to database');
    })
    mongoose.connection.on('error', (err) =>{
        console.log(err.message);
    })

    mongoose.connection.on('disconnected', () =>{
        console.log('Mongoose connection is disconnected');
    })

    process.on('SIGINT', () =>{
        mongoose.connection.close(()=>{
            console.log('Mongoose connection terminated');
            process.exit(0);
        })
        
    })

}