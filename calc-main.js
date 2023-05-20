function calcSum(){
    endValue=100;
    sum=1;
    for(i=1;i<=endValue;i++){
        actual=i;
        sum=sum+(actual+1); 
    }
    alert("Total of Sum is: " + sum);
}
