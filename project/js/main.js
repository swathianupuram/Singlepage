window.onhashchange = fnHasChange;

function fnLoad() {
    alert('page loaded');
    fnGetMenu();
    
    fnHasChange();
}

function fnHasChange(oEv) {
    var sNewToken = location.hash

    switch (sNewToken) {
        case '#home':
        fnGetHome();
        break;
        case '#humanface':
            fnGetFace();
            break;
        case '#textblur':
            fnGetTextblur();
            break;
        case '#firstlinecolor':
            fnGetFirstlinecolor();
            break;
        case '#firstandlastcolor':
            fnGetFirstandlastcolor();
            break;
        case '#columnformat':
            fnGetColumnformat();
            break;
        case '#footer':
            fnGetFooter();
            break;
        case '#circularimage':
            fnGetCircularimage();
            break;
        case '#borderimage':
            fnGetBorderimage();
            break;
        case '#hoverimage':
            fnGetHoverimage();
            break;
        case '#3boxes':
            fnGet3boxes();
            break;
        case '#creatingtriangle':
            fnGetCreatingtriangle();
            break;
        case '#emptyelement':
            fnGetEmptyelement();
            break;
        case '#list':
            fnGetList();
            break;
            case '#button':
            fnGetButton();
            break;
             case '#tag':
            fnGetTag();
            break;
        default:

            break;
    }

}
