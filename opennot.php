<?php
//@mysql_connect('localhost','root','');
@mysql_connect('54.165.23.229:3306','outsider','@$@h0C5wAs');
if(!@mysql_select_db('mandrill')){
   echo mysql_error();
}

//year-month-date
error_reporting(E_ALL ^ E_NOTICE);
  header('Access-Control-Allow-Origin: *'); 
  header('Access-Control-Allow-Methods: POST, GET, OPTIONS'); 
  header('Access-Control-Allow-Credentials: true');
  require_once 'src/Mandrill.php'; 
try {
    $mandrill = new Mandrill('UCSR4BqedC9KY4x3sOv7wA');
    $query = 'state:sent';
    $date_from = '2015-01-01';
    $date_to = '2016-09-31';
    $result = $mandrill->messages->search($query,$date_from, $date_to);
print_r($result);   
foreach($result as $resu){
$set=$resu['email'].'||'.$resu['tags'][0];  
$save='INSERT INTO `openot`(`openot`, `prime`) VALUES ("'.$resu['opens'].'","'.$set.'")';  
    echo "<br>";
if(mysql_query($save)){
     echo 'inserted';  
     echo "<br>";
}    else {
echo $upp='UPDATE `openot` SET `openot`="'.$resu['opens'].'" WHERE `prime`="'.$set.'"';
mysql_query($upp); 
echo 'updated';  
echo "<br>";
}
    
}
} catch(Mandrill_Error $e) { 
    echo 'A mandrill error occurred: ' . get_class($e) . ' - ' . $e->getMessage();
    throw $e;
}
?>