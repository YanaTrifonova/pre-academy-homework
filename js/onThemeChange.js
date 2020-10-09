//false means light theme, true means dark theme
let color = false;

function onThemeChange() {
    let elementClassList = document.getElementById("body").classList;

    let githubImg = document.getElementById("github");
    let linkedinImg = document.getElementById("linkedin");
    let instagramImg = document.getElementById("instagram");
    let mailImg = document.getElementById("mail");

    color = !color;

    if (color) {
        elementClassList.remove("theme-light");
        elementClassList.add("theme-dark");

        githubImg.src="img/github_light.svg";
        linkedinImg.src="img/linkedin_light.svg";
        instagramImg.src="img/instagram_light.svg";
        mailImg.src="img/mail_light.svg";

    } else {
        elementClassList.remove("theme-dark");
        elementClassList.add("theme-light");

        githubImg.src="img/github_dark.svg";
        linkedinImg.src="img/linkedin_dark.svg";
        instagramImg.src="img/instagram_dark.svg";
        mailImg.src="img/mail_dark.svg";
    }
}