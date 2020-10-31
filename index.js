function getSalary(hours, extra){
    // get solid hours (normal hours worked)
    var solidHours = hours;

    // get extra hours
    var extra = extra

    var solidHourBase = solidHours * 1000;
    var extraBase = extra * 200;
    var totalSalary = solidHourBase + extraBase;
    return totalSalary;
}

function onSubmit(){
    const hoursInputValue = document.querySelector('#hoursInput').value;
    const extraInputValue = document.querySelector('#extraInput').value;
    if(isNaN(hoursInputValue) || !hoursInputValue || isNaN(extraInputValue || !extraInputValue)){
        alert('Enter a correct number.');
        return;
    }

    const salary = getSalary(hoursInputValue, extraInputValue);
    const h1 = document.querySelector('.result h1');
    h1.innerHTML = "Your Earning this Month is &#x20A6;" + salary;
}