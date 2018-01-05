if(!window.jQuery){
    throw Error(' dw.js 依赖于 jQuery.js ');
}

jQuery.fn.extend({
    dropdown:function(){
        this.on('click',function(){
            $('.dropdown-menu').slideToggle();
        })
    }
})