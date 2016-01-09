function fnShowList() {
    location.hash = "list";
}

function fnGetList() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/list/view/list.html');

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
