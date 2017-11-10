<?php
 
$api_key = "ilVLJokHvXymxWlm1U0bLwHkUKm3Gm5HMxuZrA41cc9IuwhmyE"; // YOUR API KEY HERE
 
// THIS IS THE URL OF THE API
$url = "http://api.tumblr.com/v2/blog/presenceofyes.tumblr.com/posts/link?";
$url .= "api_key=" . $api_key . "&" . http_build_query($_GET);
 
// This executes the CURL request and returns the data
$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => $url,
    CURLOPT_USERAGENT => 'API Tutorial'
));
echo curl_exec($curl);
 
?>