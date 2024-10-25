import MemberSearchBox from "./MemberSearchBox";
import "./Styles/general.css";
import { Button, Form, Modal } from "react-bootstrap";
import { useState, } from "react";
import axios from "axios";
import GeneralMemberCard from "./GeneralMemberCrad";

export default function GeneralMember() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    facebookLink: "",
    bloodGroup: "",
    reference: "",
    image: "",
    state: "",
    district: "",
    subDistrict: "",
    village: "",
  });

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      facebookLink: "",
      bloodGroup: "",
      reference: "",
      image: "",
      state: "",
      district: "",
      subDistrict: "",
      village: "",
    });
 
    setShow(false);
  };


  const handleAdd = async () => {
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phoneNumber", formData.phoneNumber);
    data.append("facebookLink", formData.facebookLink);
    data.append("bloodGroup", formData.bloodGroup);
    data.append("reference", formData.reference);
    data.append("image", formData.image);
    data.append(
      "address",
      JSON.stringify({
        state: formData.state,
        district: formData.district,
        subDistrict: formData.subDistrict,
        village: formData.village,
      })
    );

    try {
      await axios.post(`http://localhost:3000/organization/general`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
      handleClose();
      alert("Upload successful");
    } catch (error) {
      if (error.response) {
        console.log("Response error:", error.response.data);
      } else if (error.request) {
        console.log("Request error:", error.request);
      } else {
        console.log("Error", error.message);
      }
    }
  };

  return (
    <div>
      <div className="my-5 general-div-header">
        <div>
          <h4 className="search-heading">
            If you are the member of this Organization. you can search yourself.
          </h4>
          <MemberSearchBox />
        </div>

        <div className="register-header">
          <h4>you can join us.</h4>
          <Button variant="primary" className="ms-3" onClick={handleShow}>
            Register
          </Button>
        </div>
      </div>

      <div className="straight-line"></div>

   
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>General Member</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="enter name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="enter email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  placeholder="0172025****"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formFacebookLink">
                <Form.Label>Facebook Link</Form.Label>
                <Form.Control
                  type="text"
                  name="facebookLink"
                  value={formData.facebookLink}
                  onChange={(e) =>
                    setFormData({ ...formData, facebookLink: e.target.value })
                  }
                  placeholder="enter facebook link"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBloodGroup">
                <Form.Label>Blood Group</Form.Label>
                <Form.Control
                  as="select"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={(e) =>
                    setFormData({ ...formData, bloodGroup: e.target.value })
                  }
                  required
                >
                  <option value="">Select</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formDesignation">
                <Form.Label>Reference</Form.Label>
                <Form.Control
                  type="text"
                  name="reference"
                  value={formData.reference}
                  onChange={(e) =>
                    setFormData({ ...formData, reference: e.target.value })
                  }
                  placeholder="enter reference"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formImage" className="mt-3">
                <Form.Label>Image:</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.files[0] })
                  }
                />
              </Form.Group>

              <Form.Group controlId="formState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={(e) =>
                    setFormData({ ...formData, state: e.target.value })
                  }
                  required
                  placeholder="enter state"
                />
              </Form.Group>

              <Form.Group controlId="formDistrict">
                <Form.Label>District</Form.Label>
                <Form.Control
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={(e) =>
                    setFormData({ ...formData, district: e.target.value })
                  }
                  required
                  placeholder="enter district"
                />
              </Form.Group>

              <Form.Group controlId="formSubDistrict">
                <Form.Label>Upazila</Form.Label>
                <Form.Control
                  type="text"
                  name="subDistrict"
                  value={formData.subDistrict}
                  onChange={(e) =>
                    setFormData({ ...formData, subDistrict: e.target.value })
                  }
                  required
                  placeholder="enter upazila"
                />
              </Form.Group>

              <Form.Group controlId="formVillage">
                <Form.Label>Village</Form.Label>
                <Form.Control
                  type="text"
                  name="village"
                  value={formData.village}
                  onChange={(e) =>
                    setFormData({ ...formData, village: e.target.value })
                  }
                  required
                  placeholder="enter village"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="success" onClick={handleAdd}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      
      <div> <GeneralMemberCard/></div>


    </div>
  );
}
