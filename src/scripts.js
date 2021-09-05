
export const checkCookiesEnabled = function() {
    var myCookie = document.cookie;
    var valueString = "";
    var importantPart = myCookie.indexOf("okayedCookies");
    if (importantPart != -1) {
        importantPart += 14;//length of "okayedCookies" + "="
        if (myCookie.indexOf(";",importantPart) != -1) {
            valueString = myCookie.substring(importantPart,myCookie.indexOf(";",importantPart));
        } else {
            valueString = myCookie.substring(importantPart,myCookie.length);
        }
    } else {
        valueString = "false";
    }
    return valueString;
}