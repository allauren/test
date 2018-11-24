
function post_datas(){
	var xhttp = new XMLHttpRequest();

		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
			document.location.href = '/compared';
		}}
	xhttp.open("POST", "/compare", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("url="+document.forms[0].docx.value)
};

$('.btn').on('click', function() {
  var $this = $(this);
  post_datas()
  $this.button('loading');
    setTimeout(function() {
       $this.button('reset');
   }, 80000);
});


