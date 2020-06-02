const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

var path = require("path");

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
});


app.get('/shareResipe/:word/:id', function (req, res) {
  fetch(`https://api.edamam.com/search?q=${req.params.word}&app_id=${appId}&app_key=${appKey}`)
    .then(data => {
      data.json()
        .then(finalData => {
          let recipeArray = req.params.word;
          finalData.hits[req.params.id].recipe.ingredientLines.forEach(element => {
            recipeArray += `</br> ${element}`;
          });

          // console.dir(finalData.hits[req.body.id].recipe.label)
          // res.text(finalData.hits[req.params.id].recipe)
          res.send(`
                      <div style="word-break: break-word; color:white; margin:0; padding:20px; background:#a30000; text-align:center;">
                                    <h1  style="font-size:55px;">${finalData.hits[req.params.id].recipe.label}</h1>
                                    <img style="border-radius:15px; border:1px solid #fafafa65;" src='${finalData.hits[req.params.id].recipe.image}' />
                                    <div style="word-break: break-word; font-size:38px; margin:10px; padding:10px;">
                
                                    ${recipeArray}
                                    </br>
                                    <a style="font-size:40px; margin:100px; padding:20px; color:#ddcead;" href="https://recipes-app-prod.herokuapp.com">Go to:  Recipes App! </br>
                                    <img style="margin:auto; border-radius:15px; width:300px; height:auto; border:1px solid #fafafa65;" src='/img/sticker-bon-appetit.png' />
                                    </a>
                                    
                                    </div>
                    </div>
                    `)
        })
    })

})


// <div style="color:white; margin:0; padding:20px; background:#a30000; text-align:center;">
// <h1  style="font-size:55px;">${finalData.hits[req.params.id].recipe.label}</h1>
// <img style="border-radius:15px; border:1px solid #fafafa65;" src='${finalData.hits[req.params.id].recipe.image}' />
// <div style="font-size:38px; margin:10px; padding:10px;">

// ${recipeArray}

// </div >
// <a style="font-size:40px; margin:100px; padding:20px; color:#ddcead;" href="https://recipes-app-prod.herokuapp.com">Go to:  Recipes App!</a>
// <img style="margin:auto; border-radius:15px; width:300px; height:auto; border:1px solid #fafafa65;" src='/img/sticker-bon-appetit.png' />
// </div>






//Or///////////////////////
// fetch(`https://api.edamam.com/search?q=chicken&app_id=${appId}&app_key=${appKey}`)
//   .then(response => {
//     response.json()
//   })
///////////////////////////////////////////////////////////




//END ROUTERS/////////////////////////////////////////////////////////////////////////////


//conections ////////////////////////////////////////////////////////////////////////////////////////////
//server conection------------------
let port = process.env.PORT || 4005;
app.listen(port, function () {
  console.log('-------------------------> server conected to port: ', port, '!<---------------------------------------------------------')
})


////////// END conections /////////////////////////////////////////////////////////////////////////////
