function show(id, img) {
	var d = document.getElementById(id);
	var imgEle = document.getElementById(img);
	for (var i = 1; i <= 10; i++) {
		if (document.getElementById('smenu' + i) &&
			document.getElementById('img' + i)) {
			document.getElementById('smenu' + i).style.display = 'none';
			document.getElementById('img' + i).style.transform = 'rotate(0deg)';
		}
	}
	if (d && imgEle) {
		d.style.display = 'block';
		imgEle.style.transform = 'rotate(180deg)';
	}
}
