function copyToClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("result"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    

    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copy to clipboard ' + msg);


    window.getSelection().removeAllRanges();
}
