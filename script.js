function toggleDarkMode() {
    // grab the script that controls colors (either darkmode.css or lightmode.css)
    const scriptTag = document.getElementById("colorScheme");
    // break the href into array
    const splitHref = scriptTag.href.split("/");
    // determine if scheme is currently light or dark, then switch the value within href array
    splitHref[splitHref.length-1] == "darkmode.css" ? splitHref.splice(-1, 1, "lightmode.css") : splitHref.splice(-1, 1, "darkmode.css");
    // combine altered array back into string and set as new href
    scriptTag.href = splitHref.join('/');
}