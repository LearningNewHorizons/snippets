if (document.querySelector("div.side") != null){document.querySelector("div.side").remove();}
if (document.querySelector("div.footer-parent") != null){document.querySelector("div.footer-parent").remove();}
if (document.querySelector("p.debuginfo") != null){document.querySelector("p.debuginfo").remove();}
if (document.querySelector("span.pagename") != null){document.querySelector("span.pagename").remove();}
if (document.querySelector("div.width-clip") != null){document.querySelector("div.width-clip").remove();}
if (typeof table === 'undefined'){table = document.querySelector("#siteTable");}
document.querySelector("#header").style.top = "-20px";
table.querySelectorAll(".clearleft").forEach((e) => e.remove());
if (table.parentElement.querySelector('style') !== null && table.parentElement.querySelector('style').parentElement === table.parentElement){table.parentElement.querySelector('style').remove();}
const style = document.querySelector("style")
style.innerHTML = `#siteTable {
    display: grid; 
    grid-auto-rows: minmax(200px, auto);
    grid-template-columns: 1fr;
}
div.replacement {
    display: flex;
    grid-column: 1/2;
}
div.replacement > .replaced-img {
    margin: 0 5 0 0; 
    width: 204px; 
    height: 199px;
    object-fit: contain;
}
.title-new {
    display: inline-block;
    resize: none;
    border: none;
    outline: none;
    background-color: #cfcfdf;
    padding: 5px;
    height: 40px;
    margin: 0px 0px 0px 2px;
    font-size: 1rem;
    border-radius:6px 0px 0px 6px;
}
.cpy-button {
    display: inline-block;
    width: 50px;
    height: 50px;
    background-color: #00d000;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/0/04/Copy_font_awesome.svg);
    background-size: 40px 40px;
    background-position: 5px 5px;
    background-repeat: no-repeat;
    border-radius:0px 6px 6px 0px;
    cursor: pointer;
}
div.title-shell {
    display: block;
    grid-column: 2/3;
}
div.title-shell > p {
    font-size: 1rem;
}
div.expando{
    display: none;
    position: fixed;
    left: 7vw;
    top: 7vh;
    z-index: 9999;
    width: 86vw;
    height: 86vh;
    align-content: center; 
    background-color: #cccccc;
    object-fit: contain;
}
div.bg-div {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(10, 10, 10, 0.4);
    width: 100dvw;
    height: 100dvh;
    z-index: -1;
    color:#ffffff;
    font-size: 10rem;
    cursor: pointer;
    text-align: right; 
}
div.thing {
    display: grid;
    grid-template-columns: 204px 1fr;
}
`
if (table.querySelectorAll('.midcol') != null){table.querySelectorAll('.midcol').forEach((e)=>e.remove());}
table.querySelectorAll("a.thumbnail").forEach((e) => {
    // e.style = "margin: 0 5 0 0; width: 204px; height: 199px;";
    if (e.querySelector("img") != null){
        e.querySelector("img").removeAttribute("width");
        e.querySelector("img").removeAttribute("height");
        // e.querySelector("img").setAttribute("style", "width: 100%; height: 100%; object-fit: contain;");
    }
});
for (let i=0 ; i < table.children.length-1 ; i++ ){
    correctingTitle(table.children[i], i);
}
function correctingTitle(divItem, index){
    /* check to see if the item has been fixed before */
    if (divItem.querySelector(".title-shell") != null){
        return;
    }
    /* --------------------------------------------------------- */
    /* declaring variables */
    const tempTitle = divItem.querySelector("a.title");
    let tempAuthor;
    if (divItem.querySelector("a.author") != null){
        tempAuthor = divItem.querySelector("a.author").cloneNode("true");
    } else {
        tempAuthor = document.createElement("a");
    }
    let subredditLink;
    if (divItem.querySelector("a.subreddit") != null){
        subredditLink = divItem.querySelector("a.subreddit").cloneNode("true");
    } else {
        subredditLink = document.createElement("a");
    }
    const tempDomain = divItem.querySelector("span.domain").children[0].cloneNode("true");
    const titleNew = document.createElement("textarea");
    const titleNew2 = document.createElement("p");
    /* --------------------------------------------------------- */
    /* making the items to append */
    titleNew.innerText = tempTitle.innerText + " " + tempAuthor.innerText; // new title in text area format
    titleNew.setAttribute("cols","40");
    titleNew.setAttribute("rows","2");
    titleNew.classList.add("title-new");
    const copyWrapper = document.createElement("form");
    const copyButton = document.createElement("div");
    copyButton.classList.add("cpy-button")
    copyWrapper.appendChild(titleNew);
    copyWrapper.appendChild(copyButton);
    titleNew.setAttribute("index",`${index}`);
    copyButton.setAttribute("index",`${index}`);
    if (tempAuthor.innerText == ""){
        titleNew2.innerText = "[DELETED] ";
    } else {
        titleNew2.insertAdjacentElement("afterbegin", tempAuthor);
    }
    titleNew2.innerHTML += "posted to ";
    titleNew2.insertAdjacentElement("beforeend", subredditLink);
    titleNew2.innerHTML += " shared on ";
    titleNew2.insertAdjacentElement("beforeend", tempDomain);
    titleNew2.style.overflowWrap = "";
    
    /* getting the action buttons and replacing them to be put in to output */
    const actionReplaceDiv = document.createElement("div");
    actionReplaceDiv.classList.add("entry");
    const actionReplace = document.createElement("ul");
    actionReplace.classList.add("flat-list");
    actionReplace.classList.add("buttons");
    actionReplace.style = "font-size: 0.8rem;";
    actionReplace.appendChild(divItem.querySelector("li.first").cloneNode("true"));
    actionReplace.appendChild(divItem.querySelector("li.save-button").cloneNode("true"));
    actionReplaceDiv.appendChild(actionReplace);
    
    /* output */
    const output = document.createElement("div");
    output.classList.add("title-shell");
    output.appendChild(copyWrapper);
    output.appendChild(titleNew2);
    output.appendChild(actionReplaceDiv);
    divItem.querySelector("div.entry").insertAdjacentElement("beforebegin",output);
    divItem.querySelector("div.unvoted").style.display = "none"
    /* replacing the thumbnail with expando-button */
    const container = document.createElement("div");
    container.classList.add("replacement");
    const thumbnailLink = divItem.querySelector("a.thumbnail");
    if (thumbnailLink.children[0] != null){
        const tempThumbnail = thumbnailLink.querySelector("img");
        tempThumbnail.classList.add("replaced-img");
        // thumbnailLink.insertAdjacentElement("beforebegin", tempThumbnail);
        container.appendChild(tempThumbnail);
        thumbnailLink.insertAdjacentElement("afterend",container);
        thumbnailLink.style.display = "none";
    } else {
        const tempThumbnail = document.createElement("img");
        tempThumbnail.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/5/55/Broken_image.png");
        tempThumbnail.classList.add("replaced-img");
        // thumbnailLink.insertAdjacentElement("beforebegin", tempThumbnail);
        container.appendChild(tempThumbnail);
        thumbnailLink.insertAdjacentElement("afterend",container);  
        thumbnailLink.style.display = "none";
    }
    if (divItem.querySelector("div.expando-button") != null){
        const tempExpandoButton = divItem.querySelector("div.expando-button");
        tempExpandoButton.style = "position: absolute; margin: 0 5 0 0; width: 204px; height: 199px; background-image: url(https://upload.wikimedia.org/wikipedia/commons/e/e4/Play-button_-_Guard13007_-_white_-_game-icons.svg); background-position: 100px 100px; background-repeat: no-repeat; background-size: 100px 100px; filter: brightness(0.8);";
        // thumbnailLink.insertAdjacentElement("afterend",tempExpandoButton);
        container.appendChild(tempExpandoButton);
    } 
    

    /* configuring the expando div to get the focus*/
    if (divItem.querySelector("div.expando-button") != null){
        const bgDiv = document.createElement("div");
        bgDiv.classList.add("bg-div");
        const expnadoDiv = divItem.querySelector("div.expando");
        const tempoExpo = document.createElement("div");
        tempoExpo.innerHTML = expnadoDiv.dataset.cachedhtml;
        // configutring the image contents
        if (tempoExpo.querySelector("div.media-gallery") == null && tempoExpo.querySelector("img.preview") != null){
            const tempImg = tempoExpo.querySelector("img.preview");
            tempImg.removeAttribute("width");
            tempImg.removeAttribute("height");
            tempImg.style = "object-fit: contain; width: 100%; height: 100%;";
            tempoExpo.innerHTML = "";
            tempoExpo.appendChild(tempImg);
            tempoExpo.appendChild(bgDiv);
            expnadoDiv.dataset.cachedhtml = tempoExpo.innerHTML;
        // configutring the gif contents
        } else if (tempoExpo.querySelector("iframe") != null){
            const tempIf = tempoExpo.querySelector("iframe");
            tempIf.width = "100%";
            tempIf.height = "100%";
            tempoExpo.innerHTML = "";
            tempoExpo.appendChild(tempIf);
            tempoExpo.appendChild(bgDiv);
            expnadoDiv.dataset.cachedhtml = tempoExpo.innerHTML;
        // configutring the video contents
        } else if (tempoExpo.querySelector("div.media-gallery") == null && tempoExpo.querySelector("video.preview") != null){
            const tempVideo = tempoExpo.querySelector("video.preview");
            tempVideo.removeAttribute("width");
            tempVideo.removeAttribute("height");
            tempVideo.style.objectFit = "contain";
            tempVideo.style.width = "100%";
            tempVideo.style.height = "100%";
            tempVideo.controls = "true";
            tempoExpo.innerHTML = "";
            tempoExpo.appendChild(tempVideo);
            tempoExpo.appendChild(bgDiv);
            expnadoDiv.dataset.cachedhtml = tempoExpo.innerHTML;
        // configutring the gallery contents
        // TODO: fix video galleries
        } else if (tempoExpo.querySelector("div.media-gallery") != null){
            if (tempoExpo.querySelector("div.crosspost-preview-content") != null){
                const tempPreview = tempoExpo.querySelector(".media-preview");
                tempoExpo.innerHTML = "";
                tempoExpo.appendChild(tempPreview);
            } 
            if (tempoExpo.querySelector("div.md") != null){tempoExpo.querySelector("div.md").remove();}
            if (tempoExpo.querySelector("div.usertext") != null){tempoExpo.querySelector("div.usertext").remove();}
            tempoExpo.querySelector("div.media-preview").style = "width: 100%; height: 100%;";
            tempoExpo.querySelector("div.media-gallery").style = "width: 100%; height: 100%;";
            tempoExpo.querySelectorAll("div.gallery-preview").forEach((e)=>{
                e.style.fontSize = "0.9rem";
                e.style.position = "relative";
                e.style.width = "100%";
                e.style.height = "100%";
                e.style.top = "0px";
                e.style.left = "0px";
                e.style.maxWidth = "";
            });
            tempoExpo.querySelectorAll("div.media-preview-content").forEach((e)=>{
                e.style = "width: 100%; height: calc(100% - 2rem); object-fit: contain;";
                if (e.querySelector("img.preview") != null){
                    const tempImg = e.querySelector("img.preview")
                    tempImg.removeAttribute("width");
                    tempImg.removeAttribute("height");
                    tempImg.style = "width: 100%; height: 100%; object-fit: contain;";
                    e.innerHTML = "";
                    e.appendChild(tempImg);
                }
            });
            
            tempoExpo.appendChild(bgDiv);
            expnadoDiv.dataset.cachedhtml = tempoExpo.innerHTML;
        // configutring the crosspost contents
        } //else if

        divItem.appendChild(expnadoDiv);
        if (divItem.querySelector("p.parent") != null) { divItem.querySelector("p.parent").remove();}
        if (divItem.querySelector("span.rank") != null) { divItem.querySelector("span.rank").remove();}
        if (divItem.querySelector("a.thumbnail") != null) { divItem.querySelector("a.thumbnail").remove();}
        if (divItem.querySelector("div.child") != null) { divItem.querySelector("div.child").remove();}
        if (divItem.querySelector("div.unvoted") != null) { divItem.querySelector("div.unvoted").remove();}
    }
    
}
table.addEventListener("click",(e)=>{
    if (e.target.className == "cpy-button"){
        const targetIndex = e.target.getAttribute("index");
        const eventAreas = document.querySelectorAll("textarea");
        eventAreas[targetIndex].select();
        document.execCommand("copy");
    } else if (e.target.className == "bg-div"){
        document.querySelector("div.expanded").click();
    }
});
