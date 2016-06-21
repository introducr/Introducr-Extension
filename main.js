console.log('i m main');
var $;
$ = jQ1;

$('div[role="button"]:contains("COMPOSE")').attr('id','introo');
$.fn.highlight=function(c){function e(b,c){var d=0;if(3==b.nodeType){var a=b.data.toUpperCase().indexOf(c);if(0<=a){d=document.createElement("span");d.className="highlight";a=b.splitText(a);a.splitText(c.length);var f=a.cloneNode(!0);d.appendChild(f);a.parentNode.replaceChild(d,a);d=1}}else if(1==b.nodeType&&b.childNodes&&!/(script|style)/i.test(b.tagName))for(a=0;a<b.childNodes.length;++a)a+=e(b.childNodes[a],c);return d}return this.length&&c&&c.length?this.each(function(){e(this,c.toUpperCase())}): this};$.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;with(this.parentNode)replaceChild(this.firstChild,this),normalize()}).end()}; 

function stopMoving(){
 if ($('span:contains("Reply")').length!=0){ 
  if(window.location.href.indexOf('#inbox/')!= -1 ){   
start_composing();
  }
 }
}

setInterval(function(){
var $;
$ = jQ1;
if(window.location.href.indexOf('#inbox/')!= -1 ){
	if ($('span:contains("Reply")').length!=0){
		if($('.highlight').length==0){	            
        $('body').highlight("Introduce me to");
        $('body').highlight("gain a introduction to");
        $('body').highlight("gain a intro to");
        $('body').highlight("make a introduction to");
        $('body').highlight("make a intro to");
        $('body').highlight("love a introduction to");
        $('body').highlight("like a introduction to");
        $('body').highlight("love a intro to");
        $('body').highlight("like a intro to");
        $('body').highlight("like to be introduced to");
        $('body').highlight("love to be introduced to");
        $('body').highlight("want to be introduced to");
        $('body').highlight("need to be introduced to");
        $('.highlight').attr('onclick','stopMoving()');
        }
		}	

}
    if ($('span:contains("Reply")').length==0){
        $('span>.highlight').attr('onclick','');  
        $('span').removeClass('highlight');  
    }

    if( $('div[role="button"]:contains("COMPOSE")').attr('id')!='introo'){
      $('div[role="button"]:contains("COMPOSE")').attr('id','introo');     
      $('div[role="button"]:contains("COMPOSE")').attr('onclick','new_start_composing()'); 
        
       // alert('soo');
    }
    
},2000);	
		
var gmail, menu_added = 0,
  current_email_id, prefix = 'MandrillGmail_',
  introto_name = "",
  to_name = "",
  introducr_opened = 0;

function refresh(f) {
  if ((/in/.test(document.readyState)) || (undefined === Gmail)) {
    setTimeout('refresh(' + f + ')', 10);
  } else {
    f();
  }
}


var main = function() {
  gmail = new Gmail();
 // console.log('Hello,', gmail.get.user_email());
  var realityemail = gmail.get.user_email();
  localStorage.setItem("emailidtobe", realityemail);
    

   var drftcheck=gmail.dom.get_left_sidebar_links().eq(3).text();
   if (drftcheck.indexOf("Drafts") >= 0){
   gmail.dom.get_left_sidebar_links().eq(2).parent().parent().parent().parent().after('<div style="cursor:pointer;padding:5px;" id="chokw"><a style="text-decoration:none;margin-left:12px;color:black" onclick="change()" id="chok" href="javascript:void(0)" title="Introducr"  >Introducr <span id="selected"></span></a></div>');
   } else{
	   gmail.dom.get_left_sidebar_links().eq(3).parent().parent().parent().parent().after('<div style="cursor:pointer;padding:5px;" id="chokw"><a style="text-decoration:none;margin-left:12px;color:black" onclick="change()" id="chok" href="javascript:void(0)" title="Introducr"  >Introducr <span id="selected"></span></a></div>'); 
   }

    
    
    
    
    //soma
//$('.aim:eq(2)').after('<div id="pod" class="aim"><div class="TO" id=":j6"><div class="TN GLujEb" style="margin-left:0px"><div class="aio UKr6le"><span class="nU n1"><span  onclick="change()" id="chok" href="javascript:void(0)" target="_top" class="J-Ke n0" title="Inraducr" aria-label="Inraducr 65 unread" tabindex="-1" >Introducr one<span id="selected"></span></span></span></div><div class="nL aif"></div></div></div></div>');

$ = jQ1;
 $.ajax({url: "https://introdu.cr/info/testtemp/template/templatelist.php?email="+realityemail,datatype: "json",success: function(data){ if(data=="{}"){ 
if(localStorage.getItem('kot')!='goot'){
   gmail.tools.add_modal_window('Welocme To Introducr', '<style>#gmailJsModalWindow{top:0px;height:55%;width:55%;}#gmailJsModalWindowContent{height:85% !important;}</style><script>$(document).ready(function(){  $("#gmailJsModalWindowOk").text("Create Template Now!");$(".tedr").load("https://introdu.cr/info/testtemp/template/tt.php"); $("#gmailJsModalWindowOk").click(function(){localStorage.setItem("kot","goot");setTimeout(function() {change();}, 2000);$("#gmailJsModalWindowClose").click();});});</script><div class="tedr"></div>', function() { 
        

});
}  
 
 
} 
else{
localStorage.setItem('kot','');	
}

} }); 
    


    
    
  $("span[ title='Looking for Google+? Click the Google Apps icon to the right.']").text();

  var menuButtonHTML = '' + prefix + 'menuWrapper';

  gmail.tools.add_top_icon(menuButtonHTML, function() {
    start_composing();

  }, prefix + 'menu');

  gmail.observe.on('view_thread', add_introduction_option_to_menu);
  gmail.observe.on('view_email', function(obj) {

	
//    $("span:contains('introduce me to'),span:contains('gain an introduction to'),span:contains('gain an intro to'),span:contains('make an introduction to'),span:contains('make an intro to')").click(function() {
//      $(this).attr('href', 'javascript:void(0)');
//      start_composing();
//    });

    current_email_id = obj.id;
    console.log("gmail.get.email_id():" + current_email_id);
  });

  gmail.observe.on("compose", function(compose, type) {
    //$(".GS:first tbody:first tr:first").remove();
    $(".introducr_div_intro").remove();
    //samo2
    setTimeout(function() {
			
		if($('#introducr_reply_sendbutton').length==1){
			//console.log(0);
		}
      // show_modal_for_type_of_introduction();
    }, 1000);
    //samo2
    console.log('HERE:', compose, 'type is:', type); // gmail.dom.compose object
      
      
      	$("img[alt='Close']").hover(function(){
		new_start_composing();
		});

      
      
      

  });
}

function insert_email_template(temp) {
  console.log("temp:" + temp);
  $("#" + prefix + "introtype").val(temp);
  if (temp == "direct") {
    $(".editable").html(get_template(temp));
    $('[name="subjectbox"]').attr("placeholder","Direct Introduction");
  } else {
    $(".editable").html(get_template2(temp));
    $('[name="subjectbox"]').attr("placeholder","Opt-In Introduction");
  }
}

function start_composing() {
if($(".fX.aXjCH").length>=1){
 $(".oh.J-Z-I.J-J5-Ji.T-I-ax7:first").trigger('click');
      introducr_opened = 0;   
}
  if ($("#introducr_intro_email").length > 0) {
    if (confirm("Do you really want to discard this introduction?")) {
      $(".oh.J-Z-I.J-J5-Ji.T-I-ax7:first").trigger('click');
      introducr_opened = 0;
    }
    return false;
  }
  gmail.compose.start_compose();
  show_modal_for_type_of_introduction();
  gmail.observe.on("discard_draft", function() {
    introducr_opened = 0;
  });
  gmail.observe.on("compose", function(compose, type) {
       		$("img[alt='Close']").hover(function(){
		new_start_composing();
		});
    $(".fX.aXjCH table:first").attr("style", 'display:none');
    $(".aoD.hl table:first").attr("style", 'display:none');
    $(".oL.aDm").attr("style", 'display:none');
    introducr_opened = 1;
    if ($("#introducr_intro_email").length == 0) {
      $(".fX.aXjCH").before(get_intro_boxes('compose'));

      $("." + prefix + "introducr_intro_email").blur(function() {
        if ($(this).val() == "") {
          display_error("Please provide proper email addresses.");
        } else {
          if ($("#introducr_intro_email").val() != "" && $("#introducr_to_email").val() != "") {
             // alert('here?');
            $('#introducr_reply_sendbutton').removeClass("T-I-ax7");
            $('#introducr_reply_sendbutton').addClass("T-I-atl");
          } else {
            $('#introducr_reply_sendbutton').removeClass("T-I-atl");
            $('#introducr_reply_sendbutton').addClass("T-I-ax7");
          }
          hide_error();
        }
      });

      $("#introducr_to_email").blur(function() {
        var introper = $('#MandrillGmail_toname').val();

        if (introper.indexOf('@') > -1) {
          introper = introper.split('@')[0];
        }
        var stro = $(".editable").html();
        stro1 = stro.replace(/{Toname}/gi,introper);
        $(".editable").html(stro1);
      });
      $("#introducr_intro_email").blur(function() {
        var introper = $('#MandrillGmail_introtoname').val();


        if (introper.indexOf('@') > -1) {
          introper = introper.split('@')[0];
        }

        var stro = $(".editable").html();
       // stro1 = stro.replace('{Introname}',introper);
        stro1 = stro.replace(/{Introname}/gi, introper);
        $(".editable").html(stro1);
      });

      $(".T-I.J-J5-Ji.aoO.T-I-atl.L3").attr('style', 'display:none');

      add_send_button();

      gmail.tools.add_reply_toolbar_button('Template', function() {
        show_modal_for_type_of_introduction_templates();
      }, "introducr_element_removable");
    }
    //$(".GS:first tbody:first tr:first").remove();
    //console.log('api.dom.compose object:', compose, 'type is:', type );  // gmail.dom.compose object
  });

    
    
    
    
}

function add_send_button() {
  gmail.tools.add_reply_toolbar_sendbutton('Send', function() {

//    if ($('#introducr_intro_email').val() == undefined || $('#introducr_intro_email').val() == "" || $('#' + prefix + 'introtoname').val() == undefined || $('#' + prefix + 'introtoname').val() == "") {
//      display_error("Please provide proper \"intro\" email address.");
//      return false;
//    } else {
//      hide_error();
//    }
//    if ($('#introducr_to_email').val() == undefined || $('#introducr_to_email').val() == "" || $('#' + prefix + 'toname').val() == undefined || $('#' + prefix + 'toname').val() == "") {
//      display_error("Please provide proper \"To\" email address.");
//      return false;
//    } else {
//      hide_error();
//    }

    var header = {
      'X-Auth-Token': localStorage.getItem(prefix + 'authToken')
    };
    var nameTo = $('#' + prefix + 'introtoname').val().split(' ');
    var nameConfirm = $('#' + prefix + 'toname').val().split(' ');
    var data = {
	  emailSub:$('[name="subjectbox"]').val(),
      emailTo: $('#introducr_intro_email').val(),
      emailFrom:'deepaknaik@roljobs.com',
      firstNameTo: nameTo[0],
      lastNameTo: nameTo[1] ? nameTo[1] : '',
      linkTo: "",
      emailConfirm: $('#introducr_to_email').val(),
      firstNameConfirm: nameConfirm[0],
      lastNameConfirm: nameConfirm[1] ? nameConfirm[1] : '',
      type: $('#' + prefix + 'introtype').val(),
      text: $('.editable').html(),
      defaultAction: 'rejected', //jQuery('.' + prefix + 'settings input:radio[name="defaultAction"]:checked').val(),
    }
    $('#introducr_reply_sendbutton').addClass("T-I-JE");
    gmail.tools.make_introducr_request_async(
      'https://introdu.cr/ext/api/request/add',
      'POST',
      header,
      'json',
      data,
      handle_response
    );
    /*$("#introducr_reply_sendbutton").attr('style','display:none');

    gmail.tools.add_reply_toolbar_sendbutton('<span class="oG" id="'+prefix+'sending_message">Sending...</span>',function(){

    },'aWQ');
    gmail.tools.infobox("Introducr invitation sent!", 2000);

    */
    //$("#introducr_reply_sendbutton").prepend();
    //        setTimeout(function(){
    //     location.href ="https://mail.google.com";
    //        },1000)
  });
}

function handle_response(response) {
  if (response.status == 'error' && response.errors) {
    $.each(response.errors, function(i, el) {
      //jQuery('.' + prefix + i).addClass('inputError');
      //jQuery('.' + prefix + i + 'Error').show().attr('title', el).html(el);
      $("#introducr_error").val($("#introducr_error").val() + ", " + el);
    })
    $('#introducr_reply_sendbutton').removeClass("T-I-JE");
  } else {
    $(".oh.J-Z-I.J-J5-Ji.T-I-ax7:first").trigger('click');
    new_start_composing();
    gmail.tools.infobox("Introducr invitation sent!", 3000);
    setTimeout(function() {
             //  location.href ="https://mail.google.com";
    }, 3200);
  }
}

function display_error(msg) {
  $("#introducr_error").html(msg);
  $("#introducr_error").show();
}

function hide_error() {
  $("#introducr_error").html("");
  $("#introducr_error").hide();
}
//var str = "{Toname} ,<br>A good friend of mine called  {Introname} would like an introduction to you.<br>Best Regards, <br><b>" + fromm + "</b>";

function get_template() {
$ = jQ1;
  var fromm = $('.gb_Ma.gb_r').text();
  var fromm = $("span[ title='Looking for Google+? Click the Google Apps icon to the right.']").text();  
    var remail=localStorage.getItem("emailidtobe");
    $.ajax({url: "https://introdu.cr/info/testtemp/template/defaulttemplate.php?email="+remail,datatype: "json",success: function(defa){ 
      if (defa.indexOf("Direct&&") >= 0){
         var tempos=defa.split('{}')[0].split('-')[1]; 
         $('.editable').html(tempos);          

     }   else{
		 
		         
       $('.editable').html("<p style='Margin-top:0;font-weight:400;letter-spacing:-0.01em;font-family:Georgia,serif;Margin-bottom:27px;font-size:17px;line-height:27px'> {Toname} and {Introname} ,<br>I hope my message finds you both well. I thought it would be great to connect the both of you as ________________________.It would be great to see the two of you connect. <br><br>Best regards,</p><br>"+fromm); 
           
     
     }
        
    }}); 

}
function get_template2() {
$ = jQ1;
  var fromm = $('.gb_Ma.gb_r').text();
  var fromm = $("span[ title='Looking for Google+? Click the Google Apps icon to the right.']").text();  
    var remail=localStorage.getItem("emailidtobe");
    $.ajax({url: "https://introdu.cr/info/testtemp/template/defaulttemplate.php?email="+remail,datatype: "json",success: function(defa){ 
        
       if (defa.indexOf("Optin&&") >= 0){
          var tempos=defa.split('{}')[1].split('-')[1]; 
         $('.editable').html(tempos);
    
     }   else{
                   
     $('.editable').html("<p style='Margin-top:0;font-weight:400;letter-spacing:-0.01em;font-family:Georgia,serif;Margin-bottom:27px;font-size:17px;line-height:27px'>Hi {Toname},<br>I hope all's been well since we last connected. I was asked by  {Introname} a [context: e.g., smart student in my seminar / former colleague from XYZ company, good friend, client] for an introduction to you and I wanted to run it by you first.<br> {Introname} is really interested in connecting with you to discuss _________________. It would be great to see the two of you connect. Please let me know if you would like any further information about {Introname}. In the meantime, here ____________ is a link to {Introname}'s LinkedIn.<br>Best regards,<br><p>"+fromm);
        
     }    
    }}); 

}

function alertbox(data) {
  alert("e:" + data);
}

function add_introduction_option_to_menu() {
  current_email_id = gmail.get.email_id();
  if (menu_added == 0) {
    menu_added = 1;
    gmail.observe.on('load_email_menu', function(match) {
      console.log('Menu loaded', match);
      // insert a new element into the menu
      $('<div />').addClass('J-N')
        .html('<div class="J-N-Jz">Make Introduction</div>')
        .click(compose_intro_email)
        .attr('role', 'menuitem')
        .attr('style', '-webkit-user-select: none;')
        .appendTo(match);
      menu_added = 1;
    });
  }
}

function compose_intro_email() {
start_composing();
    //samooooooo
//  console.log('$("#introducr_intro_email").length:' + $("#introducr_intro_email").length);
//  if ($("#introducr_intro_email").length > 0) {
//    return false;
//  }
//  gmail.compose.introducr_reply();
//  $(".GS:first tbody:first tr:first").attr('style', 'display:none');
//  $(".GS:first tbody:first").prepend(get_intro_boxes('reply'));
//  gmail.tools.add_reply_toolbar_button('Template', function() {
//    show_modal_for_type_of_introduction_templates();
//  }, "introducr_element_removable");
//
//  $("#introducr_intro_email").focus();
//  $("#introducr_intro_email").trigger("input");
//  $(".aoD.hl:first").click();
//  $(".fX.aXjCH").attr('style', 'display:block');
//  $(".aoD.hl").attr('style', 'display:none');
//  $("#introducr_intro_email").focus();
//  $("#introducr_intro_email").trigger("input");
//
//  $(".T-I.J-J5-Ji.aoO.T-I-atl.L3").attr('style', 'display:none');
//
//  gmail.tools.add_reply_toolbar_sendbutton('Send', function() {
//    $("#introducr_reply_sendbutton").attr('style', 'display:none');
//    gmail.tools.add_reply_toolbar_sendbutton('<span class="oG" id="' + prefix + 'sending_message">Sending...</span>', function() {
//
//    }, 'aWQ');
//    //$("#introducr_reply_sendbutton").prepend();
//  });
//
//  $("#introducr_to_email").blur(function() {
//    if ($(".editable").html() == "<br/>" || $(".editable").html() == "<br>" || $(".editable").html() == "") {
//      show_modal_for_type_of_introduction();
//    }
//  });

}

function show_modal_for_type_of_introduction() {
  gmail.tools.add_modal_window('Type of Introduction', '<script>$("#gmailJsModalWindowCancel").css({"background":"none","border":"none","margin":"0","padding":"0"});$(".Kj-JD-Jl>button").css("color","#BFABAB");$(".Kj-JD-Jl>button").css("border1px solid hsla(0, 0%, 55%, 0.1)");$("#gmailJsModalWindow>div").css("margin-left","150px");$("#gmailJsModalWindowOk").hide();$("#gmailJsModalWindowContent .' + prefix + 'makeintrooption").click(function(){$("' + prefix + 'introtype").val($(this).val());insert_email_template($(this).val());$("#gmailJsModalWindowClose").trigger("click");});</script><label><input type="radio" name="typeofintro" value="direct" class="' + prefix + 'makeintrooption" />&nbsp;Direct Introduction</label><br><label><input type="radio" name="typeofintro" value="authorised" class="' + prefix + 'makeintrooption" />&nbsp;Opt-In Introduction</label>', false, function() {
    //alert("hello");

  });
  //gmail.tools.add_modal_window('Type of Introduction', '<script>$("#gmailJsModalWindowOk").hide();$("#gmailJsModalWindowContent .makeintrooption").click(function(){compose_intro_email($(this).val());$("#gmailJsModalWindowClose").trigger("click");});</script><label><input type="radio" name="typeofintro" value="0" class="makeintrooption">&nbsp;Direct Introduction</label><br><label><input type="radio" name="typeofintro" value="1" class="makeintrooption">&nbsp;Opt-In Introduction</label>',false,false);
}

/* major */






// emailll="abinaya@roljobs.com"; remove it




function show_modal_for_type_of_introduction_templates() {
  gmail.tools.add_modal_window('Select Introduction Templates', '<script>var emailll=localStorage.getItem("emailidtobe");$(document).ready(function(){$("#gmailJsModalWindowOk").hide();$("#gmailJsModalWindowCancel").hide(); $.ajax({url: "https://introdu.cr/info/testtemp/template/templatelist.php?email="+emailll,datatype: "json",success: function(data){$(".someImage").hide();var directss=data.split("{}")[0].split("||"); $.each(directss, function(index, itemsy) { var itemsy1=itemsy.split("-")[0]; var itemsy2=itemsy.split("-")[1];if(itemsy2==undefined){$("#diress").append("<tr><td>There are 0 Direct Templates<td></tr>");} else{$("#diress").append("<tr><td><input type=\'radio\' id="+itemsy1+" class=\'finalclick\'> "+itemsy2+"<td></tr>");}});  var optss=data.split("{}")[1].split("||"); $.each(optss, function(index, optsy) { var optsy1=optsy.split("-")[0]; var optsy2=optsy.split("-")[1]; if(optsy2==undefined){ $("#optess").append("<tr><td>There are 0 Optin Templates <td></tr>"); } else{ $("#optess").append("<tr><td><input type=\'radio\' id="+optsy1+" class=\'finalclick\'> "+optsy2+"<td></tr>");}});  $(".finalclick").click(function(){ var ssnnoo=$(this).attr(\'id\'); $.ajax({url: "https://introdu.cr/info/testtemp/template/templatesview.php?sno="+ssnnoo,datatype: "json",success: function(datass){$(".editable").html(datass);$(".fX.aXjCH table:first").attr("style", "display:none");$("#gmailJsModalWindowClose").click(); }});}); }});      });</script><table id="diress" style="width:45%;float:left;"><tr><td><b>Direct Introduction<b></td></tr><tr><td><div class="someImage"></div></td></tr></table><table id="optess" style="width:45%;float:right"><tr><td><b>Opt-In Introduction<b></td></tr><tr><td><div class="someImage"></div></td></tr></table>', false, function() {
    //alert("hello");
  });
  //gmail.tools.add_modal_window('Type of Introduction', '<script>$("#gmailJsModalWindowOk").hide();$("#gmailJsModalWindowContent .makeintrooption").click(function(){compose_intro_email($(this).val());$("#gmailJsModalWindowClose").trigger("click");});</script><label><input type="radio" name="typeofintro" value="0" class="makeintrooption">&nbsp;Direct Introduction</label><br><label><input type="radio" name="typeofintro" value="1" class="makeintrooption">&nbsp;Opt-In Introduction</label>',false,false);
}




//  function change(){
//
//        	gmail.tools.add_modal_window('DASHBOARD', '<html><head><style>#gmailJsModalWindow{top:0px;height:85%;width:85%;}</style><script>$("#gmailJsModalWindowCancel").hide();$("#gmailJsModalWindowOk").hide();$("#gmailJsModalWindowClose").click(function(){ location.href ="https://mail.google.com"; });</script></head><body><div id="hearitloads"></div></body></html>',
//function() {
//});
//
//
//}

function change() {
    
    if($(".MandrillGmail_menu").length==""){
        alert('Somthing gone wrong! Please reload');
    }
else{
    

  gmail.tools.add_modal_window('', '<style>#gmailJsModalWindow{top:0px;height:95% !important;width:90%;}</style><script>$("#gmailJsModalWindowTitle").hide(); $("#gmailJsModalWindowCancel").hide();$("#gmailJsModalWindowOk").hide();</script><div id="hearitloads" style="height:100% !important"></div>',
    function() {
		
	});
}
}





function get_intro_boxes(type) {
  var ret;
  if (type == 'compose') {
	  
      var url=window.location.href;
      //alert(url);
    ret = '<div class="introducr_div_intro"><table><tr><td class="gO aQY">Intro</td><td><input type="text" id="introducr_intro_email" class="' + prefix + 'introducr_intro_email" name="introto" spellcheck="false" autocomplete="false" autocapitalize="off" autocorrect="off" tabindex="1" dir="ltr" aria-label="Intro" aria-haspopup="true" style="border:0px;width: 430px;" /></td></tr><tr><td class="gO aQY">To</td><td><input type="hidden" id="introducr_debug" class="introducr_debug" class="" /><input type="text" id="introducr_to_email" class="' + prefix + 'introducr_intro_email" name="to" spellcheck="false" autocomplete="false" autocapitalize="off" autocorrect="off" tabindex="1" dir="ltr" aria-label="Intro" aria-haspopup="true" style="width: 430px;border:0px" /><input type="hidden" name="' + prefix + 'introtoname" id="' + prefix + 'introtoname" /><input type="hidden" name="' + prefix + 'toname" id="' + prefix + 'toname" /><input type="hidden" name="' + prefix + 'introtype" id="' + prefix + 'introtype" /> </td></tr><tr><td style="display:none;color:red;" id="introducr_error" colspan="2"></td></tr></div>'
  } else {
    ret = '<tr class="' + prefix + 'introducr_element_removable"><td class="ok"><div class="o1"><span class="gO aQY" data-tooltip="Introduction To" aria-label="To - Introduction" tabindex="1">Intro</span></div></td><td class="eV"><input type="text" id="introducr_intro_email" class="' + prefix + 'introducr_intro_email" name="introto" spellcheck="false" autocomplete="false" autocapitalize="off" autocorrect="off" tabindex="1" dir="ltr" aria-label="Intro" aria-haspopup="true" style="width:100%;border:0px" /></td></tr><tr class="' + prefix + 'introducr_element_removable"><td class="ok"><div class="o1"><span class="gO aQY" data-tooltip="To" aria-label="To" tabindex="1">To</span></div></td><td class="eV"><input type="hidden" id="introducr_debug" class="introducr_debug" class="" /><input type="text" id="introducr_to_email" class="' + prefix + 'introducr_intro_email" name="to" spellcheck="false" autocomplete="false" autocapitalize="off" autocorrect="off" tabindex="1" dir="ltr" aria-label="Intro" aria-haspopup="true" style="width:100%;border:0px" /><input type="hidden" name="' + prefix + 'introtoname" id="' + prefix + 'introtoname" /><input type="hidden" name="' + prefix + 'toname" id="' + prefix + 'toname" /><input type="hidden" name="' + prefix + 'introtype" id="' + prefix + 'introtype" /> </td></tr>';
  }

  return ret;
}

refresh(main);


function new_start_composing() {
  gmail.observe.on("compose", function(compose, type) {
      
    $(".fX.aXjCH table:first").attr("style", 'display:inherit');
    $(".aoD.hl table:first").attr("style", 'display:inherit');
    $(".oL.aDm").attr("style", 'display:inherit');
    $('#introducr_reply_sendbutton').remove(); 
    $('div[role="button"]:contains("Send")').attr('style','none');
    $('.introducr_div_intro').remove();
      //$(".GS:first tbody:first tr:first").remove();
    //console.log('api.dom.compose object:', compose, 'type is:', type );  // gmail.dom.compose object
  });

}




