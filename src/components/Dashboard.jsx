import React, { useState } from "react";
import "../styles/Dashboard.css";

const RenderForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    description: "",
    website: "",
    employeeStrength: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleCancel = () => {
    setFormData({
      companyName: "",
      industry: "",
      description: "",
      website: "",
      employeeStrength: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("FormSaveted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-1">
        <label htmlFor="companyName" className="form-label">
          Company Name:
        </label>
        <input
          type="text"
          id="companyName"
          className="form-control"
          value={formData.companyName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-1">
        <label htmlFor="industry" className="form-label">
          Industry:
        </label>
        <input
          type="text"
          id="industry"
          className="form-control"
          value={formData.industry}
          onChange={handleChange}
        />
      </div>
      <div className="mb-1">
        <label htmlFor="description" className="form-label">
          Description:
        </label>
        <textarea
          id="description"
          className="form-control"
          rows="2"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-1">
        <label htmlFor="website" className="form-label">
          Website:
        </label>
        <input
          type="text"
          id="website"
          className="form-control"
          value={formData.website}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="employeeStrength" className="form-label">
          Employee Strength:
        </label>
        <input
          type="text"
          id="employeeStrength"
          className="form-control"
          value={formData.employeeStrength}
          onChange={handleChange}
        />
      </div>
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-secondary me-2" onClick={handleCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
         Save
        </button>
      </div>
    </form>

  );
};

const AboutSection = () => {
  return (
    <div className="code">
      <RenderForm />
    </div>
  );
};

const ContactSection = () => {
  const [contactData, setContactData] = useState([]);
  const [newContact, setNewContact] = useState({
    personName: "",
    contactNumber: "",
    emailAddress: "",
    designation: "",
  });

  const handleAddContact = () => {
    setContactData((prevData) => [...prevData, newContact]);
    setNewContact({
      personName: "",
      contactNumber: "",
      emailAddress: "",
      designation: "",
    });
  };
  const handleCancel = () => {
    setNewContact({
      personName: "",
      contactNumber: "",
      emailAddress: "",
      designation: "",
    });
  };
  // const handleDeleteContact = (index) => {
  //   setContactData((prevData) => prevData.filter((_, i) => i !== index));
  // };
  return (
    <div className="code">
    <div className="row">
  <div className="col-md-6">
    <div className="mb-1">
      <label htmlFor="title" className="form-label">
        Title:
      </label>
      <select
        id="title"
        className="form-select"
        value={newContact.title}
        onChange={(e) =>
          setNewContact((prevContact) => ({
            ...prevContact,
            title: e.target.value,
          }))
        }
      >
        <option value="">Select title</option>
        <option value="Mr">Mr.</option>
        <option value="Mrs">Mrs.</option>
        <option value="Ms">Miss.</option>
        <option value="Dr">Ms.</option>
      </select>
    </div>
    <div className="mb-1">
      <label htmlFor="contactNumber" className="form-label">
        Contact Number:
      </label>
      <input
        type="text"
        id="contactNumber"
        className="form-control"
        value={newContact.contactNumber}
        onChange={(e) =>
          setNewContact((prevContact) => ({
            ...prevContact,
            contactNumber: e.target.value,
          }))
        }
      />
          </div>
  </div>
  <div className="col-md-6">

          <div className="mb-1">
      <label htmlFor="personName" className="form-label">
        Contact Person Name:
      </label>
      <input
        type="text"
        id="personName"
        className="form-control"
        value={newContact.personName}
        onChange={(e) =>
          setNewContact((prevContact) => ({
            ...prevContact,
            personName: e.target.value,
          }))
        }
      />
    </div>
    <div className="mb-1">
      <label htmlFor="emailAddress" className="form-label">
        Email Address:
      </label>
      <input
        type="text"
        id="emailAddress"
        className="form-control"
        value={newContact.emailAddress}
        onChange={(e) =>
          setNewContact((prevContact) => ({
            ...prevContact,
            emailAddress: e.target.value,
          }))
        }
      />
    </div>
    <div className="mb-1">
      <label htmlFor="designation" className="form-label">
        Designation:
      </label>
      <input
        type="text"
        id="designation"
        className="form-control"
        value={newContact.designation}
        onChange={(e) =>
          setNewContact((prevContact) => ({
            ...prevContact,
            designation: e.target.value,
          }))
        }
      />
    </div>
  </div>
</div>

      <div>
        <button type="button" className="btn btn-primary" onClick={handleAddContact}>
          + Add New
        </button>
      </div>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Contact Person</th>
              <th>Contact Number</th>
              <th>Email Address</th>
              <th>Designation</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contactData.map((contact, index) => (
              <tr key={index}>
                <td>{contact.personName}</td>
                <td>{contact.contactNumber}</td>
                <td>{contact.emailAddress}</td>
                <td>{contact.designation}</td>
                <td>
                  {/* <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDeleteContact(index)}
                  >
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-secondary me-2" onClick={handleCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
         Save
        </button>
      </div>
    
    </div>
  );
};

const LegalSection = () => {
  const [legalInfo, setLegalInfo] = useState({
    companyType: "",
    registrationNumber: "",
    yearOfRegistration: "",
    tinGstinNumber: "",
    lastFYTurnover: "",
    addressLine1: "",
    addressLine2: "",
    country: "",
    city: "",
    pincode: "",
    state: "",
  });
  const handleCancel = () => {
    setLegalInfo({
      companyType: "",
      registrationNumber: "",
      yearOfRegistration: "",
      tinGstinNumber: "",
      lastFYTurnover: "",
      addressLine1: "",
      addressLine2: "",
      country: "",
      city: "",
      pincode: "",
      state: "",
    });
  };
  

  return (
    <div className="code">
   
   <div className="row">
  <div className="col-md-6">
    <div className="mb-1">
      <label htmlFor="companyType" className="form-label">
        Company Type:
      </label>
      <select
        id="companyType"
        className="form-select"
        value={legalInfo.companyType}
        onChange={(e) =>
          setLegalInfo((prevLegalInfo) => ({
            ...prevLegalInfo,
            companyType: e.target.value,
          }))
        }
      >
        <option value="">Select company type</option>
        <option value="Type 1">Sole Propietorship</option>
        <option value="Type 2">Private Limited </option>
        <option value="Type 3">Not-for-profit Organization</option>
              <option value="Type 4">One person Company</option>
        <option value="Type 4">Limited Liability Partnership</option>
              
      </select>
    </div>
    
    <div className="mb-1">
      <label htmlFor="yearOfRegistration" className="form-label">
        Year of Registration:
      </label>
      <input
        type="text"
        id="yearOfRegistration"
        className="form-control"
        value={legalInfo.yearOfRegistration}
        onChange={(e) =>
          setLegalInfo((prevLegalInfo) => ({
            ...prevLegalInfo,
            yearOfRegistration: e.target.value,
          }))
        }
      />
          </div>
          <div className="mb-1">
      <label htmlFor="lastFYTurnover" className="form-label">
        Last FY Turnover:
      </label>
      <input
        type="text"
        id="lastFYTurnover"
        className="form-control"
        value={legalInfo.lastFYTurnover}
        onChange={(e) =>
          setLegalInfo((prevLegalInfo) => ({
            ...prevLegalInfo,
            lastFYTurnover: e.target.value,
          }))
        }
      />
          </div>
  </div>
  <div className="col-md-6">
  
          <div className="mb-1">
      <label htmlFor="registrationNumber" className="form-label">
        Registration Number:
      </label>
      <input
        type="text"
        id="registrationNumber"
        className="form-control"
        value={legalInfo.registrationNumber}
        onChange={(e) =>
          setLegalInfo((prevLegalInfo) => ({
            ...prevLegalInfo,
            registrationNumber: e.target.value,
          }))
        }
      />
    </div>
   
          <div className="mb-1">
      <label htmlFor="tinGstinNumber" className="form-label">
        TIN/GSTIN Number:
      </label>
      <input
        type="text"
        id="tinGstinNumber"
        className="form-control"
        value={legalInfo.tinGstinNumber}
        onChange={(e) =>
          setLegalInfo((prevLegalInfo) => ({
            ...prevLegalInfo,
            tinGstinNumber: e.target.value,
          }))
        }
      />
          </div>
  </div>
</div>

      

      <h2 className="text-center">Registered Address</h2>

      <div className="row">
        <div className="col-md-6">
          <div className="mb-1">
            <label htmlFor="addressLine1" className="form-label">
              Address Line 1:
            </label>
            <input
              type="text"
              id="addressLine1"
              className="form-control"
              value={legalInfo.addressLine1}
              onChange={(e) =>
                setLegalInfo((prevLegalInfo) => ({
                  ...prevLegalInfo,
                  addressLine1: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-1">
            <label htmlFor="country" className="form-label">
              Country:
            </label>
            <input
              type="text"
              id="country"
              className="form-control"
              value={legalInfo.country}
              onChange={(e) =>
                setLegalInfo((prevLegalInfo) => ({
                  ...prevLegalInfo,
                  country: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-1">
            <label htmlFor="state" className="form-label">
              State:
            </label>
            <input
              type="text"
              id="state"
              className="form-control"
              value={legalInfo.state}
              onChange={(e) =>
                setLegalInfo((prevLegalInfo) => ({
                  ...prevLegalInfo,
                  state: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className="col-md-6">
      
          <div className="mb-1">
            <label htmlFor="addressLine2" className="form-label">
              Address Line 2:
            </label>
            <input
              type="text"
              id="addressLine2"
              className="form-control"
              value={legalInfo.addressLine2}
              onChange={(e) =>
                setLegalInfo((prevLegalInfo) => ({
                  ...prevLegalInfo,
                  addressLine2: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-1">
            <label htmlFor="city" className="form-label">
              City:
            </label>
            <input
              type="text"
              id="city"
              className="form-control"
              value={legalInfo.city}
              onChange={(e) =>
                setLegalInfo((prevLegalInfo) => ({
                  ...prevLegalInfo,
                  city: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-1">
            <label htmlFor="pincode" className="form-label">
              Pincode:
            </label>
            <input
              type="text"
              id="pincode"
              className="form-control"
              value={legalInfo.pincode}
              onChange={(e) =>
                setLegalInfo((prevLegalInfo) => ({
                  ...prevLegalInfo,
                  pincode: e.target.value,
                }))
              }
            />
          </div>
         
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
       
          <button type="button" className="btn btn-secondary me-2" onClick={handleCancel} >
            Cancel
          </button>
       
        <button type="submit" className="btn btn-primary" >
         Save
        </button>
      </div>
    </div>
  );
};


const OfficesSection = () => {
  const [officeData, setOfficeData] = useState([]);
  const [newOffice, setNewOffice] = useState({
    addressType: "",
    addressLine1: "",
    addressLine2: "",
    country: "",
    city: "",
    pincode: "",
    state: "",
    mobileNumber: "",
    emailAddress: "",
  });

  const handleAddOffice = () => {
    setOfficeData((prevData) => [...prevData, newOffice]);
    setNewOffice({
      addressType: "",
      addressLine1: "",
      addressLine2: "",
      country: "",
      city: "",
      pincode: "",
      state: "",
      mobileNumber: "",
      emailAddress: "",
    });
  };

  const handleCancel = () => {
    setNewOffice({
      addressType: "",
      addressLine1: "",
      addressLine2: "",
      country: "",
      city: "",
      pincode: "",
      state: "",
      mobileNumber: "",
      emailAddress: "",
    });
  };

  return (
    <div className="code">
    <div className="row">
  <div className="col-md-12"> {/* Changed col-md-6 to col-md-12 */}
    <div className="mb-1">
      <label htmlFor="addressType" className="form-label">
        Address Type:
      </label>
      <select
        id="addressType"
        className="form-select"
        value={newOffice.addressType}
        onChange={(e) =>
          setNewOffice((prevOffice) => ({
            ...prevOffice,
            addressType: e.target.value,
          }))
        }
      >
        <option value="">Select Office type</option>
        <option value="Home">Registered Office</option>
        <option value="Work">Corporate Office</option>
              <option value="Other">Branch Office</option>
              <option value="Home">Client Location</option>
        <option value="Work">Head Office</option>
      </select>
    </div>
  </div>
</div>

      <div className="row">
        <div className="col-md-6">
          <div className="mb-1">
            <label htmlFor="addressLine1" className="form-label">
              Address Line 1:
            </label>
            <input
              type="text"
              id="addressLine1"
              className="form-control"
              value={newOffice.addressLine1}
              onChange={(e) =>
                setNewOffice((prevOffice) => ({
                  ...prevOffice,
                  addressLine1: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-1">
            <label htmlFor="addressLine2" className="form-label">
              Address Line 2:
            </label>
            <input
              type="text"
              id="addressLine2"
              className="form-control"
              value={newOffice.addressLine2}
              onChange={(e) =>
                setNewOffice((prevOffice) => ({
                  ...prevOffice,
                  addressLine2: e.target.value,
                }))
              }
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-1">
            <label htmlFor="country" className="form-label">
              Country:
            </label>
            <input
              type="text"
              id="country"
              className="form-control"
              value={newOffice.country}
              onChange={(e) =>
                setNewOffice((prevOffice) => ({
                  ...prevOffice,
                  country: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-1">
            <label htmlFor="city" className="form-label">
              City:
            </label>
            <input
              type="text"
              id="city"
              className="form-control"
              value={newOffice.city}
              onChange={(e) =>
                setNewOffice((prevOffice) => ({
                  ...prevOffice,
                  city: e.target.value,
                }))
              }
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-1">
            <label htmlFor="pincode" className="form-label">
              Pincode:
            </label>
            <input
              type="text"
              id="pincode"
              className="form-control"
              value={newOffice.pincode}
              onChange={(e) =>
                setNewOffice((prevOffice) => ({
                  ...prevOffice,
                  pincode: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-1">
            <label htmlFor="state" className="form-label">
              State:
            </label>
            <input
              type="text"
              id="state"
              className="form-control"
              value={newOffice.state}
              onChange={(e) =>
                setNewOffice((prevOffice) => ({
                  ...prevOffice,
                  state: e.target.value,
                }))
              }
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-1">
            <label htmlFor="mobileNumber" className="form-label">
              Mobile Number:
            </label>
            <input
              type="text"
              id="mobileNumber"
              className="form-control"
              value={newOffice.mobileNumber}
              onChange={(e) =>
                setNewOffice((prevOffice) => ({
                  ...prevOffice,
                  mobileNumber: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-1">
            <label htmlFor="emailAddress" className="form-label">
              Email Address:
            </label>
            <input
              type="text"
              id="emailAddress"
              className="form-control"
              value={newOffice.emailAddress}
              onChange={(e) =>
                setNewOffice((prevOffice) => ({
                  ...prevOffice,
                  emailAddress: e.target.value,
                }))
              }
            />
          </div>
        </div>
      </div>
      <div>
        <button type="button" className="btn btn-primary" onClick={handleAddOffice}>
          + Add New
        </button>
      </div>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Address Type</th>
              <th>Registered  Address</th>
              <th>Mobile Number</th>
              <th>Email Address</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {officeData.map((office, index) => (
              <tr key={index}>
                <td>{office.addressType}</td>
                <td>{office.addressLine1}</td>
               
                <td>{office.mobileNumber}</td>
                <td>{office.emailAddress}</td>
                <td>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button type="button" className="btn btn-secondary me-2" onClick={handleCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
         Save
        </button>
      </div>
    </div>
  );
};

const CompanyDetails = () => {
  const [activeSection, setActiveSection] = useState('about');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="companydetails">
      <div className="button-container">
        <button
          className={`section-button ${activeSection === 'about' ? 'active' : ''}`}
          onClick={() => handleSectionClick('about')}
        >
          About
        </button>
        <button
          className={`section-button ${activeSection === 'contact' ? 'active' : ''}`}
          onClick={() => handleSectionClick('contact')}
        >
          Contact Details
        </button>
        <button
          className={`section-button ${activeSection === 'legal' ? 'active' : ''}`}
          onClick={() => handleSectionClick('legal')}
        >
          Legal Information
        </button>
        <button
          className={`section-button ${activeSection === 'offices' ? 'active' : ''}`}
          onClick={() => handleSectionClick('offices')}
        >
          Offices
        </button>
      </div>

      <div className="section-data">
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'contact' && <ContactSection />}
        {activeSection === 'legal' && <LegalSection />}
        {activeSection === 'offices' && <OfficesSection />}
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <>
      <header>
        {/* Sidebar */}
        <nav
          id="sidebarMenu"
          className="collapse d-lg-block sidebar collapse bg-white overflow-auto"
        >
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/236/236831.png?w=740&t=st=1687699392~exp=1687699992~hmac=efc652fa17b04d06bdffa783beb2515dff59d4853d7c044c6f8965bb47d5598c"
                  className="rounded-circle"
                  height="88"
                  alt="Avatar"
                  loading="lazy"
                />
                <span className="dropdown-profile big text-dark fw-bold">
                  User Name
                </span>
              </div>

              <a
                href="!#"
                className={`list-group-item list-group-item-action py-2  ${
                  activeLink === 0 ? "active" : ""
                }`}
                aria-current="true"
                onClick={() => handleLinkClick(0)}
              >
                <i className="fas fa-building me-3"></i>
                <span className="big text-dark fw-bold">Company Details</span>
              </a>

              {/* Other sidebar links */}
              <a
                href="!#"
                className={`list-group-item list-group-item-action py-2  ${
                  activeLink === 1 ? "active" : ""
                }`}
                onClick={() => handleLinkClick(1)}
              >
                <i className="fas fa-briefcase me-3"></i>
                <span className="big text-dark fw-bold">Add a job</span>
              </a>
              <a
                href="!#"
                className={`list-group-item list-group-item-action py-2  ${
                  activeLink === 2 ? "active" : ""
                }`}
                onClick={() => handleLinkClick(2)}
              >
                <i className="fa-solid fa-business-time me-3"></i>
                <span className="fw-bold">Jobs</span>
              </a>
              <ul
                className="list-group list-group-flush "
                style={{ marginLeft: 30 }}
              >
                <li className="list-group-item small">Posted Jobs</li>
                <li className="list-group-item small">Drafts</li>
                <li className="list-group-item small">Closed Jobs</li>
              </ul>

              <a
                href="!#"
                className={`list-group-item list-group-item-action py-2  ${
                  activeLink === 3 ? "active" : ""
                }`}
                onClick={() => handleLinkClick(3)}
              >
                <i className="fa-solid fa-floppy-disk me-3"></i>
                <span className="fw-bold">Applications</span>
              </a>
              <ul
                className="list-group list-group-flush "
                style={{ marginLeft: 30 }}
              >
                <li className="list-group-item small">View Applications</li>
                <li className="list-group-item small">
                  Shortlisted Candidates
                </li>
                <li className="list-group-item small">Hired Candidates</li>
                <li className="list-group-item small">Rejected Candidates</li>
              </ul>

              <a
                href="!#"
                className={`list-group-item list-group-item-action py-2  ${
                  activeLink === 4 ? "active" : ""
                }`}
                onClick={() => handleLinkClick(4)}
              >
                <i className="fa-solid fa-gear  me-3"></i>
                <span className="big text-dark fw-bold">Setting</span>
              </a>

              <a
                href="!#"
                className={`list-group-item list-group-item-action py-2  ${
                  activeLink === 5 ? "active" : ""
                }`}
                onClick={() => handleLinkClick(5)}
              >
                <i className="fa-solid fa-right-to-bracket me-3"></i>
                <span className="big text-dark fw-bold">Logout</span>
              </a>
            </div>
          </div>
        </nav>
        {/* Sidebar */}

        <main>
          <div className="main-content">
            {/* Render the content based on the activeLink state */}
            <div className="content-container">
              {activeLink === 0 && <CompanyDetails />}
            </div>
          </div>
        </main>

        {/* Navbar */}
        <nav
          id="main-navbar"
          className="navbar navbar-expand-lg navbar-light bg-white fixed-top p-md-0 pt-3 pb-3 "
        >
          {/* Container wrapper */}
          <div className="container-fluid">
            {/* Toggle button */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            {/* Brand */}
            <a className="navbar-brand d-none d-md-flex" href="!#">
              <svg
                width="57"
                height="43"
                viewBox="0 0 57 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.016 40.4935C24.9819 38.8231 22.766 38.4594 20.3682 39.4023"
                  stroke="#834FF6"
                  stroke-width="2"
                />
                <path
                  d="M27.6426 0C28.828 0 30.0067 0 31.1787 0C38.197 0.740898 45.0268 2.27658 51.6679 4.60704C54.8066 5.71165 56.5713 7.69187 56.962 10.5477C57.0697 11.3559 56.9485 13.7605 56.5982 17.7613C55.0222 35.3004 46.879 49.721 32.1688 61.0231C30 62.7069 27.7773 62.781 25.5007 61.2453C9.94187 50.7785 1.44848 34.4114 0.0205719 12.144C-0.181491 9.05916 1.10498 6.82973 3.87999 5.4557C10.4672 2.19575 18.3881 0.377185 27.6426 0ZM50.1726 7.88046C34.7754 1.75121 19.614 2.17555 4.68823 9.15346C4.12245 9.43635 3.75875 9.98192 3.73854 10.6083C3.05153 30.6799 10.7771 46.5553 26.9152 58.2346C27.7436 58.8408 28.8752 58.8408 29.7238 58.2548C44.7573 47.7475 52.7927 32.8555 53.83 13.5786C53.9647 10.8036 52.7456 8.90425 50.1726 7.88046Z"
                  fill="#133D7A"
                />
                <path
                  d="M20.9743 30.5924C19.7013 30.067 18.9739 28.7536 19.1962 27.3998C20.22 21.1628 23.0825 16.4682 27.7839 13.316C28.3766 12.9119 29.0165 12.7233 29.7035 12.7502C32.1686 12.858 32.2697 13.6865 30.0066 15.2356C29.4408 15.6195 29.0367 16.1449 28.8548 16.7309C27.7233 20.4488 27.0564 24.2611 26.8544 28.1677C26.6927 31.3064 24.7327 32.1146 20.9743 30.5924Z"
                  fill="#B33EED"
                  fill-opacity="0.996"
                />
                <path
                  d="M43.2214 33.9264C40.9313 37.6039 39.49 37.7858 38.8972 34.4719C38.7962 33.9264 39.1397 33.401 39.7055 33.1989C41.2008 32.6601 42.137 31.6902 42.5142 30.2892C42.6556 29.7234 42.3727 29.097 41.807 28.7535C39.3283 27.3122 36.6678 26.4702 33.8255 26.2277C31.8048 26.0526 30.4375 25.7495 29.7236 25.3185C27.7568 24.1465 27.8242 22.5435 29.9257 20.5094C30.3904 20.0648 31.0168 19.8021 31.6836 19.8223C34.4721 19.8897 36.9574 20.698 39.1397 22.2471C41.3624 23.8232 42.9116 25.2983 43.7872 26.6723C45.1208 28.7603 44.9322 31.1783 43.2214 33.9264Z"
                  fill="#EE344E"
                />
                <path
                  d="M27.0163 40.4934C24.9822 38.823 22.7662 38.4593 20.3684 39.4022C19.8026 38.6344 18.3545 37.2469 16.0241 35.2397C11.4978 31.3332 11.2621 27.2717 15.3168 23.0553C15.7816 22.5704 16.408 22.3279 17.0344 22.4087C19.6612 22.7051 18.9472 24.2004 14.8925 26.8945C13.8418 27.5816 13.862 29.1374 14.9127 29.8245C19.6275 32.8554 24.8475 34.1217 30.5726 33.6232C36.6076 33.0844 37.8806 34.8087 34.3916 38.7961C34.0077 39.2204 33.4217 39.5235 32.7145 39.6245L27.0163 40.4934Z"
                  fill="#5460FF"
                />
                <path
                  d="M27.016 40.4935C27.501 43.1877 28.9491 44.2384 31.3604 43.6457C31.9464 43.5042 32.4717 43.5446 32.7546 43.7467C33.2396 44.0835 32.9163 44.4607 31.7847 44.8783C26.3425 46.8719 22.537 45.0466 20.3682 39.4023C22.766 38.4594 24.9819 38.8231 27.016 40.4935Z"
                  fill="#B33EED"
                  fill-opacity="0.996"
                />
              </svg>
            </a>
            <div className="d-none d-md-flex input-group w-auto my-auto">
              Securing Digital World !
            </div>

            <div>
              <form className="input-group w-auto my-auto d-md-none">
                <input
                  autoComplete="off"
                  type="search"
                  className="form-control rounded"
                  placeholder="Search Candidates"
                  style={{ minWidth: 100, marginRight: 3 }}
                />
                <span
                  className="input-group-text border-0"
                  style={{ marginRight: 10 }}
                >
                  <i className="fas fa-search" />
                </span>
                <a
                  className="nav-link dropdown-toggle mt-1 hidden-arrow"
                  href="!#"
                  id="navbarDropdownMenuLink"
                  style={{ marginRight: 10 }}
                >
                  <i className="fas fa-bell" />
                  <span className="badge rounded-pill badge-notification bg-danger"></span>
                </a>
              </form>
            </div>
            <ul className=" d-none d-md-flex navbar-nav ms-auto d-flex flex-row">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle hidden-arrow d-flex flex-column align-items-center"
                  href="!#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/52/52961.png?w=740&t=st=1687700410~exp=1687701010~hmac=5ff00fbf978f941ad752c7de7725dec3e550dae65449382afd5790084cacbeb5"
                    className=""
                    height="28"
                    alt="Avatar"
                    loading="lazy"
                  />
                  <span className=" small text-dark">Search Candidate</span>
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle hidden-arrow d-flex flex-column align-items-center"
                  href="!#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/52/52782.png?w=740&t=st=1687700672~exp=1687701272~hmac=886d0307311a5f26e4084fdd44a23f5f666881922f62f57ed2f5b8c3bcda9333"
                    className=""
                    height="28"
                    alt="Avatar"
                    loading="lazy"
                  />
                  <span className=" small text-dark">Post New Job</span>
                </a>
              </li>

              {/* Avatar */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle hidden-arrow d-flex flex-column align-items-center"
                  href="!#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/236/236831.png?w=740&t=st=1687699392~exp=1687699992~hmac=efc652fa17b04d06bdffa783beb2515dff59d4853d7c044c6f8965bb47d5598c"
                    className="rounded-circle"
                    height="28"
                    alt="Avatar"
                    loading="lazy"
                  />
                  <span className="dropdown-profile small text-dark">
                    My profile <i className="fas fa-caret-down"></i>
                  </span>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="!#">
                      <i className="fas fa-user"></i> View profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="!#">
                      <i className="fas fa-edit"></i> Edit Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="!#">
                      <i className="fas fa-lock"></i> Security
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="!#">
                      <i className="fas fa-shield-alt"></i> Privacy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="!#">
                      <i className="fas fa-sign-out-alt"></i> Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
      </header>
      {/*Main Navigation*/}

      {/*Main layout*/}
      <main style={{ marginTop: "58px" }}>
        <div className="container pt-4"></div>
      </main>
      {/*Main layout*/}
    </>
  );
};

export default Dashboard;
