const express = require('express');
const hbs = require('hbs');




//var handlebars = require('handlebars');
//var layouts = require('handlebars-layouts');

// Register helpers 
//handlebars.registerHelper(layouts(handlebars));





//handlebars.register(hbs.handlebars, {});

// Register partials 
//handlebars.registerPartial('layout', fs.readFileSync('layout.hbs', 'utf8'));

// Compile template 
//var template = handlebars.compile(fs.readFileSync('page.html', 'utf8'));

// Render template 
// var output = template({
//     title: 'Layout Test',
//     items: [
//         'apple',
//         'orange',
//         'banana'
//     ]
// });





const app = express();

// addRequestDate=(req,res,next)=>{
//     let requestAt = new Date();
//     console.log(requestAt);
//     next()
// }
app.use(function (req, res, next) {

    let timenow = new Date();
    let hour = timenow.getHours()
    console.log(hour)
    if(hour>=8 && hour<=18){
        next()
    }
    else{
        res.send('Our office is not open now')
    }
   
  });

app.set('view engine',hbs);
app.get('/',(req,res)=>{
   
    res.render('home.hbs')
})

app.get('/',(req,res)=>{
   
    res.render('home.hbs')
})

app.get('/contact',(req,res)=>{

    res.render('contact.hbs')
})
app.get('/ourservices',(req,res)=>{
   
    res.render('ourservices.hbs')
})
app.listen(3000,(err)=>{
    if(err) console.log("server is not runing")
    else console.log("server is runing on port 3000");
})
