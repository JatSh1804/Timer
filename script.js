var btnList= document.querySelectorAll(".btn")
for (let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener("click",function(){
        console.log(this.classList[2])
        switch (this.classList[2]) {
            case "Start":
                
                break;
        
            default:
                break;
        }
    })
}
function start() {
    
}