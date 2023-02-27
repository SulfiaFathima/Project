import React, { useState } from 'react';

const AddItemForm: React.FC = () => {
    const [id, setId] = useState('');
    const [first_name, setFirstName] = useState('');
    const [email, setEmail] = useState('');

    const resetForm = () => {
        setId("")
        setFirstName("")
        setEmail("")
      }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newItem = { id, first_name };
        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        });
        

        if (response.ok) {
            resetForm();
            console.log("Data saved successfully!!!");

        } else {
            console.log("Data Not Saved");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                ID:
                <input type="id" value={id} onChange={(event) => setId(event.target.value)} />
            </label>
            <br />
            <label>
                FirstName:
                <input type="first_name" value={first_name} onChange={(event) => setFirstName(event.target.value)} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </label>
            <br />


            <button type="submit">Add Item</button>
        </form>
    );
};

export default AddItemForm;
