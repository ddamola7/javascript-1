var developer = 'banjo'
var designer = 'sydney'
var accountant = 'damola'

// concatenation
var sentence = ' i have a developer and his name is ' + developer + ' and a designer named ' + designer + ' with an accountant called ' + accountant
console.log(sentence.length);
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

var age = 25
if(age >= 18 ){
    console.log('you can vote');
}else{
    console.log('you are too young to vote');  
}

var student = false
if(student == true){
    console.log('free ticket');  
}else{
    console.log('pay your complete money');
}

var me = 'tired'
if(me != 'tired'){
    console.log('continue working');
}else{
    console.log('take a break');
}

var presido='tpain'
if(presido != 'tpain'){
    console.log('life is good');
}else{
    console.log('sapa dey for everybody');
}

var job = 'police'
if(job == 'lawyer'){
    console.log('your bill is 200k');
}else if(job == 'police'){
    console.log('your bill is 1 million');
} else if (job == 'influencer'){
    console.log('your bill is 600k');
}else if (job == 'instuctor'){
    console.log('your bill is 50k');
}else{
    console.log('your bill is 100k');
}

var classmates = ['Damola', 'Gbenga', 'banjo', 'ridwan', 'tochukwu', 'sydney','ayo']
console.log(classmates);
classmates.push('ehis')
console.log(classmates);
classmates.push('daniel');
console.log(classmates);
classmates.pop()
console.log(classmates);
classmates.pop()
console.log(classmates);

classmates.shift()
console.log(classmates);

classmates.unshift('damola')
console.log(classmates);

console.log(classmates.length);
console.log(classmates[0]);

classmates[3]= 'alabi'
console.log(classmates);

classmates[6]= 'temitayo'
console.log(classmates);











// var texting = ['jagons', 'false',false, 50, null,'null', undefined]
// console.log(texting);

