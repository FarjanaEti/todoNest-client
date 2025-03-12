import React, { useState, useEffect } from "react";
import { AppBar, Box, CssBaseline, Drawer, Toolbar, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import TodayIcon from "@mui/icons-material/Today";
import InboxIcon from "@mui/icons-material/Inbox";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Education from "./Pages/Education";
import Work from "./Pages/Work";
import Personal from "./Pages/Personal";


const drawerWidth = 300;

const menuItems = [
  { text: "Inbox", icon: <InboxIcon /> },
  { text: "Today", icon: <TodayIcon /> },
  { text: "Upcoming", icon: <CheckCircleOutlineIcon /> },
  { text: "Tasks", icon: <AssignmentIcon /> },
];

// Dummy selected projects (Replace this with user-selected options from localStorage or API)
const userSelectedProjects = JSON.parse(localStorage.getItem("selectedProjects")) || [];

export default function DashboardLayout() {
  const [selectedItem, setSelectedItem] = useState("Inbox");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    setFilteredProjects(userSelectedProjects);
  }, []);

  return (
    <Box sx={{ display: "flex", ml: 40, minHeight: "100vh", backgroundColor: "#F4F7FC" }}>
      <CssBaseline />

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            mt: 8.5,
            ml: 20,
            boxSizing: "border-box",
            backgroundColor: "#ffffff",
            padding: "16px",
          },
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}>
          TodoNest Dashboard
        </Typography>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              selected={selectedItem === item.text}
              onClick={() => setSelectedItem(item.text)}
              sx={{ borderRadius: 2, mb: 1 }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider />

        {/* My Projects */}
        <Typography variant="subtitle2" sx={{ pl: 2, pt: 2, fontWeight: "bold", color: "gray" }}>
          My Projects
        </Typography>
        <List>
          {filteredProjects.map((text) => (
            <ListItem button key={text} onClick={() => setSelectedItem(text)} sx={{ borderRadius: 2, mb: 1 }}>
              <ListItemIcon>
                <FormatListBulletedIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          {selectedItem}
        </Typography>

        {/* Render Components Based on Selection */}
        {selectedItem === "Education 📖" && <Education></Education>}
        {selectedItem === "Work 🎯" && <Work></Work>}
        {selectedItem === "Personal 📌" && <Personal></Personal>}
        <Typography variant="body1" color="text.secondary">
          Content for {selectedItem} will be displayed here.
        </Typography>
      </Box>
    </Box>
  );
}
