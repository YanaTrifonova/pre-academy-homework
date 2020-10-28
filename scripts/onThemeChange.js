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

        githubImg.src="images/github_light.svg";
        linkedinImg.src="images/linkedin_light.svg";
        instagramImg.src="images/instagram_light.svg";
        mailImg.src="images/mail_light.svg";

    } else {
        elementClassList.remove("theme-dark");
        elementClassList.add("theme-light");

        githubImg.src="images/github_dark.svg";
        linkedinImg.src="images/linkedin_dark.svg";
        instagramImg.src="images/instagram_dark.svg";
        mailImg.src="images/mail_dark.svg";
    }
}