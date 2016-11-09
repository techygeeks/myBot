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
        session.send("1. Following jobs are available 1. Manager Level 2. Engineer Level");
    }
    else if(userInput.toLowerCase().indexOf('manager')!=-1){
        session.send("1. Following jobs are available"+
        "1. HR Manager - HM1098" +
        "2. Engineering Manager - EM1099" +
        "Enter Job Id(For E.g hm1098) to check details");
    }
    else if(userInput.toLowerCase().indexOf('engineer')!=-1){
        session.send("1. Following jobs are available" +
        "1. Software Engineer - SE2011"+
        "2. Senior Software Engineer - SSE2012"+
        "Enter Job Id(For E.g se2011) to check details"
        );
    }
    else if(userInput.toLowerCase().indexOf('hm1098')!=-1){
        session.send("HR Manager Required with an experience of over 10 years, Should have following skills/experience:" + 
        "1. Compensation and Benefits" +
        "2. Recruitment and Hiring" +
        "3. Performance/Employee Evaluation" +
        "4. Training and Staff Development"
        );
    }
    else if(userInput.toLowerCase().indexOf('em1099')!=-1){
         session.send("Engineering Manager Required with an experience of over 10 years, Should have following skills/experience:" + 
        "1. Project management" +
        "2. Technical understanding" +
        "3. Performance/Employee Evaluation" +
        "4. Management duties"
        );
    }
     else if(userInput.toLowerCase().indexOf('se2011')!=-1){
         session.send("Software Engineer Required with an experience of over 2 years, Should have following skills/experience:" + 
        "1. Software Development" +
        "2. Understanding of Frameworks such as Spring and Hibernate" +
        "3. Coding Abilities" +
        "4. Algorithms and Data Structures"
        );
    }
     else if(userInput.toLowerCase().indexOf('sse2012')!=-1){
         session.send("Senior Software Engineer Required with an experience of over 4 years, Should have following skills/experience:" + 
        "1. Software Development" +
        "2. Understanding of Frameworks such as Spring and Hibernate" +
        "3. Coding Abilities" +
        "4. Algorithms and Data Structures"
        );
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