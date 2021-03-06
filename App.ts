import * as express from 'express'



class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router();

    const edyGamed = '<strong>Interpulated From TypeScript Class</strong>';

    let myArr = ['a','b','c','d'];

    let myHtml = ``;

    let ayHaga;

    


    for (let elment of myArr){
      myHtml += `<li>`+elment+`</li>`
    }




   

    router.get('/', (req, res) => {
      res.send(`<html>

<head>
   <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <title>Hello Express in TypeScript</title>

  <style>
    body{
      padding: 30px;
    }
    #myDiv{
      border-radius: 25px;
      padding: 20px;
    }
    label {
      font-weight: bold;
    }
    p {
      color: black;
    }
  </style>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">
  <script src="handlebars-v4.0.11.js"></script>
</head>

<body>

<div class="container">
<h1>Hello Express in TypeScript</h1>
<div> ` + edyGamed + `</div>
<p>this list is generated from TypeScript Array<p>
<ul>
`+myHtml+`
</ul>






</div>

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js" integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4" crossorigin="anonymous"></script>
</body>
</html>`)
    })
    this.express.use('/', router)
  }
}

export default new App().express
