// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import { Button, Modal } from "react-bootstrap";

// const UserProfilePage = () => {
//   const { userId } = useParams();
//   const navigate = useNavigate();

//   const [user, setUser] = useState({
//     id: "",
//     firstName: "",
//     lastName: "",
//     emailId: "",
//     phoneNo: "",
//     role: "",
//     address: {
//       id: "",
//       street: "",
//       city: "",
//       pincode: "",
//     },
//     walletAmount: "",
//     status: "",
//     guest: null,
//     owner: null,
//   });

//   const [showModal, setShowModal] = useState(false);
//   const handleClose = () => setShowModal(false);
//   const handleShow = () => setShowModal(true);

//   const [selectedImage, setSelectImage] = useState(null);

//   const [profileRequest, setProfileRequest] = useState({
//     fullName: "",
//     age: "",
//     profession: "",
//     permanentAddress: "",
//     userId: userId,
//   });

//   const handleInput = (e) => {
//     setProfileRequest({ ...profileRequest, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     const getUser = async () => {
//       const response = await axios.get(
//         "http://localhost:8080/api/user/fetch/user-id?userId=" + userId
//       );
//       setUser(response.data.users[0]);
//     };

//     getUser();
//   }, [userId]);

//   const saveProfileData = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("fullName", profileRequest.fullName);
//     formData.append("age", profileRequest.age);
//     formData.append("profession", profileRequest.profession);
//     formData.append("permanentAddress", profileRequest.permanentAddress);
//     formData.append("govermentIdImageProof", selectedImage);
//     formData.append("userId", profileRequest.userId);

//     axios
//       .put("http://localhost:8080/api/user/profile/add", formData)
//       .then((resp) => {
//         if (resp.data.success) {
//           toast.success(resp.data.responseMessage, { autoClose: 1000 });
//           setTimeout(() => window.location.reload(), 1500);
//         } else {
//           toast.error(resp.data.responseMessage, { autoClose: 1000 });
//         }
//       })
//       .catch(() => {
//         toast.error("Server error", { autoClose: 1000 });
//       });
//   };

//   return (
//     <div className="container-fluid mb-2">
//       <div className="d-flex justify-content-center mt-3">
//         <div style={{ width: "900px" }} className="card-body">

//           <h3 className="text-center mb-4">My Profile</h3>

//           <div className="row">
//             <div className="col-md-4">
//               <p><b>First Name:</b> {user.firstName}</p>
//             </div>
//             <div className="col-md-4">
//               <p><b>Last Name:</b> {user.lastName}</p>
//             </div>
//             <div className="col-md-4">
//               <p><b>Email Id:</b> {user.emailId}</p>
//             </div>
//           </div>

//           <div className="row mt-3">
//             {user.role !== "Admin" && (
//               <div className="col-md-4">
//                 <p><b>Contact:</b> {user.phoneNo}</p>
//               </div>
//             )}

//             {user.role !== "Admin" && (
//               <div className="col-md-4">
//                 <p>
//                   <b>Address:</b>{" "}
//                   {user.address.street}, {user.address.city}, {user.address.pincode}
//                 </p>
//               </div>
//             )}

//             <div className="col-md-4">
//               <p><b>Wallet Amount:</b> ₹ {user.walletAmount}</p>
//             </div>

//             <div className="col-md-4">
//               <p><b>Role:</b> {user.role}</p>
//             </div>
//           </div>

//           <div className="row mt-4">
//             {user.guest || user.owner ? (
//               <>
//                 <h4 className="mb-3">Government Proof Details</h4>

//                 <img
//                   src={`http://localhost:8080/api/property/${
//                     (user.guest && user.guest.govermentIdImageProof) ||
//                     (user.owner && user.owner.govermentIdImageProof)
//                   }`}
//                   style={{ maxWidth: "350px" }}
//                   alt="proof"
//                 />

//                 <p><b>Full Name:</b> {(user.guest || user.owner).fullName}</p>
//                 <p><b>Age:</b> {(user.guest || user.owner).age}</p>
//                 <p><b>Profession:</b> {(user.guest || user.owner).profession}</p>
//                 <p><b>Permanent Address:</b> {(user.guest || user.owner).permanentAddress}</p>
//               </>
//             ) : (
//               <div className="text-center mt-4">
//                 <button className="btn bg-color custom-bg-text" onClick={handleShow}>
//                   Add Proof Details
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* MODAL */}
//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Proof Details</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <form>

//             <input
//               className="form-control mb-2"
//               name="fullName"
//               placeholder="Full Name"
//               required
//               onChange={handleInput}
//             />

//             <input
//               className="form-control mb-2"
//               name="age"
//               type="number"
//               placeholder="Age"
//               onChange={handleInput}
//             />

//             <input
//               className="form-control mb-2"
//               name="profession"
//               placeholder="Profession"
//               required
//               onChange={handleInput}
//             />

//             <textarea
//               className="form-control mb-2"
//               name="permanentAddress"
//               placeholder="Permanent Address"
//               required
//               onChange={handleInput}
//             />

//             <input
//               type="file"
//               className="form-control mb-3"
//               required
//               onChange={(e) => setSelectImage(e.target.files[0])}
//             />

//             <button className="btn bg-color custom-bg-text w-100" onClick={saveProfileData}>
//               Save
//             </button>

//             <ToastContainer />
//           </form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default UserProfilePage;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Button, Modal } from "react-bootstrap";

const UserProfilePage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    shopName: "",
    emailId: "",
    phoneNo: "",
    role: "",
    address: {
      id: "",
      street: "",
      city: "",
      pincode: "",
    },
    walletAmount: "",
    status: "",
    guest: null,
  });

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [selectedImage, setSelectImage] = useState(null);

  const [profileRequest, setProfileRequest] = useState({
    fullName: "",
    age: "",
    profession: "",
    permanentAddress: "",
    userId: userId,
  });

  const handleInput = (e) => {
    setProfileRequest({ ...profileRequest, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const getUser = async () => {
      const userRes = await retrieveUser();
      if (userRes) {
        setUser(userRes.users[0]);
      }
    };

    getUser();
  }, [userId]);

  const retrieveUser = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/user/fetch/user-id?userId=" + userId
    );
    return response.data;
  };

  const showGuestAddModal = () => {
    handleShow();
  };

  const saveProfileData = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", profileRequest.fullName);
    formData.append("age", profileRequest.age);
    formData.append("profession", profileRequest.profession);
    formData.append("permanentAddress", profileRequest.permanentAddress);
    formData.append("govermentIdImageProof", selectedImage);
    formData.append("userId", profileRequest.userId);

    axios
      .put(
        "http://localhost:8080/api/user/profile/add",
        formData
        // , {
        //   headers: {
        //     Authorization: "Bearer " + employer_jwtToken, // Replace with your actual JWT token
        //   },
        // }
      )
      .then((resp) => {
        let response = resp.data;

        if (response.success) {
          toast.success(response.responseMessage, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          setTimeout(() => {
            window.location.reload(true);
          }, 2000); // Redirect after 3 seconds
        } else if (!response.success) {
          toast.error(response.responseMessage, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            window.location.reload(true);
          }, 2000); // Redirect after 3 seconds
        } else {
          toast.error("It Seems Server is down!!!", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          // setTimeout(() => {
          //   window.location.reload(true);
          // }, 2000); // Redirect after 3 seconds
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("It seems server is down", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // setTimeout(() => {
        //   window.location.reload(true);
        // }, 2000); // Redirect after 3 seconds
      });
  };

  return (
    <div className="container-fluid mb-2">
      <div className="container-fluid mb-2">
        <div className="d-flex align-items-center justify-content-center ms-5 mt-1 me-5 mb-3">
          <div
            className="h-100"
            style={{
              width: "900px",
            }}
          >
            <div className="card-body text-color">
              <div className="text-center header-logo-color">
                <h3 className="mt3">My Profile</h3>
              </div>

              {user.role === "Service Center" && (
                <div className="text-color">
                  <h4 className="mt-4">Shop Name: {user.shopName}</h4>
                </div>
              )}
              <div className="row mt-4">
                <div className="col-md-4">
                  <p className="mb-2">
                    <b>First Name:</b> {user.firstName} 
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="mb-2">
                    <b>Last Name:</b> {user.lastName} 
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="mb-2">
                    <b>Email Id:</b> {user.emailId} 
                  </p>
                </div>
              </div>
              <div className="row mt-4">
                {user.role !== "Admin" && (
                  <div className="col-md-4">
                    <p className="mb-2">
                      <b>Contact:</b> {user.phoneNo} 
                    </p>
                  </div>
                )}
                {user.role !== "Admin" && (
                  <div className="col-md-4">
                    <p className="mb-2">
                      <b>Address:</b>{" "}
                      {user.address.street +
                        ", " +
                        user.address.city +
                        ", " +
                        user.address.pincode} 
                    </p>
                  </div>
                )}
                <div className="col-md-4">
                  <p className="mb-2">
                    <b>Wallet Amount:</b> &#8377; {user.walletAmount}
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="mb-2">
                    <b>Role:</b> {user.role}
                  </p>
                </div>
              </div>

              {/* Guest Details or Add Guest Details Button */}
              <div className="row mt-4">
                {user.guest || user.owner ? (
                  <>
                    <h4 className="mt-4 ">User Government Proof Details</h4>

                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        src={`http://localhost:8080/api/property/${
                          (user.guest && user.guest.govermentIdImageProof) ||
                          (user.owner && user.owner.govermentIdImageProof)
                        }`}
                        className="d-block w-100"
                        alt="Government ID Proof"
                        style={{
                          maxWidth: "350px",
                          display: "inline-block",
                        }}
                      />
                    </div>

                    <div className="col-md-4">
                      <p className="mb-4">
                        <b>Full Name:</b>{" "}
                        {(user.guest && user.guest.fullName) ||
                          (user.owner && user.owner.fullName)}
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="mb-4">
                        <b>Age:</b>{" "}
                        {(user.guest && user.guest.age) ||
                          (user.owner && user.owner.age)}
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="mb-4">
                        <b>Profession:</b>{" "}
                        {(user.guest && user.guest.profession) ||
                          (user.owner && user.owner.profession)}
                      </p>
                    </div>
                    <div className="col-md-12">
                      <p className="mb-2">
                        <b>Permanent Address:</b>{" "}
                        {(user.guest && user.guest.permanentAddress) ||
                          (user.owner && user.owner.permanentAddress)}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="text-center mt-4">
                    <button
                      className="btn bg-color custom-bg-text"
                      onClick={showGuestAddModal}
                    >
                      Add Proof Details
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton className="bg-color custom-bg-text">
          <Modal.Title
            style={{
              borderRadius: "1em",
            }}
          >
            Add Detail!!!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ms-3 mt-3 mb-3 me-3">
            <form>
              <div class="mb-3">
                <label for="title" class="form-label">
                  <b>Full Name</b>
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="fullName"
                  required
                  value={profileRequest.fullName}
                  onChange={handleInput}
                />
              </div>

              <div class="mb-3">
                <label for="title" class="form-label">
                  <b>Age</b>
                </label>
                <input
                  type="number"
                  class="form-control"
                  name="age"
                  value={profileRequest.age}
                  onChange={handleInput}
                />
              </div>

              <div class="mb-3">
                <label for="title" class="form-label">
                  <b>Profession</b>
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="profession"
                  required
                  value={profileRequest.profession}
                  onChange={handleInput}
                />
              </div>

              <div class="mb-3">
                <label for="title" class="form-label">
                  <b>Permanent Address</b>
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  name="permanentAddress"
                  required
                  value={profileRequest.permanentAddress}
                  onChange={handleInput}
                />
              </div>

              <div className=" mb-3">
                <label for="formFile" class="form-label">
                  <b> Select Government Proof Image</b>
                </label>
                <input
                  class="form-control"
                  type="file"
                  id="image"
                  name="image"
                  
                  onChange={(e) => setSelectImage(e.target.files[0])}
                  required
                />
              </div>

              <div className="d-flex aligns-items-center justify-content-center mb-2">
                <button
                  type="submit"
                  onClick={saveProfileData}
                  class="btn bg-color custom-bg-text"
                >
                  Add Detail
                </button>
                <ToastContainer />
              </div>

              <ToastContainer />
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserProfilePage; 