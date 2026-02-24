var topbarBegin = '<div id="topBar"></div>'
var topbarList = new Array()
topbarList.push(["<b>FE Wiki</b>","/"])
topbarList.push(["About","/about"])

window.addEventListener("load", function() {
  var fullURL = window.location.href;
  var fileName = fullURL.split('?')[0].split('#')[0];
  
  document.body.innerHTML = topbarBegin + document.body.innerHTML
  for (var index = 0; index < topbarList.length; index++) {
    var value = topbarList[index]
    var extra = ""
    if (fileName == value[1]) {
      extra = "color:#6666ff"
    }
    document.getElementById("topBar").innerHTML += `<a style="${extra}" href="${value[1]}">${value[0]}</a> `
  }
})
