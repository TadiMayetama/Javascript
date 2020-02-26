

console.log('________________FONTIONS FLECHEES')
let numbers = [1,2,3,4,5,6];/*tableau*/

function printNum(element){
    console.log(element);
}

numbers.forEach(printNum)




console.log('________________+++++++++++++++++++')
numbers.forEach(function (element){
    console.log(element);
});


console.log('+++++++++++++++++++')
numbers.forEach((element)=>{
    console.log(element);
});



console.log('________________+++++++++++++++++++');
numbers.forEach(element => console.log(element));

//console.log('____________Fonction reste parame');//

function calculerLaSomme (tab){/*expression de fonction*/
let result = 0;
for (let cellule of tab){
    result += cellule;
}
    return result;

}

/*console.log( calculSomme(numbers));*/

function calculSommeV2(...nombres){
    let result = 0;
    for(let numb of nombres){
result += num;

    }
return result;
}

console.log( calculSommeV2(1));
console.log( calculSommeV2(1, 2, 3));
console.log( calculSommeV2(1, 2, 3, 10, 22, 124));


function calculSommeV3(max,...nombres){
    let result = 0;
    for(let numb of nombres){
result += num;

    }
if(result>max){
console.log(result + " > " + max);

}else{

    console.log(result + " < " + max);

}
}
calculSommeV3(10,2,50);



let texte = "Bonjour";
console.log([...texte]);

let arr1 = [1,2,3] /* 3 cellules*/
let arr2 = ["a", "b","c"];

let arr3 = [...arr1, ...arr2];
let arr4 = [arr1,arr2]

console.log("arr1 : "+arr1);
console.log("arr2 : "+arr2);
console.log("arr3 : ",arr3);
console.log("arr4 : ",arr4);

let cel1 = arr4[0];
let cel2 = arr4[1];
console.log(cel1);
console.log(cel2);