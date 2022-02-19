document.addEventListener("input", start);

function start() {
    console.log("start");

    getColors();

}


function getUserInput() {
    console.log("getinput works");
    let input;
    input = document.getElementById("color_input").value;
    input.toString();
    return input;

}



function toRGB(color) {

    console.log("toRGB works");
    const rhex = color.substring(1, 3);
    const ghex = color.substring(3, 5);
    const bhex = color.substring(5, 7);


    const R = parseInt(rhex, 16);
    const G = parseInt(ghex, 16);
    const B = parseInt(bhex, 16);


    //adds all converted colors to object
    const RGB = { R, G, B };

    return RGB;
}



function toHSL(r, g, b) {
    console.log("toHSl works");


    r /= 255;
    g /= 255;
    b /= 255;

    let H, S, L;

    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);

    if (max === min) {
        H = 0;
    } else
        if (max === r) {
            H = 60 * (0 + (g - b) / (max - min));
        } else
            if (max === g) {
                H = 60 * (2 + (b - r) / (max - min));
            } else
                if (max === b) {
                    H = 60 * (4 + (r - g) / (max - min));
                }

    if (H < 0) { H = H + 360; }

    L = (min + max) / 2;

    if (max === 0 || min === 1) {
        S = 0;
    } else {
        S = (max - L) / (Math.min(L, 1 - L));
    }
    // multiply S and L by 100 to get the value in percent, rather than [0,1]
    S *= 100;
    L *= 100;

    //rounds the values
    H = Math.floor(H);
    S = Math.floor(S);
    L = Math.floor(L);

    const HSL = { H, S, L };
    return HSL;

}

function rgbToCss(r, g, b){
const cssColor = `rgb(${r},${g},${b})`;
return cssColor;
}

//this functions calls  and converts the returned colors from each toXXX function
function getColors() {
    console.log("getColors works");

    //gets the returned values from each functions using the user input, and previously converted
    const hex = getUserInput();
    const rgb = toRGB(hex);
    const hsl = toHSL(rgb.R, rgb.G, rgb.B);
    const cssColor = rgbToCss(rgb.R, rgb.G, rgb.B);



    delegator(rgb, hsl, hex,cssColor);
}

function delegator(rgb, hsl, hex, css) {
    console.log("delegator works");

    showRGB(rgb);
    showHSL(hsl);
    showHex(hex);
    showColor(hex);
    showCssColor(css);
}



function showRGB(rgb) {
    

    //make the object into string, before showing it in the selected destination
    const RGB = `${rgb.R}, ${rgb.G}, ${rgb.B}`;

    const rgbDestination = document.querySelector(".rgb");
    rgbDestination.innerHTML = RGB;


}

function showHSL(hsl) {
    //make the object into string, before showing it in the selected destination
    const HSL = `${hsl.H}, ${hsl.S}%, ${hsl.L}%`;

    const hslDestination = document.querySelector(".hsl");
    hslDestination.innerHTML = HSL;


}

function showHex(hex) {
    const HEX = hex.toUpperCase();
    const hexDestination = document.querySelector(".hex");
    hexDestination.innerHTML = HEX;


}


function showColor(color) {
    const colorDest = document.querySelector("#color");
    colorDest.style.backgroundColor = color;

}


function showCssColor(cssColor) {
  console.log(cssColor);
}