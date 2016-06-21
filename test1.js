var passemail=location.href.split('=')[1];
// document.getElementById("setsrc").src= 'http://app.roljobs.net/Introducrl/template/index.php?email=intro@introdu.cr';
//document.getElementById("setsrc").src= 'https://192.168.0.143/introducr/template/index.php?email=intro@introdu.cr';
document.getElementById("setsrc").src= 'https://introdu.cr/v3/newtemplates.php?email='+passemail+'&first=first';
