var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config ={
  user: 'priti26jadhav',
  database:'priti26jadhav',
  host: 'db.imad.hasura-app.io',
  port:'5432',
  password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));


var articles= {
 'article-one': {
    title:'Article one|Priti Jadhav',
    heading:'article one',
    date:'5 aug 2017',
    content: ` <p>
                This is my first article. This is the first page of my article. This is the content of the article. This is my first article. This is the first page of my article. This is the content of the article. This is my first article. This is the first page of my article. This is the content of the article.
            </p>
              <p>
                This is my first article. This is the first page of my article. This is the content of the article. This is my first article. This is the first page of my article. This is the content of the article. This is my first article. This is the first page of my article. This is the content of the article.
            </p>
              <p>
                This is my first article. This is the first page of my article. This is the content of the article. This is my first article. This is the first page of my article. This is the content of the article. This is my first article. This is the first page of my article. This is the content of the article.
            </p>`
},
 'article-two': {
    title:'Article two|Priti Jadhav',
    heading:'article one',
    date:'5 aug 2017',
    content: ` <p>
                This is my second article. This is the first page of my article. This is the content of the article.
                </p>`
 },
 'article-three': {
    title:'Article three|Priti Jadhav',
    heading:'article three',
    date:'10 aug 2017',
    content: ` <p>
                This is my third article. This is the first page of my article. This is the content of the article. >`
 }
};
function createTemplate (data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTemplate=`
 <html>
    <head>
        ${title}
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="ui/style.css" rel="stylesheet" />     
    </head>
    <body>
        <div class="container">
        <div>
            <a href='/'>Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var pool= new Pool(config);
app.get('/test-db', function (req,res) {
    //make request with select
    //return response
    pool.query('SELECT * FROM test', function (err, result){
        if (err){
            res.status(500).send(err.toString());
        }else{
            res.send(JSON.stringify(result));
        }
    });
});

app.get('/:articleName', function(req,res){
    //articleName=articleone
    
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var counter = 0;
app.get('/counter', function (req, res) {
   counter = counter + 1;
   res.send(counter.toString());
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var counter = 0;
app.get('/counter', function (req, res) {
   counter = counter + 1;
   res.send(counter.toString());
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names=[];
app.get('/submit-name', function (req, res){
//var name= req.params.name;
var name= req.query.name;//to get the names with query like http:.../submit-name?xxxx
names.push(name);
res.send(JSON.stringify(names));//how can we send array
    
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
