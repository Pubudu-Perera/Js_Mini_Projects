const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')



// play & pause video
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}



// update play/pause icon
function updatePlayIcon(){
    if(video.paused){
        play.innerHTML = "<i class='fa fa-play fa-2x'></i>";
    }else{
        play.innerHTML = "<i class='fa fa-pause fa-2x'></i>";
    }
}



// update Progress & timestamp
function updateProgress(){

    // moving the progress bar icon according to the video time
    progress.value = (video.currentTime/video.duration)*100;

        // set minutes in timestamp 
        let mins = Math.floor(video.currentTime / 60);
        if(mins < 10){
            mins = "0" + String(mins);
        }
    
    
        // set minutes in timestamp 
        let secs = Math.floor(video.currentTime % 60);
        if(secs < 10){
            secs = "0" + String(secs);
        }
    
        timestamp.innerHTML = String(mins) + ":" + String(secs);
}


// set video time to progress 
function setVideoProgress(){
    
    // jump to the moment according to its time
    video.currentTime = (+progress.value * video.duration)/100;



}


// stop the video
function stopVideo(){
    video.currentTime = 0;
    video.pause();
}


video.addEventListener('click',toggleVideoStatus);
video.addEventListener('pause',updatePlayIcon);
video.addEventListener('play',updatePlayIcon);
video.addEventListener('timeupdate',updateProgress);

play.addEventListener('click',toggleVideoStatus);

stop.addEventListener('click',stopVideo);

progress.addEventListener('change',setVideoProgress);


