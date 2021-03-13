let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');
let carouselpage=document.querySelector('.carouselpage');
let Entertainment_Events=document.querySelector('.Entertainment_Events');
let Contact_Us=document.querySelector('.ContactUs');
let chatinner =document.querySelector('.chatarea-inner ');
let Loading_Animation =document.querySelector('.loading_animation');
let dark =document.querySelector('.Dark_Mode');
document.getElementById("zowie").style.display="none";
let intro = ["Hello, I am the LaunchTech Support Assistant", "Hi, I am a Robo", "Hello, My name is LaunchTech Suport Assistant"];
let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
let greetings = ["i am good you little piece of love", "i am fine, what about you", "don't want to talk", "i am good"];
let hobbies = ["i love to talk with humans", "i like to make friends like you", "i like cooking"];
let pizzas = ["which type of pizza do you like?", "i can make a pizza for you", "i would love to make a pizza for you", "would you like cheese pizza?"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const today = new Date();
function showusermsg(usermsg){ //3
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){  //5
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}  </div>`;
  
    chatareaouter.innerHTML += output;
    return chatareaouter;
}
let launch_enable; 
let entertainment_enable;

function chatbotvoice(message){

     
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'Invalid command, please use the commandd "info" to show all available commands"';
    if(message.includes('who are you')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('fine')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('info')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
        $('#exampleModal').modal('show');
    }
   
    switch (message){
        case 'hi':
        speech.text = 'Hello i am your launchTech support assistant';
        break;
        case 'hello':
        speech.text = 'Hello i am your launchTech support assistant';
        break;
        case 'hai':
        speech.text = 'Hello i am your launchTech support assistant';
        break;
    }
    if(message.includes('night')){
      Dark_Mode();
      document.querySelector('.menu').innerHTML='';
    }
    if(message.includes('contact')){
       
     ContactUs();
     speech.text='Contact us command selected, you can find us through our social media accounts';
    }
    switch (message) {
        case 'YouTube':
       
        Loading_Animatio('Loading to YouTube');
      
        speech.text='LaunchTech Youtube Account Selected, we will redirect you to our page in a moment';
        window.setTimeout(function() {
            
            // Redirect to a new specified location based on command
            WindowUrl("https://www.youtube.com");
            document.querySelector('.loading_animation').innerHTML='';
        }
        , 5000);
        
     
        break;
        case 'Facebook':
        speech.text='LaunchTech Facebook Account Selected, we will redirect you to our page in a moment';

       
        Loading_Animatio('Loading to Facebook');
       
       
        window.setTimeout(function() {
            
            // Redirect to a new specified location based on command
            WindowUrl("https://www.facebook.com/launchtech.dev");
        }
        , 5000);
        
        console.log('here');
       
        break;
        case 'website':
        



        console.log("1");
        Loading_Animatio('Loading to LauncTech website');
       console.log("2");
       
        window.setTimeout(function() {
            
            // Redirect to a new specified location based on command
            WindowUrl("https://launchtech.dev/");
        }
        , 5000);
        break;
        case 'Instagram':
        

        speech.text='LaunchTech Instagram Account Selected, we will redirect you to our page in a moment';
        console.log("1");
        Loading_Animatio('Loading to LaunchTech Instagram');
       console.log("2");
       
        window.setTimeout(function() {
            
            // Redirect to a new specified location based on command
            WindowUrl("https://www.instagram.com/launchtech.dev/"); 
        }
        , 5000);
        break;
        case 'back':
        HideDiv("response");
    }
    if(message.includes('entertainment') || entertainment_enable){
        entertainment_enable=true;
       if(message.includes('back')){
        entertainment_enable=false;
        
        
        // HideDiv("Entertainment_Events");
        speech.text='Please have a look at our entertainment events'
        showwelcomemessage();
        console.log("1");
    }else{
        document.getElementById("welcome").style.display="none";
        ShowEntertainmentEvents();
        speech.text='Please have a look at our entertainment events'
    }
}
    // console.log(message.includes('launch') || launch_enable);
    
    if(message.includes('launch') || launch_enable){
        launch_enable=true;
        if(message.includes('back')){
            launch_enable=false;
            HideDiv("carouselpage");
        }else{
        
      /*  let element=document.getElementById("test");
       element.appendChild(ShowLaunchTechExecutives); */

      
       speech.text='Have a look at lauchtech executives'
        ShowLaunchTechExecutives();
    }
    }
    
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text)); //4
}






recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;

 
 
    
    
    chatareamain.appendChild(showusermsg(transcript)); //2
    chatbotvoice(transcript);
    document.getElementById("welcome").style.display="none";
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    
    recognition.start(); //1
    console.log("Activated");
})



function welcome(){
    const speec = new SpeechSynthesisUtterance('no warning should arise');
    speec.text = 'Welcome to lauchtech support assistant system, please use the command info anywhere in the system to see available commands';
    window.speechSynthesis.speak(speec);
    
    showwelcomemessage();

}
let deta='';
function Loading_Animatio(deta){
    
    let output='';
    
    output +='<div class="spin">'
    output +='<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'
    output+='<p>'+deta+'</p>'
    output +='</div>>'
    Loading_Animation.innerHTML +=output;
    window.setTimeout(function() {
            
        // Redirect to a new specified location based on command
        document.querySelector('.lds-spinner').innerHTML='';
    }
    , 5000);
    return Loading_Animation;
    
    
}
function Dark_Mode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    
}



function showwelcomemessage(chatbotmsg){  //5
    document.querySelector('.well').outerHTML='';
    let output = '';
   
  
    output +='<div id="welcome" class="welcome">'
   output += '<p> LaunchTech aims to provide a socialising platform where students can learn from each other but also have fun by joining us in the gaming events and movie nights</p>'
   output += '<p>We offer a list of events such as:</p>'
  
    
   output += '<br>'

   output += '<button onclick="ContactUs()" id ="contact_us" type="button" class="btn btn-dark">Contact us</button>'
   output += '<button onclick="ShowEntertainmentEvents()" id ="listofevents" type="button" class="btn btn-dark">Entertainment Events</button>'
  output += '<button onclick="Dark_Mode()" id ="listofevents" type="button" class="btn btn-dark">Dark_Mode</button>'
   output += '<button onclick="ShowLaunchTechExecutives()" id ="listofevents" type="button" class="btn btn-dark">LaunchTech Executives</button>'
   output += '</div>'  

    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function ContactUs(){

    let ResponseExecutive= document.querySelector('.ResponseDiv') !== null;
    let CheckWelcomeImage=document.querySelector('.Image_Wrapper') !== null;
    let WelcomeStart=document.querySelector('.start') !== null;
    
    
    
    let Response_Entertainment= document.querySelector('.Entertainment_Events') !== null;
  
    if(WelcomeStart){
        document.querySelector('.start').innerHTML='';
    
        if (CheckWelcomeImage){
            document.querySelector('.Image_Wrapper').outerHTML='';
        }
    }
  

        if  (Response_Entertainment){
            document.querySelector('.Entertainment_Events').innerHTML='';
        }

        if  (ResponseExecutive){
            document.querySelector('.ResponseDiv').outerHTML='';
        }
       




    let output='';
    output +='<section>'
    output +='<ul id="services">'
    output +=' <h2>LaunchTech</h2>'
    output +=' <li>'
    output +='   <div class="facebook">'
    output +='     <a href="">'
    output +='      <i onclick=WindowUrl("https://www.facebook.com/launchtech.dev") class="fa fa-facebook" aria-hidden="true"></i>'
    output +='      </a>'
    output +='    </div>'
    output +='    <span>Facebook</span>'
    output +='  </li>'
    output +='  <li>'
    output +='    <div class="twitter">'
    output +='     <a href="">'
    output +='       <i class="fa fa-twitter" aria-hidden="true"></i>'
    output +='     </a>'
    output +='    </div>'
    output +='    <span>Twitter</span>'
    output +='  </li>'
    output +='  <li>'
    output +='    <div class="youtube">'
    output +='     <a href="">'
    output +='       <i class="fa fa-youtube" aria-hidden="true"></i>'
    output +='     </a>'
    output +='    </div>'
    output +='    <span>YouTube</span>'
    output +='  </li>'
    output +='  <li>'
    output +='    <div class="">'
    output +='      <a href="">'
    output +='        <i class="fa fa-linkedin" aria-hidden="true"></i>'
    output +='     </a>'
    output +='   </div>'
    output +='    <span>LinkedIn</span>'
    output +='  </li>'
    output +='  <li>'
    output +='    <div class="instagram">'
    output +='     <a href="">'
    output +='       <i onclick=WindowUrl("https://www.instagram.com/launchtech.dev/") class="fa fa-instagram" aria-hidden="true"></i>'
    output +='    </a>'
    output +='  </div>'
    output +='    <span>Instagram</span>'
    output +='  </li>'
    output +=' <li>'
    output +='    <div class="">'
    output +='     <a href="">'
    output +='       <i class="fas fa-blog" aria-hidden="true"></i>'
    
    output +='     </a>'
    output +='  </div>'
    output +='   <span>Github</span>'
    output +=' </li>'
    output +='</ul>'
    
    output +=' </section>'
    Contact_Us.innerHTML+=output;
    return  Contact_Us;
}
function WindowUrl(url){
    window.open(url);
}

function ShowLaunchTechExecutives(){
   

    let CheckWelcomeImage=document.querySelector('.Image_Wrapper') !== null;
    let WelcomeStart=document.querySelector('.start') !== null;
    
    
    
    let Response_Entertainment= document.querySelector('.Entertainment_Events') !== null;
    let ResponseContactUs= document.querySelector('.ContactUs') !== null;
    if(WelcomeStart){
        document.querySelector('.start').innerHTML='';
    
        if (CheckWelcomeImage){
            document.querySelector('.Image_Wrapper').outerHTML='';
        }
    }
        if  (Response_Entertainment){
            document.querySelector('.Entertainment_Events').innerHTML='';
        }

        if (ResponseContactUs){
            document.querySelector('.ContactUs').innerHTML='';

        }

    
  

       






    var img = new Array("ouwesh.jpg", "warren.jpg", "farhaan.jpg");
    var details = new Array("Ouwesh Seeroo  President LaunchTech","Warren   Content Creator","Farhaan  Event Planner");
    let output ='';
    output +=' <div class="ResponseDiv">'
    for (let i = 0; i < img.length; i++) {
    
        output +='<div class="inner">'
    output +='<img id='+img[i]+' src='+img[i]+'>'

    output += '<h4>'+details[i]+'</h4>'
    output +='</div>'
    


    
    
    }
    output += '<p>We are a team of 8 executives aiming to make the university lifes of students better</p>'
    output +='<button id="Back_Executives" onclick=HideDiv("carouselpage")>Back</button>'
    output +=' </div>'
    carouselpage.innerHTML += output;
    return carouselpage;
}


function ShowEntertainmentEvents(){
    let CheckWelcomeImage=document.querySelector('.Image_Wrapper') !== null;
    let WelcomeStart=document.querySelector('.start') !== null;
    
   
    
    let ResponseExecutive= document.querySelector('.ResponseDiv') !== null;
    let ResponseContactUs= document.querySelector('.ContactUs') !== null;
    if(WelcomeStart){
        document.querySelector('.start').innerHTML='';
    
        if (CheckWelcomeImage){
            document.querySelector('.Image_Wrapper').outerHTML='';
        }
    }
    if (ResponseExecutive){

            console.log('hahahah');
            
            document.querySelector('.ResponseDiv').outerHTML='';
        }

       
        if (ResponseContactUs){
            document.querySelector('.ContactUs').innerHTML='';

        }

    
    var img = new Array("briani.jpg", "cinema.jpg", "ludo.jpg");
    var details = new Array("Briani Feast","Movie Night","Ludo Event");
    let output ='';
    output +=' <div class="Response_Entertainment">'
    for (let i = 0; i < img.length; i++) {
    
        output +='<div class="inner_Entertainment">'
    output +='<img id='+img[i]+' src='+img[i]+'>'

    output += '<h4>'+details[i]+'</h4>'
    
   
    output +='</div>'
    


    
    
    }
    output += '<p>We are a team of 8 executives aiming to make the university lifes of students better</p>'
    output +='<button id="Back_Entertainment" onclick=HideDiv("Entertainment_Events")>Back</button>'
    output +=' </div>'
    Entertainment_Events.innerHTML += output;
    return Entertainment_Events;
}
function HideDiv(id){
    console.log(id);
    document.querySelector("."+id).innerHTML="";
}


