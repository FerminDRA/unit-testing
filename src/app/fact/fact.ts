export function fact(n:number){
    let res:number;
    if(n==0){
        res=1;
    }
    else if(n<0||n>15){
        res=0;
    }
    else{
        res=1;
        for(let i=1;i<=n;i++){
           res=res*i;
        }
    }
    return res;
}