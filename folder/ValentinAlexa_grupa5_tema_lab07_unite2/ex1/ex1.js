function changeProfile()
{
// call all functions to change profile
	NameToJob();
	educationToAchievements();
	oldToNewImage();
	changeBodyBackgroundColor();
}

function NameToJob() {
	document.getElementById("NumePrenume").innerHTML ="Chief Executive Officer - Mercedes AMG";
}

function educationToAchievements() {
	// schimbare primul rand tabel
	var r1 = document.getElementById("realizare_r1");
	var p1 = document.getElementById("perioada_r1");
	var l1 = document.getElementById("link_r1");
	r1.innerHTML = "Internship";
	p1.innerHTML = "01.06.2024-24.09.2024";
	l1.innerHTML = "https://www.mercedes-amg.com/en/home.html";

	// schimbare al doilea rand tabel
	var r2 = document.getElementById("realizare_r2");
	var p2 = document.getElementById("perioada_r2");
	var l2 = document.getElementById("link_r2");
	r2.innerHTML = "Cea mai buna lucrare de licenta";
	p2.innerHTML = "26.06.2026";
	l2.innerHTML = "https://etti.utcluj.ro/finalizare-studii.html";

	// schimbare al treilea rand tabel
	var r3 = document.getElementById("realizare_r3");
	var p3 = document.getElementById("perioada_r3");
	var l3 = document.getElementById("link_r3");
	r3.innerHTML = "Voluntariat";
	p3.innerHTML = "01.06.2024-24.09.2024";
	l3.innerHTML = "https://osut.ro/info-studenti/oportunitati/oportunitati-de-voluntariat";
}

function oldToNewImage() {
	var img = document.getElementById("pozamea");
	img.src = "pozameanoua.jpeg";
	img.style.opacity = 0.95;
	img.style.borderWidth = '12px';
	img.style.borderLeftWidth = '10px';
    img.style.borderStyle = 'solid';
    img.style.borderColor = 'red';
	img.style.right='100px'
	
	
	
}

function changeBodyBackgroundColor() {
	var body = document.getElementById("body");
	body.style.backgroundColor  = "##E4faff";
	body.style.fontFamily="FrakturBold";
	
}