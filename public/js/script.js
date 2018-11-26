let values = '';
$(".chosen-select").chosen({
  no_results_text: "Oops, nothing found!"
})

$(".chosen-select").chosen().change(function(e, params){
 values = $(".chosen-select").chosen().val();
});

function post_datas(){
	
	if (values.length < 5)
	{
		alert('please select at least 5 words')
	}
	else
	{
		alert('processing, please wait!')
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
			document.location.href = '/image';
		}}
		xhttp.open("POST", "/selected", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send("values="+values)
	}
};

