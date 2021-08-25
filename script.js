var audio = document.getElementById('audio')
        
var count = document.getElementById('count')
var counter = 0
var tile1 = document.querySelectorAll('.tile');
for(var tile of tile1){
    tile.addEventListener('click', function(){
        
        counter++
    count.innerText = counter
    })

}
document.addEventListener('mouseover', () => {
    audio.play();
});