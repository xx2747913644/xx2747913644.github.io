module.exports = {
    total:(num1,num2)=>{
        return num1 + num2;
    },
    extend:(obj)=>{
        var res={};
        for (const key in obj) {
         res[key]=obj[key];
        }
        return res;
    },
    trun:(str)=>{
     return str.split('').reverse().join('');
        
    }
    
}