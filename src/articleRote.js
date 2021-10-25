import firstArticle from  './article/nanquan.html'
import secondArticle from  './article/nanquan1.html'
import thirdArticle from  './article/nanquan2.html'
import fourArticle from  './article/nanquan3.html'
import fiveArticle from  './article/nanquan4.html'
export default [
    {
        id:1,
        // title:'如何看待知乎上的男拳',
        article:ree(firstArticle)
    },
    {
       
        id:2,
        // title:'如何看待知乎上的男拳',
        article:ree(secondArticle)

    },
    {
        id:3,
        // title:'如何看待知乎上的男拳',
        article:ree(thirdArticle)

    },
    {
        id:4,
        // title:'如何看待知乎上的男拳',
        article:ree(fourArticle)

    },
    {
        id:5,
        // title:'如何看待知乎上的男拳',
        article:ree(fiveArticle) 

    },
]

function ree(e){
    var oSpan = document.createElement('span');
    oSpan.innerHTML = e;
    return oSpan.querySelector('template').innerHTML;
}



