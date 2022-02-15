let input;
document.addEventListener("input", start);

function start() {
    getColorInput();


    converter();

}


function getColorInput() {

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


    //adds all converted colors to correct format
    const RGB = R + "," + G + "," + B;

    return RGB;
}



function toHSL(r, g, b) {
   
   
    r /= 255;
    g /= 255;
    b /= 255;

    let h, s, l;

    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);

    if (max === min) {
        h = 0;
    } else
        if (max === r) {
            h = 60 * (0 + (g - b) / (max - min));
        } else
            if (max === g) {
                h = 60 * (2 + (b - r) / (max - min));
            } else
                if (max === b) {
                    h = 60 * (4 + (r - g) / (max - min));
                }

    if (h < 0) { h = h + 360; }

    l = (min + max) / 2;

    if (max === 0 || min === 1) {
        s = 0;
    } else {
        s = (max - l) / (Math.min(l, 1 - l));
    }
    // multiply s and l by 100 to get the value in percent, rather than [0,1]
    s *= 100;
    l *= 100;

    console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
    const HSL = `${Math.floor(h)}, ${Math.floor(s)}%, ${Math.floor(l)}%`;
    return HSL;

}

function converter() {

    const hex = getColorInput();
    const rgb = toRGB(hex);

    const firstComma = rgb.indexOf(",");
    const secondComma = rgb.indexOf(",", firstComma + 1);
    const lastComma = rgb.lastIndexOf(",");
    r = rgb.substring(0, firstComma).trim();
    g = rgb.substring(firstComma + 1, secondComma).trim();
    b = rgb.substring(lastComma + 1).trim();

    const hsl = toHSL(r, g, b);




    displayColor(rgb, hsl, hex);
}


function displayColor(rgb, hsl, hex) {
    const rgbDestination = document.querySelector(".rgb");
    const hslDestination = document.querySelector(".hsl");
    const hexDestination = document.querySelector(".hex");
    const colorDest = document.querySelector("#color");



    rgbDestination.innerHTML = rgb;
    hslDestination.innerHTML = hsl;
    hexDestination.innerHTML = hex;
    colorDest.style.backgroundColor = hex;

    console.log(rgb)
    console.log(hsl)
    console.log(hex)

}