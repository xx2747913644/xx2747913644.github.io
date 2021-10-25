import article from '../articleRote';
import Markdown from '../../assets/js/MarkDown';
class Url{
    constructor(proto){
        this.countent=proto;
        this.obj = {};
        this.exec();
        
    }
    exec(){
        // if(typeof this.countent == 'object') return;
        if( Object.prototype.toString.call(this.countent).slice(8, -1) == 'Object')return
        var text = this.countent.substring(this.countent.indexOf('?')+1,this.countent.length);
        text = text.split('&');
        text.forEach(str => {
            var str1 = str.split('=');
            this.obj[str1[0]] = str1[1];
        });
    }
   get(text){
    console.log(this.obj[text]);
   }
   parse(){
    var str = '';
//  type=2&id=1&name=xiaoming
    for (const key in this.countent) {
        str += key +'='+this.countent[key]+'&';
    };
    str = str.substring(0,str.length-1);
   }
}


var url = new Url(window.location.search);
console.log(url.obj.type);
url.get('type') // 2；
url.get('id') // 1；
url.get('name') // xiaoming;
article.forEach(item=>{
    if(item.id == url.obj.type){
        let md = new Markdown(item.article);
        document.querySelector('.text').innerHTML = md.parse();
    }
})



var params = {
    type:'1',
    id:1,
    name:'xiaoming'
}
var url2 = new Url(params)  
url2.parse() //  type=2&id=1&name=xiaoming

