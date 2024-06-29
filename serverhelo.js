const express = require("express");
const app = express();
const db = require("./db");

const Person = require("./models/person");
const MenuItems = require("./models/Menu");

const bodyParser = require('body-parser');

app.use(express.static('public'));  
app.use(bodyParser.json());

const personRoutes = require("./routes/personroutes");
const menuRoutes = require("./routes/menuroutes");

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Arslan Restaurant</title>
            </head>
            <body>
                <h1>Welcome to Arslan Restaurant</h1>
                <p>Welcome Sir, How can I help you.</p>
                <button type="submit" id="chickenButton">Chicken</button>
                <script>
                    document.getElementById('chickenButton').onclick = function() {
                        console.log("chicken is served");
                    };
                </script>
            </body>
        </html>
    `);
});

// Use person routes
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);

// Uncomment these routes if needed
// app.get('/chicken', (req, res) => {
//     res.send(`
//         <html>
//             <head>
//                 <title>Chicken Served</title>
//             </head>
//             <body>
//                 <h1>Sure Sir</h1>
//                 <p>I served chicken in 10 seconds...</p>
//                 <h2 id="counter"></h2>
//                 <h2 id="demo"></h2>
//                 <script>
//                     let counter = 10;
//                     function updateCounter() {
//                         document.getElementById("counter").innerHTML = 'Counter is: ' + counter;
//                         if (counter === 0) {
//                             clearInterval(interval);
//                             document.getElementById("demo").innerHTML = "Your chicken is ready!";
//                         }
//                         counter--;
//                     }
//                     let interval = setInterval(updateCounter, 1000);
//                 </script>
//             </body>
//         </html>
//     `);
// });

// app.get('/blog', (req, res) => {
//     res.send(`
//         <html>
//             <head>
//                 <style>
//                 #farhan {
//                     color: red;
//                     font-size: 50px;
//                 }
//                 </style>
//             </head>
//             <body>
//                 <div id='farhan'><b>farhan hi</b></div>
//             </body>
//         </html>
//     `);    
// });

// app.get('/api', (req, res) => {
//     let customPentest = {
//         testApp: "true",
//         appName: "sololearn",
//         testing: "true"
//     };
//     res.json(customPentest);    
// });

// app.post('/items', (req, res) => {
//     res.send("data is saved");    
// });

app.listen(3000, () => {
    console.log("Listening on port: 3000");
});
