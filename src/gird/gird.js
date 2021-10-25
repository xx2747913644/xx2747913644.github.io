class Ellipsis{
    constructor(props){
        this.el = props.el;
        this.text = this.el.innerHTML;
        this.textCount = props.textCount;
        this.findAllButtonText = props.findAllButtonText || '查看全文';
        this.ellipsisButtonText = props.ellipsisButtonText || '收起';
        this.showFindAllButton = props.showFindAllButton || false;
        this.flag = true; //判断是否显示查看全部按钮的显示状态；
    }

    get buttonText(){
        return this.flag ? this.findAllButtonText : this.ellipsisButtonText;
    }
    
    exec(){
        if(!this.text) throw new Errow('文本内容不能为空');
        // 把文本切割成50个长度；
        this.el.innerHTML = this.format(this.text,this.textCount);
        //如果 需要展示查看全部的那个按钮
        if(this.showFindAllButton){
            //增加a标签；
            this.addButton();
        }
    }
    addButton(){
        var a = document.createElement('a');
        a.textContent = this.findAllButtonText;
        a.style.cssText = `
            color:blue;
            cursor: pointer;
        `
        var _this = this;
        a.addEventListener('click',function(){
            _this.flag = !_this.flag;
            // true = !true //false;
            // false = !false //true;
            this.textContent = _this.buttonText;
            _this.el.childNodes[0].textContent = _this.flag ? _this.format(_this.text,_this.textCount): _this.text;
        })
        this.el.appendChild(a,this.el.childNodes[0])
    }

    format(str,num){
        return str.length < num ?  str : (str.substring(0,num) + '...');
    }
}

let ellipsis = new Ellipsis({
    el:document.querySelector('.list'),
    textCount:30,
    findAllButtonText:"查看",
    showFindAllButton:true
})

ellipsis.exec();