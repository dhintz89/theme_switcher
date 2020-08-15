// function toggleDarkMode() {
//     // grab the script that controls colors (either darkmode.css or lightmode.css)
//     const scriptTag = document.getElementById("colorScheme");
//     // break the href into array
//     const splitHref = scriptTag.href.split("/");
//     // determine if scheme is currently light or dark, then switch the value within href array
//     splitHref[splitHref.length-1] == "darkmode.css" ? splitHref.splice(-1, 1, "lightmode.css") : splitHref.splice(-1, 1, "darkmode.css");
//     // combine altered array back into string and set as new href
//     scriptTag.href = splitHref.join('/');
// }

// function changeTheme() {
//     // grab the script that controls colors (either darkmode.css or lightmode.css)
//     const scriptTag = document.getElementById("colorScheme");
//     // break the href into array
//     const splitHref = scriptTag.href.split("/");
//     // case statement based on which button was clicked
//     switch(event.target.id) {
//         case "darkThemeBtn":
//             splitHref.splice(-1, 1, "darkmode.css");
//             break;
//         case "lightThemeBtn":
//             splitHref.splice(-1, 1, "lightmode.css");
//             break;
//         case "blueThemeBtn":
//             splitHref.splice(-1, 1, "bluetheme.css");
//             break;
//     }
//     // combine altered array back into string and set as new href
//     scriptTag.href = splitHref.join('/');
// }

function apply() {
    event.preventDefault();
    // get variable name
    const cssVar = event.target.className
    // get new value
    const input = event.target.dataset.value;
    // set variable name to new value
    document.documentElement.style.setProperty(`--${cssVar}`, input);
}