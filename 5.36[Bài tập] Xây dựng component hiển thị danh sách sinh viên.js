// import React, {useState} from 'react';

let data = [{
    name: 'John',
    age: 21,
    address: 'Hanoi'
}, {
    name: 'John',
    age: 21,
    address: 'Hanoi'
}, {
    name: 'John',
    age: 21,
    address: 'Hanoi'
}, {
    name: 'John',
    age: 21,
    address: 'Hanoi'
}, {
    name: 'John',
    age: 21,
    address: 'Hanoi'
}, {
    name: 'John',
    age: 21,
    address: 'Hanoi'
}]


const Student = () => {
    // let [studentsList, setStudentList] = useState(data)
    return (
        <div>
            <table className="table">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Address</th>
                </tr>
                {data.map((student, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.address}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default Student;