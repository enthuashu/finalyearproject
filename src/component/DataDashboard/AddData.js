import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { toast } from "react-toastify";
// import { useHistory } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Utils/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddData({ type, getData }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setdata] = useState({});
  //   const history = useHistory();
  const { user } = useAuth();
  const setDataFunction = () => {
    if (type === "Bed") {
      setdata({
        "No of Beds": "",
        "Ward Type": "",
        "Bed Size": "",
        "ICU Facility": "",
        "Current status": "",
      });
    } else if (type === "Oxygen") {
      setdata({
        "No of Cylinders": "",
        "Cylinder Size(in Liters)": "",
        "Oxygen Level": "",
        "Working pressure": "",
        "Current status": "",
      });
    } else if (type === "Blood") {
      setdata({
        "Blood Type": "",
        "Blood Units": "",
        "Haemoglobin level": "",
        "White Blood Cell (WBC)": "",
        "Red Blood Cell (RBC)": "",
        "Current status": "",
      });
    } else if (type === "Medicine") {
      setdata({
        Medicine: "",
        "Preferred for": "",
        "No of Units": "",
        Price: "",
        "Current status": "",
      });
    }
  };
  useEffect(() => {
    setDataFunction();
  }, [type]);
  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setdata({
      ...data,
      [name]: value,
    });
  };
  const PostData = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`/api/user/${type}`, data)
        .then((res) => {
          if (res.data.success) {
            getData();
            toast.success("Data uploaded successfully");
            setDataFunction();
            handleClose();
          }
        })
        .catch((err) => {
          toast.error(err.response.data.error, { position: "bottom-right" });
        });
    } catch (err) {
      console.log(err);
      return toast.error("Some thing went wrong");
    }
  };
  return (
    <div>
      <button
        hidden={user.type === "patient" ? true : false}
        className="p-2 m-2"
        type="button"
        style={{ backgroundColor: "red", color: "white" }}
        onClick={handleOpen}
      >
        Add {type}
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={PostData}>
            {type === "Bed" ? (
              <>
                <div class="row px-3">
                  <label class="mb-1">
                    <h6 class="mb-0 text-sm">Enter No. of available beds</h6>
                  </label>
                  <input
                    required
                    class="mb-4"
                    type="text"
                    onChange={handleInputs}
                    value={data["No of Beds"]}
                    name="No of Beds"
                    placeholder="e.g. 5 beds"
                  />
                </div>
                <div class="row px-3">
                  <label class="mb-1">Select Ward</label>
                  <select
                    onChange={handleInputs}
                    value={data["Ward Type"]}
                    name="Ward Type"
                    required
                    class="mb-4 p-2"
                  >
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value=""
                    >
                      Select Ward
                    </option>
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value="Emergency"
                    >
                      Emergency
                    </option>
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value="General"
                    >
                      General
                    </option>
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value="ICU"
                    >
                      ICU
                    </option>
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value="Deluxe"
                    >
                      Deluxe
                    </option>
                  </select>
                </div>
                <div class="row px-3">
                  <label class="mb-1">Select Bed size</label>
                  <select
                    onChange={handleInputs}
                    value={data["Bed Size"]}
                    name="Bed Size"
                    required
                    class="mb-4 p-2"
                  >
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value=""
                    >
                      Select Bed Size
                    </option>
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value="Single Bed"
                    >
                      Single Bed
                    </option>
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value="Double Bed"
                    >
                      Double Bed
                    </option>
                  </select>
                </div>
                <div class="row px-3">
                  <label class="mb-1">Is ICU Facility?</label>
                  <select
                    onChange={handleInputs}
                    value={data["ICU Facility"]}
                    name="ICU Facility"
                    required
                    class="mb-4 p-2"
                  >
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value=""
                    >
                      Have ICU Facility?
                    </option>
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value="Yes"
                    >
                      Yes
                    </option>

                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value="No"
                    >
                      No
                    </option>
                  </select>
                </div>
                <div class="row px-3">
                  <label class="mb-1">Current status</label>
                  <select
                    onChange={handleInputs}
                    value={data["Current status"]}
                    name="Current status"
                    required
                    class="mb-4 p-2"
                  >
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value=""
                    >
                      Current status
                    </option>
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value="Available"
                    >
                      Available
                    </option>
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value="Out of stock"
                    >
                      Out of stock
                    </option>
                  </select>
                </div>
              </>
            ) : type === "Oxygen" ? (
              <>
                <div class="row px-3">
                  <label class="mb-1">
                    <h6 class="mb-0 text-sm">No of Cylinders</h6>
                  </label>
                  <input
                    required
                    class="mb-4"
                    type="text"
                    onChange={handleInputs}
                    value={data["No of Cylinders"]}
                    name="No of Cylinders"
                    placeholder="e.g. 5 cylinders"
                  />
                </div>
                <div class="row px-3">
                  <label class="mb-1">
                    <h6 class="mb-0 text-sm">Cylinder Size(in Liters)</h6>
                  </label>
                  <input
                    required
                    class="mb-4"
                    type="text"
                    onChange={handleInputs}
                    value={data["Cylinder Size(in Liters)"]}
                    name="Cylinder Size(in Liters)"
                    placeholder="e.g. 5 litre"
                  />
                </div>
                <div class="row px-3">
                  <label class="mb-1">
                    <h6 class="mb-0 text-sm">Oxygen Level</h6>
                  </label>
                  <input
                    required
                    class="mb-4"
                    type="text"
                    onChange={handleInputs}
                    value={data["Oxygen Level"]}
                    name="Oxygen Level"
                    placeholder="e.g. 5 oxygens"
                  />
                </div>
                <div class="row px-3">
                  <label class="mb-1">
                    <h6 class="mb-0 text-sm">Working pressure</h6>
                  </label>
                  <input
                    required
                    class="mb-4"
                    type="text"
                    onChange={handleInputs}
                    value={data["Working pressure"]}
                    name="Working pressure"
                    placeholder="e.g. 5 pascal"
                  />
                </div>

                <div class="row px-3">
                  <label class="mb-1">Current status</label>
                  <select
                    onChange={handleInputs}
                    value={data["Current status"]}
                    name="Current status"
                    required
                    class="mb-4 p-2"
                  >
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value=""
                    >
                      Current status
                    </option>
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value="Available"
                    >
                      Available
                    </option>
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value="Out of stock"
                    >
                      Out of stock
                    </option>
                  </select>
                </div>
              </>
            ) : type === "Blood" ? (
              <>
                <div class="row px-3">
                  <label class="mb-1">Blood Group</label>
                  <select
                    onChange={handleInputs}
                    value={data["Blood Type"]}
                    name="Blood Type"
                    required
                    class="mb-4 p-2"
                  >
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value=""
                    >
                      Choose Blood type
                    </option>
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value="O"
                    >
                      O
                    </option>
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value="A"
                    >
                      A
                    </option>
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value="B"
                    >
                      B
                    </option>
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value="AB"
                    >
                      AB
                    </option>
                  </select>
                </div>

                <div class="row px-3">
                  <label class="mb-1">
                    <h6 class="mb-0 text-sm">Blood Units</h6>
                  </label>
                  <input
                    required
                    class="mb-4"
                    type="text"
                    onChange={handleInputs}
                    value={data["Blood Units"]}
                    name="Blood Units"
                    placeholder="e.g. 5 litre"
                  />
                </div>
                <div class="row px-3">
                  <label class="mb-1">
                    <h6 class="mb-0 text-sm">Haemoglobin level</h6>
                  </label>
                  <input
                    required
                    class="mb-4"
                    type="text"
                    onChange={handleInputs}
                    value={data["Haemoglobin level"]}
                    name="Haemoglobin level"
                    placeholder="e.g. 5 oxygens"
                  />
                </div>
                <div class="row px-3">
                  <label class="mb-1">
                    <h6 class="mb-0 text-sm">White Blood Cell (WBC)</h6>
                  </label>
                  <input
                    required
                    class="mb-4"
                    type="text"
                    onChange={handleInputs}
                    value={data["White Blood Cell (WBC)"]}
                    name="White Blood Cell (WBC)"
                    placeholder="e.g. 5 pascal"
                  />
                </div>
                <div class="row px-3">
                  <label class="mb-1">
                    <h6 class="mb-0 text-sm">Red Blood Cell (RBC)</h6>
                  </label>
                  <input
                    required
                    class="mb-4"
                    type="text"
                    onChange={handleInputs}
                    value={data["Red Blood Cell (RBC)"]}
                    name="Red Blood Cell (RBC)"
                    placeholder="e.g. 5 pascal"
                  />
                </div>
                <div class="row px-3">
                  <label class="mb-1">Current status</label>
                  <select
                    onChange={handleInputs}
                    value={data["Current status"]}
                    name="Current status"
                    required
                    class="mb-4 p-2"
                  >
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value=""
                    >
                      Current status
                    </option>
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value="Available"
                    >
                      Available
                    </option>
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value="Out of stock"
                    >
                      Out of stock
                    </option>
                  </select>
                </div>
              </>
            ) : type === "Medicine" ? (
              <>
                <div class="row px-3">
                  <label class="mb-1">
                    <h6 class="mb-0 text-sm">Medicine Name</h6>
                  </label>
                  <input
                    required
                    class="mb-4"
                    type="text"
                    onChange={handleInputs}
                    value={data["Medicine"]}
                    name="Medicine"
                    placeholder="e.g. Paracetomol"
                  />
                </div>
                <div class="row px-3">
                  <label class="mb-1">
                    <h6 class="mb-0 text-sm">Preferred for</h6>
                  </label>
                  <input
                    required
                    class="mb-4"
                    type="text"
                    onChange={handleInputs}
                    value={data["Preferred for"]}
                    name="Preferred for"
                    placeholder="e.g. Fever,Cough, Cold"
                  />
                </div>
                <div class="row px-3">
                  <label class="mb-1">
                    <h6 class="mb-0 text-sm">No of Units</h6>
                  </label>
                  <input
                    required
                    class="mb-4"
                    type="text"
                    onChange={handleInputs}
                    value={data["No of Units"]}
                    name="No of Units"
                    placeholder="e.g. 5 pascal"
                  />
                </div>
                <div class="row px-3">
                  <label class="mb-1">
                    <h6 class="mb-0 text-sm">Price</h6>
                  </label>
                  <input
                    required
                    class="mb-4"
                    type="text"
                    onChange={handleInputs}
                    value={data["Price"]}
                    name="Price"
                    placeholder="e.g. 5 pascal"
                  />
                </div>
                <div class="row px-3">
                  <label class="mb-1">Current status</label>
                  <select
                    onChange={handleInputs}
                    value={data["Current status"]}
                    name="Current status"
                    required
                    class="mb-4 p-2"
                  >
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value=""
                    >
                      Current status
                    </option>
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value="Available"
                    >
                      Available
                    </option>
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value="Out of stock"
                    >
                      Out of stock
                    </option>
                  </select>
                </div>
              </>
            ) : (
              <>
                <div class="row px-3">
                  <label class="mb-1">Current status</label>
                  <select
                    onChange={handleInputs}
                    value={data["Current status"]}
                    name="Current status"
                    required
                    class="mb-4 p-2"
                  >
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value=""
                    >
                      Current status
                    </option>
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value="Available"
                    >
                      Available
                    </option>
                    <option
                      style={{ fontSize: "20px" }}
                      className="p-2"
                      value="Out of stock"
                    >
                      Out of stock
                    </option>
                  </select>
                </div>
              </>
            )}
            <button
              type="submit"
              className="p-2 m-2"
              style={{ backgroundColor: "greenyellow" }}
            >
              Submit Data
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
