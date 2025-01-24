import React from "react";

const ContactEquipment = () => {
  const equipmentDetails = [
    {
      id: 1,
      equipmentName: "Backhoe Loader Case-9868",
      companyName: "Case Constructions",
      name: "John Doe",
      phone: "123-456-7890",
      email: "johndoe@example.com",
      address: "123 Main St, Springfield, USA",
    },
    // Add more entries as needed
  ];

  const handleEdit = (id) => {
    console.log(`Edit equipment with ID: ${id}`);
    // Add your logic for editing an equipment entry
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this equipment entry?")) {
      console.log(`Delete equipment with ID: ${id}`);
      // Add your logic for deleting an equipment entry
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold">Equipment Details</h2>
        <button className="btn btn-primary">
          <i className="bi bi-plus-circle me-2"></i> Add Equipment
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover mt-4">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Equipment Name</th>
              <th>Company Name</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {equipmentDetails.map((equipment) => (
              <tr key={equipment.id}>
                <td>{equipment.id}</td>
                <td className="fw-semibold">{equipment.equipmentName}</td>
                <td>{equipment.companyName}</td>
                <td>{equipment.name}</td>
                <td>{equipment.phone}</td>
                <td>{equipment.email}</td>
                <td>{equipment.address}</td>
                <td className="d-flex gap-2">
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => handleEdit(equipment.id)}
                  >
                    <i className="bi bi-pencil-square"></i> Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(equipment.id)}
                  >
                    <i className="bi bi-trash3"></i> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactEquipment;
