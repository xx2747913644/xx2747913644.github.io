// import webpackConfig from '../../config/webpack.config.js'
// import webpack from  '../../assets/js/webpack'
// const webpack1 = new webpack(webpackConfig);
// webpack1.compile();

// //作业： 页面输出：
// // 将./src/home/index.js中的代码打包到/docs/home/文件夹中，文件名称叫index.js




// let config = {
//     entry:'./src/home/index.js',
//     output:{
//         filename:'home/helloworld.js',
//         path:'/docs'
//     }
// }

// let webpack = new Webpack(config);
// webpack.compile();

// split('/')  home/helloworld.js  ['home','helloworld.js']

// function Webpack(config){
//     this.config = config;
// }

// Webpack.prototype.compile = function(){
//     let { entry,output } = this.config;
//     let { filename,path } = output;
//     let [dir,file] = filename.split('/');
//     //let [username,usernam2] = ['xiaoming','xiaohong']
//     var str = `// 将${entry}中的代码打包到${path}/${dir}/文件夹中，
//     //文件名称叫${file}`
//     console.log(str)
// }

// const webpack = new Webpack(config);
// webpack.compile();

// function getUserInfo(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             let res = ['xiaominf',18];
//             resolve(res);
//         },2000)
//     })
// }


// function getOrderList(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             let res =['food10','footd22'];
//             resolve(res);
//         },2000)
//     })
// }

// function getArticleList(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             let res =['book1','book2'];
//             resolve(res);
//         }, 2000);
//     })
// }


// (async function(){
//     let res =await getUserInfo();
//     console.log('用户信息为：');
//     console.log(res);
//     let articleList = await getArticleList();
//     console.log('文章列表为：');
//     console.log(articleList);
//     let orderlist = await getOrderList();
//     console.log('订单列表为：');
//     console.log(orderlist);
// })


// function getUserInfo(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             let res = ['小明',19];
//             resolve(res);
//         },2000)
//     })
// }

// function getOrderList(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             let res =['food10','food11'];
//             resolve(res);
//         },2000)
//     })
// }


// function getArticleList(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             let res = ['book1','book2'];
//             resolve(res);
//         },2000)
//     })
// }


// (async function(){
//     let res = await getUserInfo();
//     console.log('用户信息为：');
//     console.log(res);

//     let articlelist = await getArticleList();
//     console.log('文章列表为：');
//     console.log(articlelist);

//     let orderlist = await getOrderList();
//     console.log('订单列表为：')
//     console.log(orderlist);
// })()


var s = '# 我叫鑫鑫';
let res = s.match(/(#+\s*)|\S+|\n/g,function(item){
    
});
console.log(res);