
$(window).on('resize', function(event){

	var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
	var windowSize = $(window).width(); // Could've done $(this).width()
    if(windowSize < 560){
		document.getElementById('modal-header').style.background="red";
    	 modal.style.display = "block";
    } else if(windowSize < 755 ){
    	 modal.style.display = "block";
    } else{
	modal.style.display = "none";
	}
	
	span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27) {
        modal.style.display = "none";
    }
});


	
});



