const list = document.body.getElementsByClassName("highlight");

const whiteListFileName = ["Dockerfile"]

for(i=0; i <= list.length-1; i++){
  const code = list[i].firstElementChild.firstElementChild
  if(!code) continue
  const codeName = whiteListFileName.includes(code.dataset.lang) ? code.dataset.lang : code.className.split(":")[1]

  if(codeName) {
    const div = document.createElement('div');
    div.textContent = codeName;
    div.classList.add('code-name');
    code.parentNode.insertBefore(div, code);
  }
}