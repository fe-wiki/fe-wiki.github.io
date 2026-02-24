var topbarBegin = '<div id="topBar"></div>'
var topbarList = new Array()
topbarList.push(["<b>Home</b>","/"])

window.addEventListener("load", function() {
  document.body.innerHTML = topbarBegin + document.body.innerHTML
  for (var index = 0; index < topbarList.length; index++) {
    var value = topbarList[index]
    document.getElementById("topBar").innerHTML += `<a href="${value[1]}">${value[2]}</a>`
  }
})
