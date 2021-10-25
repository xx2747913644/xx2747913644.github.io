// class Markdown{
//     constructor(proto){
//         this.el = proto.el;
//     }
//     parseHtml(){
//         var textAll = this.el.match(/(#+)|\S+/g);
//         var arr = [];
//         var textArr =[]; 
//         textAll.forEach((item,index) => {
//             if(index%2==0 ){          
//                 arr.push(item);
//             }else{
//                 textArr.push(item);
//             }
//         });
//         var oDiv= document.createElement('div')
//         for(var i=0;i<arr.length;i++){
//         var lodel = document.createElement(`h`+(arr[i].length));
//         lodel.innerText = textArr[i]
//         oDiv.appendChild(lodel)
//     }      
//     return oDiv  
//     }

// }
// const { data } = require("autoprefixer");







class Markdown{
    constructor(text){
        this.el = text.el;
        this.arr = [];
    }
    parseHtml(){
        var res = this.el.match(/(#*|\S+)\s+\S*\n/g);
        var num = 0;
        res.forEach(item => {
                if(/#+/.test(item)){
                    num++;
                    num = num > 6 ? 6 :num;
                   var h = `<h${num}>${item.split(/\s+/)[1]}</h${num}>`
                    // console.log(h);
                    this.arr.push(h);
                }else{
                  var p = `<p>${item.trim()}</p>`
                //   console.log(p);
                  this.arr.push(p);

                }
        });
        return this.arr.join('');
    }
}

// 作业一
let md = new Markdown({
    el: document.querySelector('template').content.querySelector('article').innerText
});
let res = md.parseHtml()
// console.log(res);
// document.querySelector('div').innerHTML= newArr
var oDiv = document.querySelector('.box');
oDiv.innerHTML = res;



    // 输出html

// var el = document.querySelector('article');
// let textContent = el.textContent;
// // console.log(textContent)
// // q pgng b g wh ghmj;
// let md = new Markdown(el.textContent);
// let res = md.parse();
// el.innerHTML = res;







// 作业二：
// var deptData = [
//     {
//         deptName:'某某公司',
//         type:2
//     },
//     {
//         deptName:'子公司',
//         type:4
//     },
//     {
//         deptName:'子子部门',
//         type:5
//     }
// ]
// var a = '2->4，5'; 
// var res = format() // 某某公司->子公司，子子部门


// function format(){
//     return a.replace(/\d+/g,function(item){
//         return deptData.filter(data=>{
//             return data.type == item;
//         })[0].deptName;
//     })
// }
// console.log(res)




//作业三：
// var text = '{{ username }}';
// username是一个变量  用正则匹配到 username
// 方法一：
// '{{ username }}'.replace(/\{\{\s*(\S+)\s*\}\}/,'$1')
// 方法二：
// var a = text.match(/(?<=\{\{\s*)\S+(?=\s*\}\})/);
// 方法三：
// var a = /(?<=\{\{\s*)\S+(?=\s*\}\})/.exec(text)[0];

    