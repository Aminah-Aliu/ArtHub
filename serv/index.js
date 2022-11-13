const express = require("express");
const cors = require("cors");
var firebase = require("firebase/app");
const request = require('postman-request');

//const db = getFirestore(app);

var admin = require("firebase-admin");
const { getDatabase } = require('firebase/database');
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express();
const PORT = 5001;
var https = require('https');
const { json } = require("express");
const { post } = require("postman-request");
const { PassThrough } = require("stream");
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));


app.get('/', async (req, res) => {
    var options = {
        url: 'https://api.estuary.tech/collections/',
        headers: {
          'Authorization': 'Bearer ESTd9361342-bdef-433c-a4d6-f5160b9f7bebARY'
        }
      };
    async function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
          const info = JSON.parse(body);
          
          
          for (let i = 0; i < info.length; i++){
            let cur = info[i];
            
            const collection = await admin.firestore().collection('projects').doc(cur.uuid);
            const doc = await collection.get();
            const docData = doc.data();
            if (!docData || !docData['contributors']){
                continue;
            }
            else{
                cur["contributors"] = docData['contributors'];
            }
            console.log(cur);
          }
          res.set({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        });
          res.json(info);
        } else {
          res.json(error);
        }
    
      }
      request(options, callback);
})

app.get('/video', async (req, res) => {
    const siteLink = req.query.cid;
    const collection = await admin.firestore().collection('videos').doc(siteLink);
    const doc = await collection.get();
    const docData = doc.data();
    docData['downloadLink'] = `https://dweb.link/ipfs/${req.query.cid}`,
    res.status(200).send(JSON.stringify(docData));
})

app.post('/video', async (req, res) => {    
    let projectDoc = admin.firestore().collection('projects').doc(req.query.coluuid);
    let arrUnion = await projectDoc.update({
        contributors: admin.firestore.FieldValue.arrayUnion(req.query.userName)
    });
    admin.firestore().collection('videos').doc(req.query.cid).set({name: req.query.name, description: req.query.description, contributor: req.query.userName}).then(documentReference => {
        res.status(200).send(JSON.stringify(documentReference));
    });
})

app.get('/collection', async (req, res) => {
    var options = {
        url: `https://api.estuary.tech/collections/${req.query.cid}`,
        headers: {
          'Authorization': 'Bearer ESTd9361342-bdef-433c-a4d6-f5160b9f7bebARY'
        }
      };
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
          const info = JSON.parse(body);
          res.json(info);
        } else {
          res.json(error);
        }
    }
    request(options, callback);
})

app.post('/collection', async (req, res) => {
    var options = {
        url: 'https://api.estuary.tech/collections/',
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ESTd9361342-bdef-433c-a4d6-f5160b9f7bebARY'
        },
        body: JSON.stringify({
            name: req.query.name,
            description: req.query.description
        })
    };
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            const info = JSON.parse(body);
            admin.firestore().collection('projects').doc(req.query.coluuid).set({name: req.query.name, description: req.query.description, contributors: [req.query.userName]}).then(documentReference => {
                res.status(200).send(JSON.stringify(documentReference));
            });
            // res.json(info);
        } else {
            res.json(error);
        }
    }
    request(options, callback);
})

app.post('/test2', async (req, res) => {
    admin.firestore().collection('users').add({name: req.query.name, description: req.query.description}).then(documentReference => {
        res.status(200).send(JSON.stringify(documentReference));
      });

})

app.get('/test', async (req, res) => {
    // var optionsget = {
    //     host : 'api.estuary.tech', // here only the domain name
    //     method : 'GET', // do GET
    //     port: 443,
    //     headers: {
    //         Authorization: 'Bearer ESTd9361342-bdef-433c-a4d6-f5160b9f7bebARY',
    //     },
    //     path: "/content/stats"
    // };
    
    // console.info('Options prepared:');
    // console.info(optionsget);
    // console.info('Do the GET call');
    
    // var reqGet = https.request(optionsget, function(res) {
    //     console.log("statusCode: ", res.statusCode);
    //     console.log("headers: ", res.headers);
    
    //     res.on('data', function(d) {
    //         console.info('GET result:\n');
    //         process.stdout.write(d);
    //         console.info('\n\nCall completed');
    //     });
    
    // });
    
    // reqGet.end();
    // reqGet.on('error', function(e) {
    //     console.error(e);
    // });

    const snapshot = await admin.firestore().collection('users').get();
    let users = [];
    snapshot.forEach(doc => {
        let id = doc.id;
        let data = doc.data();
        users.push({id, ...data});
    });
    res.status(200).send(JSON.stringify(users));
})