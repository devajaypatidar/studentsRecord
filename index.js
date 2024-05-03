const express = require('express');
const app = express();
const fs = require('fs');
const csv = require('csv-parser');
const Port = 3000;

const loadStudentDetails = async()=>{
    const students = [];
    const stream = fs.createReadStream('students.csv').pipe(csv());
    for await (const row of stream){
        students.push(row)
    }

    console.log("Student's details loaded Successufully");
    return students;

        
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get('/api/students', async(req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const students = await loadStudentDetails();
    const start = (page - 1 ) * pageSize;
    const end = start + pageSize;
    const paginatedStudents = students.slice(start, end);
    res.json(paginatedStudents);

})


app.get('/api/students/filter', async (req, res) => {
    const filterCriteria = req.query.criteria; 
    const students = await loadStudentDetails();
    let filteredStudents = students;
    if (filterCriteria) {
        
        const filters = filterCriteria.split('&');
        filters.forEach(filter => {
            const [key, value] = filter.split('=');
            filteredStudents = filteredStudents.filter(student => {
                if (key in student) {
                    return eval(`student.${key} === '${value}'`);
                }
            });
        });
    }
    res.json(filteredStudents);
});


app.listen(Port, ()=>{
    console.log("server started ");
})