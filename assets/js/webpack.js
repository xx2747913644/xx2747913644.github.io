export default function Webpack(config){
    this.config = config;
}

// 将./src/home/home.js中的代码打包到/docs/home/文件夹中，
//文件名称叫home.jfkasldfjklas.js
Webpack.prototype.compile = function(){
    let { entry,output } = this.config;
    if(typeof entry == 'string'){
        let { filename,path } = output;
        let [dir,file] = filename.split('/');
        //let [username,usernam2] = ['xiaoming','xiaohong']
        var str = `// 将${entry}中的代码打包到${path}/${dir}/文件夹中，
        //文件名称叫${file}`
        console.log(str)
    }else{
        for (const key in entry) {
            var num = parseInt(Math.random()*8999)+1000;
            console.log(`将${entry[key]}中的代码打包到${output.path}/${key}/文件夹中,文件名称叫${key}.${num}.js`)
        }
    }
   
}