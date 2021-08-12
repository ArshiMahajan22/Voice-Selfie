//Microphone
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var speech = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = speech;
    console.log(speech);
    if(speech == "take my selfie"){
        console.log("Taking Selfie -----");
        speak();
    }
}

function speak(){
    talk = window.speechSynthesis;
    //Text-To-Speech-Converter
    var textbox_text = "Taking Your Selfie in 5 seconds";
    //Computer-Speaks
    var utterThis = new SpeechSynthesisUtterance(textbox_text);
    talk.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function (){
        take_Snapshot();
        Save();
    }, 1000);
}

//Camera
Webcam.set({
    width: 375,
    height: 250,
    image_format: 'png',
    png_quality: 90
    constraints: {facing_mode: "environment"}
});
camera = document.getElementById("camera");

function take_Snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("Selfie").innerHTML = '<img id="Selfie_IMG" src="'+data_uri+'"/>';
    });
}

//Downloading the Image
function Save(){
    Selfie = document.getElementById("link");
    Selfie_img = document.getElementById("Selfie_IMG").src;
    Selfie.href = Selfie_img;
    Selfie.click();
}
