function start1(){
    navigator.mediaDevices.getUserMedia({ audio: true})
    classifier= ml5.soundClassifier("https://storage.googleapis.com/tm-model/HcMZZD-2v/model.json", modelRead)
    }
    function modelRead(){
        classifier.classify(gotResults)
    }
    function gotResults(e, r){
    if(e){
        alert("error")
    }
    else{
        console.log(r)
    }
    }