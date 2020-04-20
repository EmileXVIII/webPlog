var PORT = process.env.PORT || 8082;
var host = "localhost:" + PORT;
var app = require('express')();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, function () {
    console.log('Serveur sur port : ', PORT);
});
let status="working"
let curentReqs=0
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
app.use('/styles',require('express').static('assets/styles'));
app.post('/',async function(req,res,next){
    console.log("I'am here",JSON.stringify(req.body))
    if(req.body.switch){
        status="overwhelmed";
    }
    else{
        status="working"
    }
    res.redirect("/")
})
app.use(async function (req,res,next){
    curentReqs+=1
    let result ={result:42}
    if(curentReqs>100){status="overwhelmed"}
    switch (status){
        case("overwhelmed"):
            console.log('over',status)
            await sleep(50000)
            break
        case ("working"):
                console.log('ok',status)
                await sleep(1)
                break
    }
    res.statusCode=200
    let torender=status=="overwhelmed"?"./resultChecked.pug":"./result.pug"
    res.format({
        json:() =>res.json(result),
        html:() =>res.render(torender,{
            title:"Answer "+curentReqs,
            refurl:"/styles/result.css",
            answer:"The Answer is 42",
            check:result=="overwhelmed",
            actionUrl:"/"
        })
    })
    curentReqs-=1
})
