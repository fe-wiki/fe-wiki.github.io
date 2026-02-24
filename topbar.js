


var topbarBegin = '<div id="topBar" style="width:calc(100% - 200px)"></div>'
var topbarList = new Array()
topbarList.push(["<b>FE Wiki</b>","/"])
topbarList.push(["Rolling","/rolling"])
topbarList.push(["Dimensions","/dimensions"])
topbarList.push(["<font color='#aaffaa'>Play FE</font>","https://www.roblox.com/games/15296932900"])

window.addEventListener("load", function() {

   document.body.innerHTML += `<button style="display:none;position:fixed;width:100%;height:100%;top:0px;right:0px;border:none;outline:none;background-color:#00000077;" id="bg1"></button>
   <div style="padding:12px;position:fixed;width:50%;height:100%;top:0px;right:0px;border:none;outline:none;background-color:#000000;" id="bg2">
    <button id="cancelGo" style="border:none;outline:none;background-color:#444444;border-radius:8px;color:#ffaaaa">Exit</button>
   </div>
   <input id="search" placeholder="Search" type="string" style="border:none;outline:none;border-radius:8px;height:20px;background-color:#444444;color:#ffffff;position:absolute;right:46px;top:12px;font-family:'Noto Sans';max-width:50%;padding-left:4px;"><button style="border:none;outline:none;border-radius:8px;height:20px;width:30px;background-color:#444444;color:#ffffff;position:absolute;right:12px;top:12px;font-family:'Noto Sans';max-width:50%">Go</button>`
   document.getElementById("go").addEventListener("click", function() {
       document.getElementById("bg1").style.display = "block"
      document.getElementById("bg2").style.display = "block"
        document.getElementById("go").style.position = "fixed"
      document.getElementById("bg2").style.display = "fixed"
   })

    document.getElementById("cancelGo").addEventListener("click", function() {
       document.getElementById("bg1").style.display = "none"
      document.getElementById("bg2").style.display = "none"
        document.getElementById("go").style.position = "absolute"
      document.getElementById("bg2").style.display = "absolute"
   })

   if (window.location.pathname.replace(/\/$/, "").split("/").length > 2) {
      var arr = window.location.pathname.replace(/\/$/, "").split("/")
      arr.pop()
      var txtarr = arr.join("/")
      document.body.innerHTML = `<a href="${txtarr}">« ${txtarr}</a>`+ document.body.innerHTML
    }
  document.body.innerHTML = topbarBegin + document.body.innerHTML
  for (var index = 0; index < topbarList.length; index++) {
    var value = topbarList[index]
    var extra = ""
    var emd = ""
    if (index > 0) {
      emd = "• "
    }
    if (window.location.pathname.replace(/\/$/, "") == value[1].replace(/\/$/, "")) {
      extra = "color:#ffffff;text-decoration: underline;"
    }
    document.getElementById("topBar").innerHTML += `${emd}<a style="${extra}" href="${value[1]}">${value[0]}</a> `
  }
   document.body.innerHTML += `<br><small>If you'd like to add pages or make changes the wiki, go to <a href="https://github.com/fe-wiki/fe-wiki.github.io">the github repository page</a> and start contributing.</small>`
})

