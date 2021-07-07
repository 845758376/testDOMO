
//检测字符串长度（大小）
function  bytesLnegth(str){
    var count=str.length;
for(var i=0;i<str.length;i++){
        if(str.charCodeAt(i)>255){
        count++;
        }    
    }
    return count;
}
// 检测数据类型
function getType(data){
    return Object.prototype.toString.call(data).slice(8,-1)
}
