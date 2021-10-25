import '../../assets/css/Ani.css'
import Animate from '../../assets/js/Animate'
import Translate from '../../assets/js/translate'
import articles from '../articleRote'
//     // 作业1：Translate()   Opicity();
// var animate = new Animate({
//     el:document.querySelector('.box1'),
//     model:new Translate(),
// },
// )
//js中万物皆对象，对象就有key和value，如果value是属性，key是静态属性，如果value是方法，key是静态方法

// 作业二： 
// let animate = new Animate({
//     el:document.querySelector('.box1'),
//     type:'translate',
// })
// animate.load();


// 作业三： 
// Animate.create({  
//     type:'translate',
// }).mount(document.querySelector('.box1'))


// 作业四：
//  use方法中应该接收一个 Translate.install的静态方法；如果没有静态方法，那么直接执行这个方法；
//  注意：是直接执行这个方法，而不是 new一个构造函数；
// Animate.create().use(Translate).mount(document.querySelector('.box1'))

//作业五：
// let animate = Animate.create().use(Translate).mount(document.querySelector('.box1'))

// this.el.addEventListener('animationstart',function(e){
//     e.target.classList.remove('ani-translate');
// })


var oBox = document.querySelector('.box');
var oBox1 = oBox.querySelector('.box1')
oBox1.remove();
// String.prototype.ellipse = function (num) {
//     if (this.length > num) {
//         var res = this.substring(0, num);
//         res += '...';

//         return res;
//     } else {
//         return this;
//     }

// }
// var fragment = document.createDocumentFragment();

articles.forEach(articles => {
    var cloneNode = oBox1.cloneNode(true);
    // cloneNode.querySelector('h3').innerText =articles.title;
    cloneNode.querySelector('.cssText').innerHTML = articles.article;
    cloneNode.querySelector('.cssText').querySelector('h3').dataset.id = articles.id;
    // if(articles.article.length>size){
    //     cloneNode.querySelector('#submit').style.display='block';
    // }
    // cloneNode.querySelector('#cssText').querySelector('h3').dataset.id=article.id;
    cloneNode.querySelector('.cssText').querySelector('h3').onclick = function (e) {
        // e.target.dataset.id
        window.location.href = './articleDetails.html?type='+e.target.dataset.id+'&id=1&name=xiaoming';
    }
    oBox.appendChild(cloneNode);

})


// document.querySelector('h3').onclick = function(){
//     // 获取到元素中自定义属性为 data-()的值；
//     // 如果 括号中 写id  那么就是this.dataset.id;
//     // 如果 括号中 写abc 那么就是this.dataset.abc;
//     console.log(this.dataset.id) 
//     console.log(this.dataset.abc) 
//     console.log(this.getAttribute('data-id'))
// }
// var oBtn = document.querySelectorAll('.btn');
// oBtn.forEach(late => {
//     late.querySelector('#submit').addEventListener('click', (e) => {
//         console.log(e);
//     })
// })


let animate = Animate.create().use(Translate).mount('.box1');


//    /**
//  * @description 截取字符串,超出...
//  * @param el: 元素
//  * @param textCount : 字符串截取长度 number类型;
//  * @param findAllButtonText: 非必填项,默认为'查看全部'
//  * @param showFindAllButton :非必填项,是否显示'查看全部'按钮,默认为false
//  * **/
// var size = 130;

// class Ellipsis {
//     constructor(proto) {
//         this.el = proto.el;
//         this.textCount = proto.textCount;
//         this.showFindAllButton = proto.showFindAllButton;
//         this.findAllButtonText = proto.findAllButtonText;
//     }
//     exec() {
//         var _this = this;
//         if (this.el.innerHTML.length > size) {
//             var res = _this.el.innerHTML.substring(0, size);
//             res += '...';
//             this.el.innerHTML = res;
//             this.el.parentNode.parentNode.querySelector('.btn').querySelector('#submit').style.display = 'inline-block'
//         } else {
//             return this.el.innerHTML;
//         }
//         this.el.parentNode.parentNode.querySelector('#submit').onclick = function(){
//             _this.el.innerHTML = articles[0].article;
//             _this.el.parentNode.parentNode.querySelector('#submit').style.display = 'none';
//             _this.el.parentNode.parentNode.querySelector('#shou').style.display = 'inline-block';
//         }
//         this.el.parentNode.parentNode.querySelector('#shou').onclick = function(){
//             _this.el.innerHTML = _this.el.innerHTML.substring(0, size)
//             _this.el.parentNode.parentNode.querySelector('#submit').style.display = 'inline-block';
//             _this.el.parentNode.parentNode.querySelector('#shou').style.display = 'none';
//         }
//     }
// }

// let ellipsis = new Ellipsis({
//     el: document.querySelector('article'),
//     textCount: 30,
//     findAllButtonText: "查看所有",
//     showFindAllButton: true
// })

// ellipsis.exec();

class Ellipsis {
    constructor(props) {
        this.el = props.el;
        this.text = this.el.innerHTML;
        this.textCount = props.textCount;
        this.findAllButtonText = props.findAllButtonText || '查看全文';
        this.ellipsisButtonText = props.ellipsisButtonText || '收起';
        this.showFindAllButton = props.showFindAllButton || false;
        this.flag = true; //判断是否显示查看全部按钮的显示状态；
    }

    get buttonText() {
        return this.flag ? this.findAllButtonText : this.ellipsisButtonText;
    }

    exec() {
        if (!this.text) throw new Errow('文本内容不能为空');
        // 把文本切割成50个长度；
        this.el.innerHTML = this.format(this.text, this.textCount);
        //如果 需要展示查看全部的那个按钮
        if (this.showFindAllButton) {
            //增加a标签；
            this.addButton();
        }
    }
    addButton() {
        var a = document.createElement('a');
        a.textContent = this.findAllButtonText;
        a.style.cssText = `
            color:blue;
            cursor: pointer;
        `
        var _this = this;
        a.addEventListener('click', function () {
            _this.flag = !_this.flag;
            // true = !true //false;
            // false = !false //true;
            this.textContent = _this.buttonText;
            _this.el.childNodes[0].textContent = _this.flag ? _this.format(_this.text, _this.textCount) : _this.text;
        })
        this.el.appendChild(a, this.el.childNodes[0])
    }

    format(str, num) {
        return str.length < num ? str : (str.substring(0, num) + '...');
    }
}

let ellipsis = new Ellipsis({
    el: document.querySelector('.list'),
    textCount: 130,
    findAllButtonText: "查看",
    showFindAllButton: true
})
let ellipsistwo = new Ellipsis({
    el: document.querySelector('.listtwo'),
    textCount: 130,
    findAllButtonText: "查看",
    showFindAllButton: true
})

ellipsis.exec();
ellipsistwo.exec();
