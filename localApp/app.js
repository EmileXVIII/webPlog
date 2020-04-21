
// init express
var Express = require('express');


const {promiseStatus} = require('promise-status-async');
const axios = require("axios");


let host = "localhost";
let port = 9999;

const axiosLocal = axios.create({baseURL: host+":"+port})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function ping(host){
    const axiosPing = axios.create({baseURL: host})
    let promise=axiosPing.get("/")
    await sleep(1000)
    let status = await promiseStatus(promise)
    if (status=="pending"){
        return false
    }
    return true
}


var app = Express();


// init db
var mysql      = require('mysql');

let database = "WebPlug";
let user = "lh";
let password = "pass";

var connectionDB = mysql.createConnection({
  host     : host,
  user     : user,  
  password : password,
  database : database
});

connectionDB.connect();
    
app.get('/getwebsite', function(req, res) {

    let websiteName = req.query;

    if(websiteName != null){
        websiteName = websiteName.website

        if(websiteName.length >= 1){

            console.log(">> "+websiteName);


            let returnV;

            // phase 1 = sql

            connectionDB.query('SELECT * FROM website WHERE name = "'+websiteName+'";', async function (error, results, fields) {
                
                // sql:
                
                if (error) throw error;
                returnV = results[0];

                if(returnV){


                     // phase 2 = ping url

                    
                    if( await ping(returnV.url) ){
                        
                        // up
                        // redirection
                        let link = returnV.url;
                        res.send("<script>window.location.href = '"+link+"';</script>");

                    }else{
                        
                        // down
                        // redirection
                        let link = "websites/"+returnV.empl+"index.html";
                        res.send("<script>window.location.href = '"+link+"';</script>");

                    }

                    /*let res = ping.promise.probe(returnV.url, {
                        timeout: 2,
                        extra: ['-i', '2'],
                    });

                    setTimeout(function() { 
                        console.log(res);
                        res.send('toto');
                    },1000);
                    

                     /*
                     var cfg = {
                        timeout: 2,
                    };
                     
                    ping.promise.probe(returnV.url, {
                        timeout: 2,
                        extra: ['-i', '2'],
                    }).then(function (res) {
                        if( (""+res).length > 1 ){

                            // up
                            // redirection
                            let link = returnV.url;
                            res.send("<script>window.location.href = '"+link+"';</script>");

                        }else{
                             // down
                            // redirection
                            let link = "websites/"+returnV.empl+"index.html";
                            res.send("<script>window.location.href = '"+link+"';</script>");
                        
                        }
                    }).catch(function() {

                        // down
                        // redirection
                        let link = "websites/"+returnV.empl+"index.html";
                        res.send("<script>window.location.href = '"+link+"';</script>");
                       
                    });
                        */




                    /*ping.sys.probe(returnV.url, function(isAlive){

                        console.log(returnV.url)
                        setTimeout(function() { 

                            if(isAlive){ // up
                                
                                // redirection
                                let link = returnV.url;
                                res.send("<script>window.location.href = '"+link+"';</script>");

                            }else{ // down

                                // redirection
                                let link = "websites/"+returnV.empl+"index.html";
                                res.send("<script>window.location.href = '"+link+"';</script>");

                            }

                            console.log(isAlive)

                        },1000);
                        
                    }, cfg);
                    */
                    
                    /*
                    var ws = new WebSocket(returnV.url);
                    ws.onerror = function(e){
                        //isUp

                        // phase 3 - redirect to original website 

                        // redirection
                        let link = returnV.url;
                        res.send("<script>window.location.href = '"+link+"';</script>");

                        //####
                        ws = null;
                    };

                    setTimeout(function() { 
                        if(ws != null) {
                            ws.close();
                            ws = null;
                            //isDown
                            
                            // phase 3 - saved website 

                            // redirection
                            let link = "websites/"+returnV.empl+"index.html";
                            res.send("<script>window.location.href = '"+link+"';</script>");

                            //####
                        }
                    },1000);
                    */

                    
                }else
                    res.send("War: No website founded.")

            });
        
            

        }
        else
            res.send("err2")
    }else
        res.send("err1")

})

app.get("/", function(req,res){
    // redirection
    let link = "/index.html";
    res.send("<script>window.location.href = '"+link+"';</script>");
})
 
app.use(Express.static(__dirname + '/'));


app.use(function(req, res, next) { // 404
    let link = "/index.html";
    res.send("<script>window.location.href = '"+link+"';</script>");
});

app.listen(port, () => {
    console.log("Running on http://"+host+":"+port+"")
})




