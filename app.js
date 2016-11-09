// Add your requirements
var restify = require('restify'); 
var builder = require('botbuilder'); 
//var Client = require('node-rest-client').Client;
var inputOfUser;
var expEligible = 'false';
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
     else if((userInput.toLowerCase().indexOf('hi')!=-1)||(userInput.toLowerCase().indexOf('hello')!=-1)){
        session.send("Hello User,How can i help you today");
    }
    else if(userInput.toLowerCase().indexOf('job')!=-1){
        session.send('Following job categories are available ' + 
        ' 1. Manager Level '+
        ' 2. Engineer Level '+
        ' send in the category name you want jobs listed for'
        );
    }
    else if(userInput.toLowerCase().indexOf('manager')!=-1){
        inputOfUser = 'manager';
        session.send("Following jobs are available  "+
        " 1. HR Manager - HM1098  " +
        " 2. Engineering Manager - EM1099  " +
        " Enter Job Id(For E.g hm1098) to check details ");
    }
    else if(userInput.toLowerCase().indexOf('engineer')!=-1){
        inputOfUser = 'engineer';
        session.send("Following jobs are available  " +
        " 1. Software Engineer - SE2011  "+
        " 2. Senior Software Engineer - SSE2012  "+
        " Enter Job Id(For E.g se2011) to check details "
        );
    }
    else if(userInput.toLowerCase().indexOf('hm1098')!=-1){
        session.send("HR Manager Required with an experience of over 10 years, Should have following skills/experience:  " + 
        " 1. Compensation and Benefits " +
        " 2. Recruitment and Hiring " +
        " 3. Performance/Employee Evaluation " +
        " 4. Training and Staff Development "+
        " Type apply in case you want to apply for this job"
        );
    }
    else if(userInput.toLowerCase().indexOf('em1099')!=-1){
         session.send("Engineering Manager Required with an experience of over 10 years, Should have following skills/experience: " + 
        " 1. Project management " +
        " 2. Technical understanding " +
        " 3. Performance/Employee Evaluation " +
        " 4. Management duties "+
        " Type apply in case you want to apply for this job"
        );
    }
     else if(userInput.toLowerCase().indexOf('se2011')!=-1){
         session.send("Software Engineer Required with an experience of over 4 years, Should have following skills/experience: " + 
        " 1. Software Development " +
        " 2. Understanding of Frameworks such as Spring and Hibernate " +
        " 3. Coding Abilities " +
        " 4. Algorithms and Data Structures "+
        " Type apply in case you want to apply for this job"
        );
    }
     else if(userInput.toLowerCase().indexOf('sse2012')!=-1){
         session.send("Senior Software Engineer Required with an experience of over 4 years, Should have following skills/experience: " + 
        " 1. Software Development " +
        " 2. Understanding of Frameworks such as Spring and Hibernate " +
        " 3. Coding Abilities " +
        " 4. Algorithms and Data Structures "+
        " Type apply in case you want to apply for this job"
        );
    }
    else if(userInput.toLowerCase().indexOf('apply')!=-1)
    {   
        expEligible = 'false';
        session.send("Before i send your resume, I need you to answer some questions" +
        " What is you current experience in organization(in months for E.g 12 for 12 months)"
        );
    }
    else if(expEligible=='true' && inputOfUser=="manager"){
        if(userInput>10){
            //session.send("What is your qualification 1. Graduate 2. PostGraduate ,type in name of qualification");
            session.send("You are eligible for applying ,Link for application : https://wfr.kronos.com/apply/job/bot/manager")
        }
        else{
            session.send("Sorry you are not eligible for this position as your experience is less than 10 years")
        }
    }
     else if(expEligible=='true' && inputOfUser=="engineer"){
        if(userInput>4){
            session.send("You are eligible for applying , Link for application : https://wfr.kronos.com/apply/job/bot/engineer")
        }
        else{
            session.send("Sorry you are not eligible for this position as your experience is less than 4 years")
        }
    }
    else if(userInput>18){
        expEligible = 'true';
        session.send("What is your total Experience in years");
    }
    else if(userInput<=18){
        expEligible = 'false';
        session.send("You are not eligible for this job as you have not spent more than 18 months in the organization");
    }
    else{
        session.send("I didn't catch that, lets try again");
    }   
});