<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title></title>
    <link rel="stylesheet" href="../css/normalize.css">
    <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.4.2/pure-min.css">
    <link rel="stylesheet" href="../css/styles.css" />
    <script src="../js/vendor/modernizr.min.js"></script>
  </head>
  <body style="height: 300px;"> 
    <form class="pure-form pure-form-stacked contact-form" action="/webformmailer.php" method="post"> 
        <input type="hidden" name="subject" value="Submission" /> 
        <input type="hidden" name="redirect" value="presenceofyes/php/thankyou.php" />

        <input class="pure-input-1" id="name" type="text" name="name" placeholder="Name" required/>
        <input class="pure-input-1" id="email" type="text" name="email" placeholder="Email" required/>
        <textarea class="pure-input-1" id="message" type="text" name="message" rows="7" placeholder="Message"></textarea>
        <input type="submit" id="submit-button" name="submit" value="Submit"/>

        <input type="hidden" name="form_order" value="alpha"/>
        <input type="hidden" name="form_format" value="html"/>
    </form>
  </body>
</html>