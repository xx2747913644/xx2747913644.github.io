// import Translate from './translate'
// import Opicity from './Opicity';
// export default class Animate{
//作业三
// constructor(props){
//     this.el =props.el;
//     // this.model = props.model;
//     // this.model.animation(this.el);
//     this.type = props.type;
// }
//     load(){
//         if(this.type == 'translate'){
//             this.model = new Translate();
//             this.model.animation(this.el)          
//         }else{
//         this.model = new Opicity();
//         this.model.animation(this.el);
//     }
// }


// static create(type){
//    return new Animate(type)
// }
// mount(ele){
//     this.el = ele;
//     this.load();
// }   
// }
//作业四
//    export default class Animate{
//         constructor(){
//             // console.log(props);
//             // this.el = props.el;
//             // this.type = props.type;
//         }
//         static create(){
//             return new Animate();
//         }
//         use(Translate){
//             // console.log(Translate);
//             try{
//                 this.model = Translate.install();
//                 // console.log(this.model.exec);
//             }catch(e){
//                 Translate();
//             }
//             return this
//         }
//         mount(el){
//             console.log(el);
//             console.log(this.model);
//             this.model.animation(el);
//         }
//     }


export default class Animate {
    constructor() {
        this.el =Animate.el;
        // this.model = Animate.model;
    }
    static create() {
        return new Animate();
    }
    static el;

    use(Translate) {
       try{

        Animate.model=Translate.install();
       }catch(e){
        Translate();
       }
        return this;
    }
    mount(el) {
        Animate.el=el;
        new Animate.model().exec();
    }
}