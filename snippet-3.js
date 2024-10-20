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
    display: flex;
    flex-flow: column;
    margin-left: 1rem;
    justify-content: center;
    grid-column: 2/3;
}
div.title-shell > p {
    font-size: 1rem;
}
div.expando{
    display: none;
    position: fixed;
    left: 5dvw;
    top: 5dvh;
    z-index: 9999;
    width: 90dvw;
    height: 90dvh;
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
div.bg-prev{
    position: fixed; 
    display: flex;
    justify-content: center;
    align-items: center;
    left: calc(14dvh - 100px); 
    top: 86dvh; 
    // transform: translateY(-50%); 
    background-color: rgba(255, 255, 0, 0.8); 
    width: 100px; 
    height: 100px; 
    color:#808000; 
    font-size: 2rem; 
    cursor: pointer; 
    text-align: center; 
    text-justify: center; 
    border-radius: 6px;
    z-index: 5;
}
div.bg-next{
    position: fixed; 
    display: flex;
    justify-content: center;
    align-items: center;
    top: 86dvh; 
    // transform: translateY(-50%); 
    background-color: rgba(255, 255, 0, 0.8); 
    width: 100px; 
    height: 100px; 
    color:#808000; 
    font-size: 2rem; 
    cursor: pointer; 
    text-align: center; 
    text-justify: center; 
    border-radius: 6px;
    right: calc(14dvh - 100px); 
    z-index: 5;
}
div.thing {
    display: grid;
    grid-template-columns: 204px 1fr;
}

.table-prev-page-link, .table-next-page-link{
    color: white;
    background-color: black;
    font-size: 2rem;
    padding: 20px;
    border-radius: 1rem;
    width: 10rem;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.table-link-buttons{
    display: inline-block;
    margin-right: 10%;
}
.expando-button{
    position: absolute;
    width: 204px;
    height: 199px;
    background-size: 100px 100px;
    filter: drop-shadow(0px 0px 5px rgba(0, 40, 100, 1));
}

.bg-close, .bg-fst{
    position: fixed;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    z-index: 5;
}
.bg-close{
    top: 10px;
    left: 10px;
    background-color: rgba(255, 0, 0, 0.9);
}
.bg-fst{
    top: 10px;
    left: 100px;
    background-color: rgba(0, 255, 0, 0.9);
}
`;
if (table.querySelectorAll('.midcol') != null){table.querySelectorAll('.midcol').forEach((e)=>e.remove());}
table.querySelectorAll("a.thumbnail").forEach((e) => {
    if (e.querySelector("img") != null){
        e.querySelector("img").removeAttribute("width");
        e.querySelector("img").removeAttribute("height");
    }
});
for (let i=0 ; i < table.children.length-1 ; i++ ){
    correctingTitle(table.children[i], i);
}
if (table.querySelector(".nav-buttons")!=null){
    let tablePrevPageLink = document.createElement("a");
    let tableNextPageLink = document.createElement("a");
    const tempNavigation = table.querySelector(".nav-buttons");
    if (table.querySelector(".next-button") != null){
        const tempSpan = table.querySelector(".next-button");
        tableNextPageLink = tempSpan.querySelector("a").cloneNode("true");
        tableNextPageLink.classList.add("table-next-page-link");
    } else {
        tableNextPageLink = document.createElement("a");
    }

    if (table.querySelector(".prev-button") != null ){
        const tempSpan = table.querySelector(".prev-button");
        tablePrevPageLink = tempSpan.querySelector("a").cloneNode("true");
        tablePrevPageLink.classList.add("table-prev-page-link");
    } else {
        tablePrevPageLink = document.createElement("a");
    }
    const tableLinkButtons = document.createElement("span");
    tableLinkButtons.classList.add("table-link-buttons");
    const tableLinkButtons2 = tableLinkButtons.cloneNode("true");
    tableLinkButtons.appendChild(tablePrevPageLink);
    tableLinkButtons2.appendChild(tableNextPageLink);
    tempNavigation.innerHTML = "";
    tempNavigation.appendChild(tableLinkButtons);
    tempNavigation.appendChild(tableLinkButtons2);
}
function correctingTitle(divItem, index){
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
    if (divItem.querySelector("a.comments").getAttribute("href") != null ){divItem.querySelector("a.comments").setAttribute("href", divItem.querySelector("a.comments").getAttribute("href").replace("https://old.reddit.com","https://i.reddit.com"));}
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
        tempExpandoButton.style = "background-image: url(https://upload.wikimedia.org/wikipedia/commons/e/e4/Play-button_-_Guard13007_-_white_-_game-icons.svg); background-position: 100px 100px; background-repeat: no-repeat;";
        // thumbnailLink.insertAdjacentElement("afterend",tempExpandoButton);
        container.appendChild(tempExpandoButton);
    } 
    /* configuring the expando div to get the focus*/
    if (divItem.querySelector("div.expando-button") != null){
        const bgDiv = document.createElement("div");
        // bgDiv.innerText= "X"
        bgDiv.classList.add("bg-div");
        // -----------------------------------------------
        const bgControls = document.createElement("div");
        const bgControlsFullScreenToggle = document.createElement("div");
        bgControlsFullScreenToggle.classList.add("bg-fst");
        const bgControlsClose = document.createElement("div");
        bgControlsClose.classList.add("bg-close");
        const bgControlsNextPost = document.createElement("div");
        bgControlsNextPost.classList.add("bg-next");
        bgControlsNextPost.innerHTML=`>`;
        const bgControlsPreviousPost = document.createElement("div");
        bgControlsPreviousPost.classList.add("bg-prev");
        bgControlsPreviousPost.innerHTML=`<`;
        bgControls.appendChild(bgControlsFullScreenToggle);
        bgControls.appendChild(bgControlsClose);
        bgControls.appendChild(bgControlsNextPost);
        bgControls.appendChild(bgControlsPreviousPost);
        // -------------------------------------------

        // bgDiv.appendChild(customNext);
        // bgDiv.appendChild(customPrev);
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
            tempoExpo.appendChild(bgControls);
            tempoExpo.appendChild(tempImg);
            tempoExpo.appendChild(bgDiv);
            expnadoDiv.dataset.cachedhtml = tempoExpo.innerHTML;
        // configutring the gif contents
        } else if (tempoExpo.querySelector("iframe") != null){
            const tempIf = tempoExpo.querySelector("iframe");
            tempIf.width = "100%";
            tempIf.height = "100%";
            tempoExpo.innerHTML = "";
            tempoExpo.appendChild(bgControls);
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
            tempoExpo.appendChild(bgControls);
            tempoExpo.appendChild(tempVideo);
            tempoExpo.appendChild(bgDiv);
            expnadoDiv.dataset.cachedhtml = tempoExpo.innerHTML;
        // configutring the gallery contents
        // TODO: test video galleries
        } else if (tempoExpo.querySelector("div.media-gallery") != null){
            if (tempoExpo.querySelector("div.crosspost-preview-content") != null){
                const tempPreview = tempoExpo.querySelector(".media-preview");
                tempoExpo.innerHTML = "";
                tempoExpo.appendChild(bgControls);
                tempoExpo.appendChild(tempPreview);
            } 
            if (tempoExpo.querySelector("div.md") != null){tempoExpo.querySelector("div.md").remove();}
            if (tempoExpo.querySelector("div.usertext") != null){tempoExpo.querySelector("div.usertext").remove();}
            tempoExpo.querySelector("div.media-preview").style = "width: 100%; height: 100%; container-type: size;";
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
                if (e.querySelector("img.preview") != null){
                    const tempImg = e.querySelector("img.preview")
                    tempImg.removeAttribute("width");
                    tempImg.removeAttribute("height");
                    tempImg.style = "width: 100cqi; height: calc(100cqb - 2rem); object-fit: contain;";
                    e.innerHTML = "";
                    e.appendChild(tempImg);
                }
            });
            tempoExpo.querySelector("div.gallery-tiles").style = "display: flex; flex-wrap: wrap;";
            tempoExpo.querySelector("div.gallery-tiles").querySelectorAll("div.gallery-tile").forEach((e)=>{e.style = "";});
            tempoExpo.querySelector("div.gallery-tiles").querySelectorAll("img").forEach((e)=>{
                e.style = "width: 305px";
            });
            tempoExpo.prepend(bgControls);
            tempoExpo.appendChild(bgDiv);
            expnadoDiv.dataset.cachedhtml = tempoExpo.innerHTML;
        } 
        divItem.appendChild(expnadoDiv);
        if (divItem.querySelector("p.parent") != null) { divItem.querySelector("p.parent").remove();}
        if (divItem.querySelector("span.rank") != null) { divItem.querySelector("span.rank").remove();}
        if (divItem.querySelector("a.thumbnail") != null) { divItem.querySelector("a.thumbnail").remove();}
        if (divItem.querySelector("div.child") != null) { divItem.querySelector("div.child").remove();}
        if (divItem.querySelector("div.unvoted") != null) { divItem.querySelector("div.unvoted").remove();}

    }
}
function goBackToFullScreenF(){
    if (document.fullscreenElement != null){
        document.exitFullscreen();
    }
    setTimeout(()=>{document.querySelector("div.expanded").parentElement.parentElement.querySelector("div.expando").requestFullscreen()} , 100);
}

table.addEventListener("click",(e)=>{
    if (e.target.className == "cpy-button"){
        const targetIndex = e.target.getAttribute("index");
        const eventAreas = document.querySelectorAll("textarea");
        eventAreas[targetIndex].select();
        document.execCommand("copy");
    } else if (e.target.className == "bg-div" || e.target.className == "bg-close"){
        document.querySelector("div.expanded").click();
        if (document.fullscreenElement != null){
            document.exitFullscreen();
        }
    } else if (e.target.className == "bg-next") {
		const goBackToFullScreen = false;
        let listButtons = document.querySelectorAll("div.expando-button");
		for (let i=0;i<listButtons.length;i++){
			if (listButtons[i].className.includes("expanded") && i!=listButtons.length){
				listButtons[i].click();
				listButtons[i+1].click();
				break;
			}
		}
        if (document.fullscreenElement != null){
            goBackToFullScreenF();
        }
	} else if (e.target.className == "bg-prev") {
		const goBackToFullScreen = false;
        let listButtons = document.querySelectorAll("div.expando-button");
		for (let i=0;i<listButtons.length;i++){
			if (listButtons[i].className.includes("expanded") && i!=0){
				listButtons[i].click();
				listButtons[i-1].click();
				break;
			} else if (listButtons[i].className.includes("expanded") && i==0){
				listButtons[i].click();
				break;
			}
            
		}
        if (document.fullscreenElement != null){
            goBackToFullScreenF();
        }
	} else if (e.target.className == "gallery-nav-back gallery-navigation"){
        console.log("nav-back pushed");
        setTimeout(()=>{
            document.querySelector("div.media-gallery").querySelector("div.gallery-tiles").style = "display: flex; flex-wrap: wrap;";
        }, 100);
    } else if(e.target.className == "bg-fst"){
        if (document.fullscreenElement != null){
            document.exitFullscreen();
        }
        document.querySelector("div.expanded").parentElement.parentElement.querySelector("div.expando").requestFullscreen();
    }
});
