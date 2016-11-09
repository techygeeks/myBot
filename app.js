// Add your requirements
var restify = require('restify'); 
var builder = require('botbuilder'); 
//var Client = require('node-rest-client').Client;

//var client = new Client();

/*var args = {
    data: {}, // data passed to REST method (only useful in POST, PUT or PATCH methods) 
    path: {}, // path substitution var 
    parameters: {}, // query parameter substitution vars 
    headers: { } // request headers 
};
*/

// Setup Restify Server
var server = restify.createServer(function(){
});
server.listen(process.env.PORT || 3000, function() 
{
   console.log('%s listening to %s', server.name, server.url);
});

// Create chat bot
var connector = new builder.ChatConnector
({ appId: '63815d36-2902-4e53-aa80-9a0cacf12227', appPassword: 'emEot4sLYuFRCecE6mj9YmS' }); 
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());
// Create bot dialogs
bot.dialog('/', function (session) {
   // console.log(session);
    var userInput = session.message.text;
    
    //rest call
    // registering remote methods 
//client.registerMethod("jsonMethod", "http://localhost:8080/count", "GET");
 
 
/* this would construct the following URL before invocation
 *
 * http://remote.site/rest/json/120/method?arg1=hello&arg2=world
 *
 */
/*client.methods.jsonMethod(args, function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    console.log(response);
});
*/
    if(userInput==''||userInput.trim==''){
         session.send("I am still waiting for your input");    
    }
    else if(userInput.toLowerCase().indexOf('job')!=-1){
        session.send("1. Following jobs are available 1. Manager 2. Engineer ");
    }
    else if(userInput.toLowerCase().indexOf('manager')!=-1){
        session.send("1. Following jobs are available 1. HR Manager - HM1098 2. Engineering Manager - EM1099 Enter Job Id to check details");
    }
    else if(userInput.toLowerCase().indexOf('engineer')!=-1){
        session.send("1. Following jobs are available 1. Software Engineer 2. Senior Software Engineer");
    }
    else if(userInput.toLowerCase().indexOf('hm1098')!=-1){
        session.send("HR Manager Required , Should have following skills:");
    }
    else if(userInput.toLowerCase().indexOf('em1099')!=-1){
         session.send("Engineering Manager Required , Should have following skills:");
    }
    else if(userInput.toLowerCase().indexOf('apply')!=-1)
    {
        session.send("Link for sending application - https://linkedin.com/apply/jobs/bot");
    }
    else if((userInput.toLowerCase().indexOf('hi')!=-1)||(userInput.toLowerCase().indexOf('hello')!=-1)){
        session.send("Hello User,How can i help you today");
    }
    else{
        session.send("I didn't catch that, lets try again");
    }   
});