import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomizedTables from "./Table";
import AddData from "./AddData";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../../Utils/useAuth";
import { CircularProgress } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
const TABNAMES = ["Bed", "Oxygen", "Blood", "Medicine"];
export default function DataDashBoard() {
  const [value, setValue] = React.useState(0);
  const [isloading, setisloading] = React.useState(false);
  const { user } = useAuth();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [data, setdata] = useState([]);
  const getData = async () => {
    try {
      setisloading(true);
      const response = await axios.get(
        `/api/user/${TABNAMES[value]}/${user.type}`
      );
      if (response.data.success) {
        setisloading(false);
        setdata(response.data.data);
      }
    } catch (error) {
      setisloading(false);
      if (error.response && error.response.data) {
        return toast.error(error.response.data.error);
      }
    }
  };
  useEffect(() => {
    getData();
  }, [user, value]);
  if (user)
    return (
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: "100vh",
          padding: "2px",
          margin: "10px",
        }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab label="Bed Data" {...a11yProps(0)} />
          <Tab label="Oxygen Cylinders" {...a11yProps(1)} />
          <Tab label="Blood" {...a11yProps(2)} />
          <Tab label="Medicine" {...a11yProps(3)} />
          <Tab label="Talk with Patients" {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <AddData getData={getData} type={"Bed"} />
          <CustomizedTables isloading={isloading} data={data} type={"Bed"} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AddData getData={getData} type={"Oxygen"} />
          <CustomizedTables isloading={isloading} data={data} type={"Oxygen"} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <AddData getData={getData} type={"Blood"} />
          <CustomizedTables isloading={isloading} data={data} type={"Blood"} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <AddData getData={getData} type={"Medicine"} />
          <CustomizedTables
            isloading={isloading}
            data={data}
            type={"Medicine"}
          />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <AddData getData={getData} type={"Chat"} />
          <CustomizedTables isloading={isloading} data={data} type={"Chat"} />
        </TabPanel>
      </Box>
    );
  else return <CircularProgress />;
}
