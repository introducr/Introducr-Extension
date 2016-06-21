
function loadScripts(array,callback){
    var loader = function(src,handler){
        var script = document.createElement("script");
        script.src = src;
        script.onload = script.onreadystatechange = function(){
        script.onreadystatechange = script.onload = null;
        	handler();
        }
        var head = document.getElementsByTagName("head")[0];
        (head || document.body).appendChild( script );
    };
    (function(){
        if(array.length!=0){
        	loader(array.shift(),arguments.callee);
        }else{
        	callback && callback();
        }
    })();
}
loadScripts([
   chrome.extension.getURL('vendor/jquery-2.1.4.min.js'), 
   chrome.extension.getURL('vendor/gmail.js') 
],function(){
  loadScripts([ chrome.extension.getURL('main.js')]);   
});


  
var interval = setInterval(function(){
 if(jQuery('#hearitloads').length==0 || jQuery('#hearitloads').length>1){
      //console.log('Not found be silent');
	  if(jQuery('#introducr_reply_sendbutton').length==1){
//		jQuery("img[alt='Close']").click(function(){
//		window.location='https://mail.google.com';
//		});

             
		}
		else{
//			console.log(1);
		}
   }  
    
if(jQuery('#hearitloads').length==1){
    
var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;if(!location.ancestorOrigins.contains(extensionOrigin)) {  var iframe = document.createElement('iframe');iframe.id='waaq';iframe.src = chrome.runtime.getURL('frame.html?emailis='+ localStorage.getItem('emailidtobe'));if(localStorage.getItem('kot')=="goot"){iframe.src = chrome.runtime.getURL('frames.html?emailis='+ localStorage.getItem('emailidtobe'));};iframe.style.cssText = 'top:0;right:0;display:block;' +'width:100%;height:100%;border:0px;z-index:1000;';
 

                                                                                                                         
if(jQuery('#waaq').length==0){  
 document.getElementById('hearitloads').appendChild(iframe);
}
}
        
// clearInterval(interval);     
   }
},2000);

var locaainvite=location.href;
if (locaainvite.indexOf("invite") !=-1) {
setTimeout(function(){
	

   jQuery( "div[type='checkbox']" ).eq(0).click(function(){
   //jQuery( "div[type='checkbox']" ).eq(0).click(function(){
 
   jQuery('tr').each(function(){ 
   
   if(jQuery(this).find('.csee').length==0){
   jQuery(this).find('td').eq(4).find('div').prepend('<span id="selected" class="csee"></span>&nbsp;&nbsp;');
   }
   });
	});
    jQuery('<div id="inviter" class="tk3N6e-LgbsSe VIpgJd-TzA9Ye-eEGnhe tk3N6e-LgbsSe-n2to0e tk3N6e-LgbsSe-vhaaFf-qwU8Me ipG21e" role="button" data-tooltip="Select All" aria-label="Invite Now" aria-hidden="false" aria-disabled="false" tabindex="0" style="background:#4684F1;color:white;-webkit-user-select: none;">Select All</div>&nbsp;&nbsp<div id="invite" class="tk3N6e-LgbsSe VIpgJd-TzA9Ye-eEGnhe tk3N6e-LgbsSe-n2to0e tk3N6e-LgbsSe-vhaaFf-qwU8Me ipG21e" role="button" data-tooltip="Invite to Introducr!" aria-label="Invite Now" aria-hidden="false" aria-disabled="false" tabindex="0" style="background:#4684F1;color:white;-webkit-user-select: none;">Invite to Introducr!</div>').insertAfter( "div[role='button']:contains('More')" );
  
    jQuery('#inviter').click(function(){
		jQuery( "div[type='checkbox']" ).eq(0).click();
		    jQuery(this).remove();
	});
	
	
	
	
	
       jQuery( "div[role='checkbox']" ).each(function(){
       jQuery(this).click(function(){   
	   if(jQuery(this).parent().parent().find('#selected').length==1){
       jQuery(this).parent().parent().find('#selected').remove();  
       jQuery(this).parent().parent().find('.csee').remove();  
	   } else{
	   jQuery(this).parent().parent().find('td').eq(4).find('div').prepend('<span id="selected" class="csee"></span>&nbsp;&nbsp;');
	   }	   
       });  
     });
	 
	 
    
    jQuery('#invite').click(function(){

       jQuery('.csee').each(function(){
           
             var the = jQuery(this);

          var to = jQuery(this).parent().text().trim();
          var frommy=localStorage.getItem('MandrillGmail_gmailUserData').split('email":"')[1].split('","')[0];
          var datapass='from='+frommy+'&to='+to;
          //alert(datapass);
          jQuery.ajax({
          type: "GET",
          data: datapass,
          crossDomain: true,
          url: "https://introdu.cr/info/testtemp/template/contactsinvite.php",
          datatype: "jsonp",
          success: function(data)
          {
             //console.log(data);
        
             var obj = jQuery.parseJSON(data);
             the.parent().parent().parent().append('<span style="float:right; line-height:3">'+obj.result+'</span>');

          }
          });
        /*alert(jQuery(this).parent().text());    */
        jQuery('#invite').replaceWith('<div class="tk3N6e-LgbsSe VIpgJd-TzA9Ye-eEGnhe tk3N6e-LgbsSe-n2to0e tk3N6e-LgbsSe-vhaaFf-qwU8Me ipG21e" role="button" data-tooltip="Invite Now" aria-label="Invite Now" aria-hidden="false" aria-disabled="false" tabindex="0" style="-webkit-user-select: none;">Invited</div>'); 
        alert('Invited');  
       });
    });
},5000);
}


