
narizx = 0
narizy = 0
diferenca = 0
pulsoDireitox = 0 
pulsoEsquerdox = 0

function setup(){
    video = createCapture(VIDEO)
    video.size(550,500)
    video.position(100,70)
    canvas = createCanvas(400,400)
    canvas.position(700,150)
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("Deu certo!")
}

function gotPoses(results){
    if (results.lennght > 0){
        console.log(results)
        narizx = results[0].pose.nose.x
        narizy = results[0].pose.nose.y
        pulsoDireitox = results[0].pose.rightWrist.x
        pulsoEsquerdox = results[0].pose.leftWrist.x
        diferenca = floor(pulsoEsquerdox - pulsoDireitox)
    }
}

function draw(){
    background('#969A97')

    document.getElementById("square_side").innerHTML = "largura e altura = " +diferenca + "px"
    fill('#F90093')
    stroke('#F90093')
    square(narizx -100, narizy -100, diferenca)
}

