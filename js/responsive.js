/*
*/

define(function(require, exports, module) {
    function addCss(path) {
        /* Adds <link/> tag to document head with given stylesheet path
        */
        let link = window.document.createElement("link");
        link.setAttribute("type", "text/css");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", path);
        window.document.head.appendChild(link);
    }

    function removeCss(path) {
        /* Removes <link/> tag from document head with given stylesheet path
        */
        let linki = window.document.head.querySelectorAll("link");
        let n = linki.length;
        for (let i = 0; i < n; i++) {
            let link = linki[i];
            if (link.getAttribute("href") == path) {
                link.parentElement.removeChild(link);
                n--;
            }
        }
    }

    function responsive(threshold_px=512, commonPath="css/common.css", compactPath="css/compact.css", standardPath="css/standard.css") {
        /* When invoked, attaches:
           1. A common .CSS file to the document head
           2. Determines which initial display mode will be used
           3. Event listeners for toggling between standard and compact stylesheets

           Display mode is determined by value of window.innerWidth, compared
           against the given threshold value.
        */
        addCss(commonPath);
        if (threshold_px < window.innerWidth) {
            addCss(standardPath);
        } else {
            addCss(compactPath);
        }
        window.addEventListener("resize", function() {
            if (threshold_px < window.innerWidth) {
                addCss(standardPath);
                removeCss(compactPath);
            } else {
                addCss(compactPath);
                removeCss(standardPath);
            }    
        });
    }

    return responsive;
});
