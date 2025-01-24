import React from "react";

const Contact = () => {
  const contacts = [
    {
      id: 1,
      name: "Deepanshu",
      email: "vipsoft@hotmial.com",
      mobile: "",
      message:
        "Your account has been dormant for 30 days. To stop removal and claim your funds, please access your account and request a payout within 24 hours. For support, visit our Telegram group: https://tinyurl.com/abc123",
      date: "20-01-2025",
    },
    {
      id: 2,
      name: "Jessica Smith",
      email: "morrison1@icloud.com",
      mobile: "1234567890",
      message: "Hi Admin, I need assistance with...",
      date: "19-01-2025",
    },
    // Add more entries as needed
  ];

  const handleEdit = (id) => {
    console.log(`Edit contact with ID: ${id}`);
    // Add your logic for editing a contact
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      console.log(`Delete contact with ID: ${id}`);
      // Add your logic for deleting a contact
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold">Contact Us</h2>
        <button className="btn btn-primary">
          <i className="bi bi-plus-circle me-2"></i> Add Contact
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover mt-4">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Message</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td className="fw-semibold">{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.mobile || "N/A"}</td>
                <td className="text-truncate">
                  {contact.message}
                </td>
                <td>{contact.date}</td>
                <td className="d-flex gap-2">
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => handleEdit(contact.id)}
                  >
                    <i className="bi bi-pencil-square"></i> Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(contact.id)}
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

export default Contact;
