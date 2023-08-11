const express = require("express");
const app = express();
// import main  router
const MainRouter = require("./routers/router");
var bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/", MainRouter);

// app.get('*', (req, res) => {
// res.sendFile(path.resolve(__dirname,'frontEnd', 'dist', 'index.html'));
// });

// if not in production use the port 5000

app.use((err,req,res,next) => {
    // console.log(err)
    // handel erroe heare
    if(res.headersSent){
        next('some thing wrong')
    }
    else{
        if(err.message){
            if(err.instanceof === "multer"){
                return res.status(406).send(err.message);
            }else{

                return res.status(500).send(err.message);
            }
        }else{
            res.status(500).send('error from handler in main index');
        }
    }

    // console.log("🚀 ~ file: index.js:21 ~ app.use ~ err:", err)
	// res.send(err)
})
const PORT = process.env.PORT || 5000;
console.log("server started on port:", PORT);
app.listen(PORT);
