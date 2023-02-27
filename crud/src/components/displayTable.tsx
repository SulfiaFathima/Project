import React, { useState, useEffect } from 'react';
import './displayTable.css';

interface TableData {
  id: number;
  first_name: string;
  email: string;
}
const handleEdit = (item: TableData) => {
    // setEditData(item);
    // setShowEditForm(true);
  };
  

const DisplayTable: React.FC = () => {
  const [data, setData] = useState<TableData[]>([]);
  const fetchData = async () => {
    const response = await fetch('https://reqres.in/api/users');
    const result = await response.json();
    setData(result.data);
     };

  useEffect(() => {
    fetchData();

  }, []);
  console.log("Data",data);
  return (
    <div>
    {/* <button onClick={AddData()}>Add</button> */}
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(data) && data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.first_name}</td>
            <td>{item.email}</td>
            <td><button onClick={() => handleEdit(item)}>Edit</button>
            <button>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default DisplayTable;