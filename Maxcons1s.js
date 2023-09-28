const Max1s=(num)=>{
    var cnt=0;
    var maxi=0;
    for(var i=0;i<num.length;i++){
        if(num[i]==1){
            cnt++
            maxi=Math.max(maxi,cnt)
        }
        else{
            cnt=0;
        }
        
    }
    return maxi;
}
var input="111000111111"
var result=Max1s(input)
console.log(result)