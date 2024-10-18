function nameCorrector() {  
    const bgTDiv = document.createElement("div")
    bgTDiv.innerHTML = `<div class="exit" style="position: fixed; top: 0; left: 0; background-color: rgba(10, 10, 10, 0.4); width: 100vw; height: 100vh; z-index: -1; color:#ffffff; font-size: 10rem; cursor: pointer; text-align: right; ">
                            <b class="exit">X</b>
                            <div class="custombefore" style="position: fixed; top: 50%; left: 4px; transform: translateY(-50%); background-color: rgba(255, 255, 0, 0.8); width: 100px; height: 100px; color:#808000; font-size: 4rem; cursor: pointer; text-align: center; text-justify: center; border-radius: 6px;"><</div>
                            <div class="customafter" style="position: fixed; top: 50%; right: 4px; transform: translateY(-50%); background-color: rgba(255, 255, 0, 0.8); width: 100px; height: 100px; color:#808000; font-size: 4rem; cursor: pointer; text-align: center; text-justify: center; border-radius: 6px;">></div>
                        </div>`
    const bgDiv = bgTDiv.childNodes[0]
    const table = document.getElementById("siteTable")
    const tableArray = table.querySelectorAll("div.thing")
    for (let i=0 ; i < tableArray.length ; i++) {
        let tempAutohor = tableArray[i].querySelector(".tagline").childNodes[3].innerText
        if (tempAutohor === "[deleted]"){
            tempAutohor = ""
        }
        let tempTitle = tableArray[i].querySelector(".title").childNodes[0].innerText
        let lastTitle = tempTitle +" "+ tempAutohor
        tableArray[i].querySelector(".title").innerHTML = `<textarea readonly cols="80" rows="2" style="resize: none; background-color: #e0e0e0; color: #080808; border: 0; padding: 5px; outline: 0;" >`+lastTitle.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, "")+"</textarea>";
        tableArray[i].querySelector(".tagline").remove()
        const listogram = tableArray[i].querySelectorAll("li")
        for (let j = 0 ; j < listogram.length ; j++ ){
            if (listogram[j].className != `first` && listogram[j].className != `link-unsave-button save-button` && listogram[j].className != `link-save-button save-button login-required`){
                listogram[j].remove()
            }
        }
        let expandoItem = tableArray[i].querySelector("div.expando")
        if (expandoItem != null) {
            expandoItem.style = "display: none; position: fixed; left: 7vw; top: 7vh; z-index: 9999; width: 86vw; height: 86vh; align-content: center; background-color: #cccccc; object-fit: contain;"
            const temp = expandoItem.dataset.cachedhtml
            const tempElement = document.createElement("div")
            tempElement.innerHTML = temp
            
            if (tempElement.querySelector("iframe") != null){
                const ifTemp = tempElement.childNodes[1]
                ifTemp.width = "100%"
                ifTemp.height = "100%"
                const tempDiv = document.createElement("div")
                tempDiv.appendChild(bgDiv)
                tempDiv.appendChild(ifTemp)
                tempDiv.innerHTML+= `<textarea readonly cols="80" rows="1" style="position: fixed; bottom: 10px; left: 50%; transform: translateX(-50%); font-size: 1.1rem; resize: none; background-color: #e0e0e0; color: #080808; border: 0; padding: 5px; outline: 0;" >`+lastTitle.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, "")+"</textarea>"
                expandoItem.dataset.cachedhtml = tempDiv.innerHTML
            }
            if (tempElement.querySelector("div.media-gallery") == null && tempElement.querySelector("img.preview") != null){
                const tempImg = tempElement.querySelector("img.preview")
                tempImg.removeAttribute("width")
                tempImg.removeAttribute("height")
                tempImg.style.objectFit = "contain"
                tempImg.style.width = "100%"
                tempImg.style.height = "100%"
                const tempDiv = document.createElement("div")
                tempDiv.appendChild(bgDiv)
                tempDiv.appendChild(tempImg)
                tempDiv.innerHTML += `<textarea readonly cols="80" rows="1" style="position: fixed; bottom: 10px; left: 50%; transform: translateX(-50%); font-size: 1.1rem; resize: none; background-color: #e0e0e0; color: #080808; border: 0; padding: 5px; outline: 0;" >`+lastTitle.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, "")+"</textarea>"
                expandoItem.dataset.cachedhtml = tempDiv.innerHTML
            }
            if (tempElement.querySelector("div.media-gallery") == null && tempElement.querySelector("video.preview") != null){
                const tempVid = tempElement.querySelector("video.preview")
                tempVid.removeAttribute("width")
                tempVid.removeAttribute("height")
                tempVid.style.objectFit = "contain"
                tempVid.style.width = "100%"
                tempVid.style.height = "100%"
                tempVid.controls = "true"
                const tempDiv = document.createElement("div")
                tempDiv.appendChild(bgDiv)
                tempDiv.appendChild(tempVid)
                tempDiv.innerHTML += `<textarea readonly cols="80" rows="1" style="position: fixed; bottom: 10px; left: 50%; transform: translateX(-50%); font-size: 1.1rem; resize: none; background-color: #e0e0e0; color: #080808; border: 0; padding: 5px; outline: 0;" >`+lastTitle.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, "")+"</textarea>"
                expandoItem.dataset.cachedhtml = tempDiv.innerHTML
            }
        }
    }
    document.querySelector("div.side").style = "display: none"
}
document.querySelector("style").innerHTML += "body::-webkit-scrollbar { display: none; }"
nameCorrector()
document.addEventListener("click", function(e){
    if (e.target.className == "exit") {
       document.querySelector("div.expanded").click()
    } else if (e.target.className == "customafter") {
        let listButtons = document.querySelectorAll("div.expando-button")
        for (let i=0;i<listButtons.length;i++){
            if (listButtons[i].className.includes("expanded") && i!=listButtons.length){
                listButtons[i].click()
                listButtons[i+1].click()
                break
            }
        }
    } else if (e.target.className == "custombefore") {
        let listButtons = document.querySelectorAll("div.expando-button")
        for (let i=0;i<listButtons.length;i++){
            if (listButtons[i].className.includes("expanded") && i!=0){
                listButtons[i].click()
                listButtons[i-1].click()
                break
            } else if (listButtons[i].className.includes("expanded") && i==0){
                listButtons[i].click()
                break
            }
        }
    }
})
