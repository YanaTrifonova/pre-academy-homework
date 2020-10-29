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

        githubImg.src="images/social/github_light.svg";
        linkedinImg.src="images/social/linkedin_light.svg";
        instagramImg.src="images/social/instagram_light.svg";
        mailImg.src="images/social/mail_light.svg";

    } else {
        elementClassList.remove("theme-dark");
        elementClassList.add("theme-light");

        githubImg.src="images/social/github_dark.svg";
        linkedinImg.src="images/social/linkedin_dark.svg";
        instagramImg.src="images/social/instagram_dark.svg";
        mailImg.src="images/social/mail_dark.svg";
    }
}