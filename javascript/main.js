function button() {
    document.getElementById('clicked').innerHTML = '<b>Thank you for clicking on it.<b/>';
    //console.log(document.getElementById('clicked'));
    //alert('Thank you for clicking on it.');
}

function redirect() {
    window.open('https://github.com/carlosdaniel-cyber');
    //window.location.href = 'https://github.com/carlosdaniel-cyber';
}

function shift(element) {
    element.innerHTML = 'Thank you for hovering!';
    //document.getElementById('mouseover').innerHTML = 'Thank you for hovering!';
    //alert('Change text')
}

function back(element) {
    element.innerHTML = 'Hover the mouse here';
    //document.getElementById('mouseover').innerHTML = 'Hover the mouse here';
}

function load() {
    alert('Page loaded');
}

function onChange(element) {
    console.log(element.value);
}

/*function validateAge(age) {
    var validation;
    if (age >= 18) {
        validation = true;
    }else {
        validation = false;
    }
    return validation;
}
var age = prompt('How old are you?')
console.log(validateAge(age));

function sum(n1, n2){
    return n1 + n2;
}
alert(sum(5, 10));

function setReplace(phrase, name, new_name) {
    return phrase.replace(name, new_name);
};
alert(setReplace('Brazil SUCKS!', 'Brazil', 'North Corea'));

var d = new Date();
alert(d.get());

var count;
for (count = 0; count <= 5; count++) {
    alert(count);
};

while (count <= 5) {
    console.log(count);
    count++;
};

var age = prompt("How old are you?");
if (age >= 18) {
    alert('You\'re good to go.');
}else {
    alert('Get out of here!');
};

var fruits = [{name:'Apple', color:'Red'}, {name:'Banana', color:'Yellow'}]
console.log(fruits);

var list = ['Apple', 'Banana', 'Watermelon'];
console.log(list);
list.push('Blueberry')
console.log(list);
list.pop();
console.log(list.toString());
console.log(list.join(' - '));
console.log(list.reverse());
console.log(list.length);

var name = 'Carlos Daniel';
var age = '19';
var statement = 'Friends is the best TV series ever!';
alert(name + ' is ' + age + ' years old.');
console.log(statement.replace('Friends', 'The Office').toUpperCase());*/