// Task 1
function signCheck(num) {
    if (num>0) {
        console.log("Positive");
    } else if (num<0) {
        console.log("Negative");
    } else if (num==0) {
        console.log("Zero");
    } else {
        console.log("Invalid Input");
    }
}
signCheck(5);

// Task 2
function vote(age) {
    if (age>=18) {
        console.log("Eligible to Vote");
    } else {
        console.log("Not Eligible to Vote");
    }
}
vote(18);

// Task 3
function largest(num1, num2, num3) {
    if (num1>num2 && num1>num3) {
        console.log(`${num1} is largest`);
    } else if (num2>num1 && num2>num3) {
        console.log(`${num2} is largest`);
    } else if (num3>num1 && num3>num2) {
        console.log(`${num3} is largest`);
    } else if (num1==num2==num3) {
        console.log('All Numbers are same');
    } 
    else {
        console.log("Invalid Input");
    }
}
largest(5, 25, 15);

// Task 4
function day(day) {
    switch (day) {
        case 'Monday':
            console.log('Today is Monday');
            break;
        
        case 'Tuesday':
            console.log('Today is Tuesday');
            break;

        case 'Wednesday':
            console.log('Today is Wednesday');
            break;

        case 'Thursday':
            console.log('Today is Thursday');
            break;

        case 'Friday':
            console.log('Today is Friday');
            break;

        case 'Saturday':
            console.log('Today is Saturday');
            break;

        case 'Sunday':
            console.log('Today is Sunday');
            break;

        default:
            console.log('Invalid Input');
            break;
    }
}

day('Sunday');

// Task 5
function grade(score) {
    switch (true) {
        case (score>=90):
            console.log('Grade A');
            break;
       
        case (score>=75):
            console.log('Grade B');
            break;
       
        case (score>=60):
            console.log('Grade C');
            break;
       
        case (score>=45):
            console.log('Grade D');
            break;
            
        case (score<45):
            console.log('Grade F');
            break;
        
        default:
            console.log('Invalid Input');
            break;
    }
}
grade(65);

// Task 6

function evenOdd(num) {
    num%2==0?console.log('Even'):console.log('Odd');
}
evenOdd(5);

// Task 7
function leapYear(year) {
    if (year%4==0) {
        if (year%400==0) {
            console.log('Leap Year');
        } else if (year%100==0) {
            console.log('Not a Leap Year');
        } else {
            console.log('Leap Year');
        }
    } else {
        console.log('Not a Leap Year');
    }
}
leapYear(2100);

