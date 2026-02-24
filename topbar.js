var topbarBegin = '<div id="topBar"></div>'
var topbarList = new Array()
topbarList.push(["<b>FE Wiki</b>","/"])
topbarList.push(["Rolling","/rolling"])
topbarList.push(["Dimensions","/dimensions"])
topbarList.push(["<font color='#aaffaa'>Play FE</font>","https://www.roblox.com/games/15296932900"])

window.addEventListener("load", function() {
  
  document.body.innerHTML = topbarBegin + document.body.innerHTML
  for (var index = 0; index < topbarList.length; index++) {
    var value = topbarList[index]
    var extra = ""
    if (window.location.pathname.replace(/\/$/, "") == value[1].replace(/\/$/, "")) {
      extra = "color:#ffffff;text-decoration: underline;"
    }
    document.getElementById("topBar").innerHTML += `<a style="${extra}" href="${value[1]}">${value[0]}</a> `
  }
   document.body.innerHTML += `<br><small>If you'd like to add pages or make changes the wiki, go to <a href="https://github.com/fe-wiki/fe-wiki.github.io">the github repository page</a> and start contributing.</small>`
})

