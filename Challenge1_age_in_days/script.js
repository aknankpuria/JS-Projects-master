// challenge 1 -> age in days

function age_in_days(){
    let age=prompt("Enter your age.");
    let age_days=age*365;
    let h2 = document.createElement('h2');
    let textanswer = document.createTextNode(`You are ${age_days} days old`);
    h2.setAttribute('id', 'age_in_days');
    h2.appendChild(textanswer);
    document.getElementById("result_age").appendChild(h2);
}

function reset_age(){
    document.getElementById("age_in_days").remove();
}