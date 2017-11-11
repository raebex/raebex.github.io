<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <title></title>
    <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.4.2/pure-min.css">
    <link rel="stylesheet" href="../css/styles.css" />
    <script src="../js/vendor/modernizr.min.js"></script>
    <link href='http://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
  </head>
  <body style="height: 300px;"> 
    <form class="pure-form pure-form-stacked contact-form" action="http://rebeccayoung.me/cgi-sys/formmail.pl" method="post" name="hgmailer"> 
        <input type="hidden" name="recipient" value ="r@rebeccayoung.me">
        <input type="hidden" name="subject" value="FormMail E-mail">
        

        <input class="pure-input-1" id="name" type="text" name="name" placeholder="Name" required/>
        <input class="pure-input-1" id="email" type="text" name="email" placeholder="Email" required/>
        <textarea class="pure-input-1" id="message" type="text" name="message" rows="7" placeholder="Message"></textarea>
        <input type="submit" id="submit-button" name="submit" value="Submit" />

        <input type="hidden" name="redirect" value="http://rebeccayoung.me/form/thankyou.php" />
    </form>
  </body>
</html>