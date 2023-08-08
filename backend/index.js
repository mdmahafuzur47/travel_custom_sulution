const express = require('express');
const app = express();
// import main  router 
const MainRouter = require('./routers/router');

app.use('/',MainRouter);

// app.get('*', (req, res) => {
// res.sendFile(path.resolve(__dirname,'frontEnd', 'dist', 'index.html'));
// });


// if not in production use the port 5000
const PORT = process.env.PORT || 5000;
console.log('server started on port:',PORT);
app.listen(PORT);