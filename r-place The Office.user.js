// ==UserScript==
// @name         r/place The Office
// @namespace    http://tampermonkey.net/
// @version      1
// @description  template for r/DunderMifflin artwork on r/place 2023
// @author       Lemoons
// @match        https://garlic-bread.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/lemoonsl/himym/blob/main/r-place%20HIMYM.user.js
// @downloadURL  https://github.com/lemoonsl/himym/blob/main/r-place%20HIMYM.user.js
// @require         https://cdn.jsdelivr.net/npm/toastify-js
// @resource     TOASTIFY_CSS https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==
// credit to the osu! logo script & Cpt.Dinosaur & r/placeTheWave & r/placeDE


//TODO: When changing the version, please do change the version in the userscript information as well as the version in version.json
const VERSION = "1";

const overlayLink = "https://raw.githubusercontent.com/lemoonsl/R-placeOffice/blob/main/PrisonMikeLayout.png?";
const versionLink = "https://github.com/lemoonsl/R-placeOffice/blob/main/version.json";

var NOTIFIED = false;
var START_NOTIFIED = false;

var SECOND = 1000;
var MINUTE = 60 * SECOND;

(async function () {

    GM_addStyle(GM_getResourceText('TOASTIFY_CSS'));

    var overlayImage = null;
    if (window.top !== window.self) {
        window.addEventListener('load', () => {
            const canvasContainer = document.getElementsByTagName("garlic-bread-embed")[0].shadowRoot.children[0].getElementsByTagName("garlic-bread-canvas")[0].shadowRoot.children[0];
            overlayImage = document.createElement("img");
            updateImage();
            overlayImage.style = `position: absolute;left: -500;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;`;
            canvasContainer.appendChild(overlayImage);
        }, false);
    }

    function updateImage() {
        overlayImage.src = overlayLink + Date.now()
    }

    setInterval(function () {overlayImage.src = overlayLink + Date.now()}, 30000);

    startNotify();
})();

function startNotify(){
    if(!START_NOTIFIED){
        Toastify({
            text: `Thanks for contributing to the r/DunderMifflin contribution to r/place`,
            duration: SECOND * 10,
        }).showToast();

        START_NOTIFIED = true;
    }
}