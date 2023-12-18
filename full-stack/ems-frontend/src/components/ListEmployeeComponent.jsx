import React from "react";

const ListEmployeeComponent = () => {
  const dummyData = [
    {
      id: 1,
      firstName: "Andy",
      lastName: "Lang",
      email: "andy@email.com",
    },
    {
      id: 2,
      firstName: "Kauko",
      lastName: "Itäinen",
      email: "kauko.i@email.com",
    },
    {
      id: 3,
      firstName: "Saukko",
      lastName: "Kumminen",
      email: "saukkko@email.com",
    },
  ];

  return (
    <div className="container">
      <h2 className="text-center">Lista työntekijöistä</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Tt Id</th>
            <th>Tt etunimi</th>
            <th>Tt sukunimi</th>
            <th>Tt sähköpostiosoite</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
