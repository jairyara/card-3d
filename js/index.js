document.addEventListener('DOMContentLoaded', () => {
    let cards = document.querySelectorAll('.trans-z');

    let renderRotate, clearRotate;

    const shadowBlur = 20,
        shadowSpread = 2,
        shadowXOffset = 0,
        shadowYOffset = 0;

    renderRotate = function(event){
        let contentEl = this.children[0];
        let coorX = event.offsetX;
        let coorY = event.offsetY;
        let w = this.offsetWidth;
        let h = this.offsetHeight;


        let posX = ~((w/2-coorX)*(80/w)) /10;
        let posY = ~~((h/2-coorY)*(80/h)) /10;

        // used for transition on mouse leave
        if(this.children[0].classList.contains("onLeave")){
            contentEl.classList.remove("onLeave");
        }

        contentEl.style.transform = "rotateX("+posY+"deg) rotateY("+posX+"deg)";

    };

    clearRotate = function(){
        let contentEl = this.children[0];
        contentEl.style.transform = "none";
        contentEl.classList.add("onLeave");

    };

    for(let i=0;i<cards.length;i++){
        cards[i].addEventListener("mousemove", renderRotate);
        cards[i].addEventListener("mouseleave", clearRotate);
    }
});