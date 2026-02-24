var topbarBegin = '<div id="topBar"></div>'
var topbarList = new Array()
topbarList.push(["<b>FE Wiki</b>","/"])
topbarList.push(["About","/about"])
topbarList.push(["Rarities","/rarities"])

window.addEventListener("load", function() {
  
  document.body.innerHTML = topbarBegin + document.body.innerHTML
  for (var index = 0; index < topbarList.length; index++) {
    var value = topbarList[index]
    var extra = ""
    if (window.location.pathname.replace(/\/$/, "") == value[1].replace(/\/$/, "")) {
      extra = "color:#000000;text-decoration: underline;"
    }
    document.getElementById("topBar").innerHTML += `<a style="${extra}" href="${value[1]}">${value[0]}</a> `
  }
})

 document.body.innerHTML += `<small>If you'd like to add pages or make changes the wiki, go to <a href="https://github.com/fe-wiki/fe-wiki.github.io">the github repository page</a> and start contributing.</small>`
