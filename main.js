var audio = document.getElementById("audioPlayer"),
    loader = document.getElementById("preloader");

function settingtoggle() {
    document.getElementById("setting-container").classList.toggle("settingactivate");
    document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
    document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
}

function playpause() {
    if (!document.getElementById("switchforsound").checked) {
        audio.pause();
    } else {
        audio.play();
    }
}

function visualmode() {
    document.body.classList.toggle("light-mode");
    document.querySelectorAll(".needtobeinvert").forEach(function (element) {
        element.classList.toggle("invertapplied");
    });
}

window.addEventListener("load", function () {
    loader.style.display = "none";
    document.querySelector(".hey").classList.add("popup");
});

let emptyArea = document.getElementById("emptyarea"),
    mobileTogglemenu = document.getElementById("mobiletogglemenu");

function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
    document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
    document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
    document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

function hidemenubyli() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
    document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
    document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
    document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

const sections = document.querySelectorAll("section"),
    navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li"),
    mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

window.addEventListener("scroll", () => {
    let currentSection = "";
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }
    });

    mobilenavLi.forEach(li => {
        li.classList.remove("activeThismobiletab");
        if (li.classList.contains(currentSection)) {
            li.classList.add("activeThismobiletab");
        }
    });

    navLi.forEach(li => {
        li.classList.remove("activeThistab");
        if (li.classList.contains(currentSection)) {
            li.classList.add("activeThistab");
        }
    });
});

console.log("%c Designed and Developed by Niladri Chatterjee ",
    "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white; font-weight:900; font-size:1rem; padding:20px;");

let mybutton = document.getElementById("backtotopbutton");

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function scrolltoTopfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
    scrollFunction();
};

document.addEventListener("contextmenu", function (event) {
    if (event.target.nodeName === "IMG") {
        event.preventDefault();
    }
}, false);

let Pupils = document.getElementsByClassName("footer-pupil"),
    pupilsArr = Array.from(Pupils),
    pupilStartPoint = -10,
    pupilRangeX = 20,
    pupilRangeY = 15,
    mouseXStartPoint = 0,
    mouseXEndPoint = window.innerWidth,
    currentXPosition = 0,
    fracXValue = 0,
    mouseYEndPoint = window.innerHeight,
    currentYPosition = 0,
    fracYValue = 0,
    mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = event => {
    fracXValue = (currentXPosition = event.clientX - mouseXStartPoint) / mouseXRange;
    fracYValue = (currentYPosition = event.clientY) / mouseYEndPoint;
    let translateX = pupilStartPoint + fracXValue * pupilRangeX;
    let translateY = pupilStartPoint + fracYValue * pupilRangeY;
    pupilsArr.forEach(pupil => {
        pupil.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });
};

const windowResize = event => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
};

window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);






// Disable Right-Click
document.addEventListener('contextmenu', function (event) {
	event.preventDefault();
});

// Disable F12, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+U, Ctrl+S
document.addEventListener('keydown', function (event) {
	// Disable F12
	if (event.key === 'F12') {
		event.preventDefault();
	}

	// Disable Ctrl+Shift+I (Inspect Element)
	if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'I') {
		event.preventDefault();
	}

	// Disable Ctrl+Shift+C (Inspect Element shortcut)
	if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'C') {
		event.preventDefault();
	}

	// Disable Ctrl+U (View Source)
	if ((event.ctrlKey || event.metaKey) && event.key === 'u') {
		event.preventDefault();
	}

	// Disable Ctrl+S (Save Page)
	if ((event.ctrlKey || event.metaKey) && event.key === 's') {
		event.preventDefault();
	}

	// Disable Ctrl+P (Print Page)
	if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
		event.preventDefault();
	}
});

// Detect Developer Tools Opening by Monitoring the Window Size
(function () {
	let devtoolsOpen = false;
	const threshold = 160;
	setInterval(function () {
		const widthThreshold = window.outerWidth - window.innerWidth > threshold;
		const heightThreshold = window.outerHeight - window.innerHeight > threshold;
		if (widthThreshold || heightThreshold) {
			if (!devtoolsOpen) {
				alert('Developer tools are open! This action is not allowed.');
				devtoolsOpen = true;
				window.location.reload(); // Optionally reload or redirect user
			}
		} else {
			devtoolsOpen = false;
		}
	}, 500); // Check every 500ms
})();








// Store the original title
var originalTitle = document.title;

// Add an event listener to detect when the tab visibility changes
document.addEventListener('visibilitychange', function () {
	if (document.hidden) {
		// Change the title when the user navigates away from the tab
		document.title = "🙏 Return to us!";
	} else {
		// Restore the original title when the user returns
		document.title = originalTitle;
	}
});