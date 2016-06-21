chrome.runtime.onInstalled.addListener(function(details){
    var auth = new OAuth2('google');
    auth.clear();
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
console.log(localStorage.getItem('oauth2_google'));

    if( request.method == "doOAuth" )
    {
        var auth = new OAuth2('google');
        auth.clear();
        
        var google = new OAuth2('google', {
//            client_id: '90528765853-jo6t93t6s0fv6m3d363hu42q5l3ajvib.apps.googleusercontent.com',
//            client_secret: '6lt30o4qhZOzZofYAA-Q5_Le',
            client_id: '478129679479-t7v25css3icp8ip57vfto1110vktvds4.apps.googleusercontent.com',
            client_secret: 'K5OSKCFDpeP29z9EBp_YMr28',
            api_scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/contacts.readonly',
        });

        setTimeout(function(){
            google.authorize(function() {

                sendResponse(localStorage['oauth2_google']);

                //Close tab
                chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {
                    var activeTabId = arrayOfTabs[0].id;
                    chrome.tabs.remove(activeTabId);
                });

                //Focus on Gmail tab
             	/*setTimeout(function(){
					  chrome.tabs.update(sender.tab.id, {selected: true,url: 'https://mail.google.com/mail/u/0/#inbox'});
				},5000);*/
            });
        }, 1000);
        return true;
        
    }
    else if( request.method == "refreshOAuth" )
    {
        var google = new OAuth2('google', {
//            client_id: '90528765853-jo6t93t6s0fv6m3d363hu42q5l3ajvib.apps.googleusercontent.com',
//            client_secret: '6lt30o4qhZOzZofYAA-Q5_Le',
            client_id: '478129679479-t7v25css3icp8ip57vfto1110vktvds4.apps.googleusercontent.com',
            client_secret: 'K5OSKCFDpeP29z9EBp_YMr28',
            api_scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/contacts.readonly',
        });

        setTimeout(function(){
            google.authorize(function() {

                sendResponse(localStorage['oauth2_google']);

            });
        }, 1000);
        return true;
        
    }
    else if( request.method == "getBgGmailData" )
    {
        var oauth2_google = localStorage.getItem('oauth2_google');
        if( oauth2_google )
        {
            sendResponse(oauth2_google);
        }
        else
        {
            sendResponse(false);
        }        
    }
    else if(request.method =="getContacts"){
        //var url = openUrlInAjax: "https://www.google.com/m8/feeds/contacts/default/full?alt=json&q=sukh&max-results=10&v=3.0&access_token="+localStorage.getItem('MandrillGmail_authToken');
    }
    else
    {
        sendResponse({}); // snub them.
    }

});
