$(document).ready(function(){
    /* optmize overlay height */
    $('header .overlay').height($('img[src="images/bg.png"]').height());
    // on resize
    $(window).resize(function(){
        var imgHeight = $('img[src="images/bg.png"]').height();
        $('header .overlay').height(imgHeight);
    });
    
    /* @animation api made by Habib_Gamal */
    function isInRange(position,end){
        return position <= end ;
    }
    
    var elements_up = [...document.getElementsByClassName('person'),...document.getElementsByClassName('project'),...document.getElementsByClassName('feat')];

    function animationElements(rangeEnd,e,elementsClass,classToAdd,duration,delay){
        if( isInRange( e.offsetTop,rangeEnd ) && !e.classList.contains(classToAdd) && e.classList.contains(elementsClass) ){
            e.classList.add(classToAdd);
            e.style.transitionDuration = duration;
            e.style.transitionDelay = delay;
        }
    }
    $(window).scroll(function(){
        var start       = this.scrollY ,
        rangeEnd    = ( this.innerHeight / 1.20 ) + start;
    
        elements_up.forEach(function(element,i){
            animationElements(rangeEnd,element,'person','view-up',Math.random()+1+'s',.5*i+'s');
            animationElements(rangeEnd,element,'project','view-opacity',Math.random()+1+'s',.09*i+'s');
            animationElements(rangeEnd,element,'feat','veiw-to-right',Math.random()+1+'s',.03*i+'s');
        });
    });
    elements_up.forEach(function(element,i){
        animationElements(( this.innerHeight  ) + this.scrollY ,element,'person','view-up',Math.random()+1+'s',.5*i+'s');
        animationElements(( this.innerHeight  ) + this.scrollY ,element,'project','view-opacity',Math.random()+1+'s',.09*i+'s');
        animationElements(( this.innerHeight  ) + this.scrollY ,element,'feat','veiw-to-right',Math.random()+1+'s',.03*i+'s');
    });
});