// let parentObj={
//     calDetail:function(){
//         console.log(`${this.fname} ${this.lname} ${this.age}`)
//     }
// }
// let childObj=Object.create(parentObj);
// childObj.fname="bindu";
// childObj.lname="muniyappa";
// childObj.age=23;

// childObj.calDetail();

// let childObj1=Object.create(parentObj);
// childObj1.fname="bb";
// childObj1.lname="R";
// childObj1.age=23;

// childObj1.calDetail();

let addObj={
    addmethod:function(Array){
        let sum=0;
        for(let i=0;i<Array.length;i++){
            sum=sum+Array[i];
        }
        console.log(sum);
    }
}
addObj.addmethod([1,2,3,4,5]);
addObj.addmethod([1,2,3,4,5,6]);
addObj.addmethod([1,2,3,4,5,6,7]);


