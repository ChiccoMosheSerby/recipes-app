const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

//ROUTERS/////////////////////////////////////////////////////////////////////////////
const appId = 'd12e22b2';
const appKey = '27301a57cbfe5f373c242b8e58e39314';


app.post('/getResipes', function (req, res) {
    fetch(`https://api.edamam.com/search?q=${req.body.searchText}&app_id=${appId}&app_key=${appKey}`)
        .then(data => {
            data.json()
                .then(finalData => {
                    res.send(finalData)

                })
        })

    //Or///////////////////////
    // fetch(`https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${appKey}`)
    //   .then(response => {
    //     response.json()
    //   })
    ///////////////////////////////////////////////////////////


});

//END ROUTERS/////////////////////////////////////////////////////////////////////////////


//conections ////////////////////////////////////////////////////////////////////////////////////////////
//server conection------------------
let port = process.env.PORT || 4005;
app.listen(port, function () {
    console.log('-------------------------> server conected to port: ', port, '!<---------------------------------------------------------')
})


////////// END conections /////////////////////////////////////////////////////////////////////////////
