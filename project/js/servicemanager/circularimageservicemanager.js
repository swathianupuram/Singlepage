function fnShowCircularimage() {
    location.hash = "circularimage";
}

function fnGetCircularimage() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/circularimage/view/circularimage.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('commonID').innerHTML = oEv.currentTarget.responseText;
            }
        }
        
    };



    oXhr.send();
}
