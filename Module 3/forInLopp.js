const student={
    'name':'Rahul',
    'lastName':'Yadav',
    'CGPA':9.60,
    'currentCompany':'EPAM',
    "country":'Nepal'
}

// Using for in loop for the iteration of the properties 

for(let key in student){
    console.log(`${key}: ${student[key]}`);
}