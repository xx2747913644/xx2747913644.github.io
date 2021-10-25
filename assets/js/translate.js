import Animate from "./Animate";

//作业三
// export default class Translate{
//     constructor(){

//     }
//     animation(arr){
//         console.log(arr);
//         arr.classList.add('change');

//     }
//     static install(){
//         return new Translate();
//     }
// } 



export default class Translate extends Animate {
    constructor() {
        super();
        // this.el=Animate.el;
        // this.model=Animate.model;
    }
    exec() {
        // let _this = this;
        // console.log(el);
        // this.el.classList.add('change');
        let arr = Array.from(document.querySelectorAll(this.el));
        for(let i=0;i<arr.length;i++){
            setTimeout(function(){
                arr[i].classList.add('change');
            },200)
        }
        // super.emit('animationstart')
    }
    static install() {
        return Translate;
    }
}
