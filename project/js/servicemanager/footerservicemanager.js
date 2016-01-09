function fnShowFooter() {
    location.hash = "footer";
}

function fnGetFooter() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/footer/view/footer.html');

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
