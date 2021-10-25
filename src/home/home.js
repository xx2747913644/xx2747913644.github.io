import Ani from '../../assets/js/Ani.js';

var ani = new Ani({
    targets:[
        {
            el:document.querySelector('.box1'),
            animationClassName:'change'
        },
        {
            el:document.querySelector('.box2'),
            animationClassName:'change'
        },
        {
            el:document.querySelector('.box3'),
            animationClassName:'change'
        },
        {
            el:document.querySelector('.box4'),
            animationClassName:'change'
        },
        
    ],
    count:4
   
   
})