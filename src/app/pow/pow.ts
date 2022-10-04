export function pow(x:number,n:number){
    let res:number;
    if(n==0){
        res=1;
    }
    else if(n<0){
        res=0;
    }
    else{
        res=x
        for(let i=1;i<n;i++){
           res=res*x
        }
    }
    return res;
}