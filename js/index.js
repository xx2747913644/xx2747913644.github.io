document.getElementsByClassName('submit')[0].onclick=function(){
        document.getElementById('wrap').setAttribute('class','sub')
    };



class Ani{
    constructor(props){
        this.targets = props.targets;
        this.count = props.count;
        this.newArr=this.targets.slice();
        this.animation(this.newArr)
    }

    animation(arr){
        let _this= this;
        if(arr.length){
            var target = arr.shift();
            target.el.classList.add(target.animationClassName);
            let addEvent = function(e){
                this.classList.remove(target.animationClassName)
                this.removeEventListener('animationend',addEvent)
                _this.animation(arr);
            }
            target.el.addEventListener('animationend',addEvent)
        }else{
            this.newArr=this.targets.slice();
            if(this.count>1){
                this.count--;
                this.animation(this.newArr);
            }
            return;
        }       
    }
    }

// class Ani {
//     constructor(e) {
//         this.targets = e.targets;
//         this.count = e.count;
//         this.newArr = this.targets.slice();
//         this.exec(this.newArr);
//     }
//     exec(arr) {
//         let _this = this;
//         if (arr.length > 0) {
//             let target = arr.shift();
//             target.el.classList.add(target.animationClassName);
//             let addEvent = function(e) {
//                 this.classList.remove(target.animationClassName);
//                 this.removeEventListener('animationend', addEvent)
//                 _this.exec(arr);
//             }
//             target.el.addEventListener('animationend', addEvent);
//         } else {
//             this.newArr = this.targets.slice();
//             if (this.count > 1) {
//                 this.count--;
//                 this.exec(this.newArr);
//             }
//         }
//     }
// }

var ani= new Ani({
    targets:[
        {
            el:document.querySelector('.div-out'),
            animationClassName:'div-change'
        },
        {
            el:document.querySelector('.div-p'),
            animationClassName:'change'
        },
        {
            el:document.querySelector('.main-div'),
            animationClassName:'main-change'
        },
        {
            el:document.querySelector('.main-outer1'),
            animationClassName:'change-outer'
        },
        {
            el:document.querySelector('.div-main_first'),
            animationClassName:'changes'
        },
        {
            el:document.querySelector('.div-main_firste'),
            animationClassName:'changes'
        },
        {
            el:document.querySelector('.div-main_firster'),
            animationClassName:'changes'
        },
        {
            el:document.querySelector('.div-main_firstert'),
            animationClassName:'changes'
        },
        
    ],
    count:4
})

//同步和异步,高阶函数
//js执行机制，同步执行完成以后，执行异步；解决方法，把它加到事件环（seitimeout）中

var a=new A();
//1.return 就是一个方法的结果，会中断return后的代码，return后的代码将不会执行
//适用场景，逻辑判断不满足条件后，就不会执行之后的逻辑时，就可以真的加return;
//2.方法的返回值可以是任何类型的数据
function b(){
    // return 'hello  word';
    // return ['xiaoming'];
    // return {name:'xiaoming'};
    return function(){return 'abc'};
}

let c=b()//'hello word';
let d=b()//['xiaoming']
let e=b()//{name:'xiaoming'}
let f=b()//‘abc’

//onclick和addEventListener的区别；
//addEventListener和removeEventListener（添加和删除事件）