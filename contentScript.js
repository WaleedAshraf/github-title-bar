
var regex = /(https:\/\/github.com\/).*?(issues).*?(\d)/
if (regex.test(window.location.href)) {
  window.onload = function () {

    var title = document.getElementsByClassName('js-issue-title')[0].innerHTML
    var des = document.getElementsByTagName('table')[0].innerHTML;

    document.body.innerHTML += '<div class="github-title-main-div" style="display: none"> <div class="github-title-title"> <div class="github-title-title-text">' + title + '</div> <svg id="github-title-chevron-down" class="octicon octicon-chevron-down" viewBox="0 0 10 16" version="1.1" aria-hidden="true" width="20"> <path fill-rule="evenodd" d="M5 11L0 6l1.5-1.5L5 8.25 8.5 4.5 10 6l-5 5z"></path> </svg> <svg id="github-title-chevron-up" style="display: none" class="octicon octicon-chevron-up" viewBox="0 0 10 16" version="1.1" width="20" aria-hidden="true"> <path fill-rule="evenodd" d="M10 10l-1.5 1.5L5 7.75 1.5 11.5 0 10l5-5 5 5z"></path> </svg> </div> <div class="github-title-des"> <div class="github-title-des-text markdown-body"> ' + des + ' </div> </div> </div>';

    document.getElementById('github-title-chevron-down').onclick = function () {
      document.getElementById("github-title-chevron-down").style.display = "none";
      document.getElementById("github-title-chevron-up").style.display = "inline-block";
      document.getElementsByClassName("github-title-des")[0].style.display = "block";
    }

    document.getElementById('github-title-chevron-up').onclick = function () {
      document.getElementById("github-title-chevron-up").style.display = "none";
      document.getElementById("github-title-chevron-down").style.display = "inline-block";
      document.getElementsByClassName("github-title-des")[0].style.display = "none";
    }

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      document.getElementsByClassName('github-title-main-div')[0].style.display = "block";
    }

    window.onscroll = function () {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementsByClassName('github-title-main-div')[0].style.display = "block";
      } else {
        document.getElementsByClassName('github-title-main-div')[0].style.display = "none";
      }
    }
  }
}

/*
<div class="github-title-main-div" style="display: none">
  <div class="github-title-title">
    <div class="github-title-title-text">' + title + '</div>
    <svg id="github-title-chevron-down" class="octicon octicon-chevron-down" viewBox="0 0 10 16" version="1.1" aria-hidden="true" width="20">
      <path fill-rule="evenodd" d="M5 11L0 6l1.5-1.5L5 8.25 8.5 4.5 10 6l-5 5z"></path>
    </svg>
    <svg id="github-title-chevron-up" style="display: none" class="octicon octicon-chevron-up" viewBox="0 0 10 16" version="1.1" width="20" aria-hidden="true">
      <path fill-rule="evenodd" d="M10 10l-1.5 1.5L5 7.75 1.5 11.5 0 10l5-5 5 5z"></path>
    </svg>
  </div>
  <div class="github-title-des">
    <div class="github-title-des-text markdown-body">
    ' + des + '
    </div>
  </div>
</div>
*/