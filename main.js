num1 = Number(document.getElementById("num1").value) ;
num2 = Number(document.getElementById("num2").value) ;

function add()
{
    ans = Number(document.getElementById("num1").value) + Number(document.getElementById("num2").value) ;
    document.getElementById("ans").innerHTML = ans;

}

function sub()
{
    ans = Number(document.getElementById("num1").value) - Number(document.getElementById("num2").value) ;
    document.getElementById("ans").innerHTML = ans;

}

function div()
{
    ans = Number(document.getElementById("num1").value) / Number(document.getElementById("num2").value) ;
    document.getElementById("ans").innerHTML = ans;

}

function mul()
{
    ans = Number(document.getElementById("num1").value) * Number(document.getElementById("num2").value) ;
    document.getElementById("ans").innerHTML = ans;

}



function speak()
{
    synth = window.speechSynthesis;
    speak_data = ans;
    speak_utter = new SpeechSynthesisUtterance(speak_data);
    synth.speak(speak_utter);
    Webcam.attach(camera);
}