const express = require('express');
const app = express();
const port = 3000;



app.use('/:id',express.static('client'));


app.listen(port, () => {
  console.log(`listening on ${port}`);
});

//console.log(path.join(__dirname,"dist"));