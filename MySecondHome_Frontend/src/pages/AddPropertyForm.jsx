import { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddPropertyForm = () => {
  const [locations, setLocations] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const navigate = useNavigate();

  const owner = JSON.parse(sessionStorage.getItem("active-owner"));

  const [propertyRequest, setPropertyRequest] = useState({
    name: "",
    description: "",
    address: "",
    locationId: "",
    ownerId: owner?.id || "",
  });

  // ================= FETCH LOCATIONS =================

  const retrieveAllLocation = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/location/fetch/all"
    );
    return response.data;
  };

  useEffect(() => {
    const getAllLocation = async () => {
      const resLocation = await retrieveAllLocation();
      if (resLocation) {
        setLocations(resLocation.locations);
      }
    };

    getAllLocation();
  }, []);

  // ================= INPUT HANDLER =================

  const handleInput = (e) => {
    setPropertyRequest({
      ...propertyRequest,
      [e.target.name]: e.target.value,
    });
  };

  // ================= FORM SUBMIT =================

  const saveProperty = async (e) => {
    e.preventDefault();

    // ---------- SIMPLE VALIDATION ----------

    if (
      !propertyRequest.name ||
      !propertyRequest.description ||
      !propertyRequest.address ||
      !propertyRequest.locationId ||
      !selectedImage
    ) {
      toast.error("Please fill all fields and select image!", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    // ---------- FORM DATA ----------

    const formData = new FormData();
    formData.append("name", propertyRequest.name);
    formData.append("description", propertyRequest.description);
    formData.append("address", propertyRequest.address);
    formData.append("locationId", propertyRequest.locationId);
    formData.append("image", selectedImage);
    formData.append("ownerId", owner.id);

    try {
      const resp = await axios.post(
        "http://localhost:8080/api/property/add",
        formData
      );

      const response = resp.data;

      if (response.success) {
        toast.success(response.responseMessage, {
          position: "top-center",
          autoClose: 1500,
        });

        setTimeout(() => {
          navigate("/home");
        }, 1800);
      } else {
        toast.error(response.responseMessage, {
          position: "top-center",
          autoClose: 1500,
        });
      }
    } catch (error) {
      toast.error("Server error. Try again later!", {
        position: "top-center",
        autoClose: 1500,
      });
    }
  };

  // ================= UI =================

  return (
    <div>
      <div className="mt-2 d-flex align-items-center justify-content-center mb-4">
        <div className="card form-card custom-bg" style={{ width: "60rem" }}>
          <div className="container-fluid">

            <div
              className="card-header bg-color custom-bg-text mt-2 text-center"
              style={{ borderRadius: "1em", height: "45px" }}
            >
              <h5 className="card-title">Add Property</h5>
            </div>

            <div className="card-body text-color">
              <form className="row g-3" onSubmit={saveProperty}>

                {/* Property Name */}
                <div className="col-md-6 mb-3">
                  <label className="form-label"><b>Property Name</b></label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    required
                    value={propertyRequest.name}
                    onChange={handleInput}
                  />
                </div>

                {/* Description */}
                <div className="col-md-6 mb-3">
                  <label className="form-label"><b>Description</b></label>
                  <textarea
                    className="form-control"
                    name="description"
                    required
                    value={propertyRequest.description}
                    onChange={handleInput}
                  />
                </div>

                {/* Location */}
                <div className="col-md-6 mb-3">
                  <label className="form-label"><b>Location</b></label>
                  <select
                    name="locationId"
                    required
                    className="form-control"
                    onChange={handleInput}
                  >
                    <option value="">Select Location</option>
                    {locations.map((location) => (
                      <option key={location.id} value={location.id}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Address */}
                <div className="col-md-6 mb-3">
                  <label className="form-label"><b>Address</b></label>
                  <textarea
                    className="form-control"
                    name="address"
                    required
                    value={propertyRequest.address}
                    onChange={handleInput}
                  />
                </div>

                {/* Image */}
                <div className="col-md-6 mb-3">
                  <label className="form-label"><b>Property Image</b></label>
                  <input
                    className="form-control"
                    type="file"
                    required
                    onChange={(e) => setSelectedImage(e.target.files[0])}
                  />
                </div>

                {/* Button */}
                <div className="d-flex align-items-center justify-content-center mb-2">
                  <button
                    type="submit"
                    className="btn bg-color custom-bg-text"
                  >
                    <b>Add Property</b>
                  </button>
                </div>

              </form>

              <ToastContainer />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyForm;
