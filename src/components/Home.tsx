import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import TerminalIcon from "@mui/icons-material/Terminal";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import GitHubIcon from "@mui/icons-material/GitHub";
import HotelIcon from "@mui/icons-material/Hotel";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Toolbar from "@mui/material/Toolbar";
import DownloadIcon from "@mui/icons-material/Download";
import { Container, Typography, Alert } from "@mui/material";
const drawerWidth = 220;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}
const internalLinks = [
  {
    link: "#",
    title: "Usage",
  },
  {
    link: "#commands",
    title: "Commands",
  },
  {
    link: "",
    title: "Download",
  },
];
const externalLinks = [
  {
    link: "https://github.com/GLTdotNS/seethem",
    title: "Source code",
  },
  {
    link: "https://www.canislupus.dev/",
    title: "Developer",
  },
];
export default function Home(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography>Menu</Typography>
      </Toolbar>
      <Divider />
      <List>
        {internalLinks.map((link, index) => (
          <ListItem key={link.title} disablePadding onClick={handleDrawerClose}>
            <ListItemButton>
              <ListItemIcon>
                {link.title === "Commands" ? (
                  <TerminalIcon />
                ) : link.title === "Usage" ? (
                  <WifiOffIcon />
                ) : (
                  <DownloadIcon />
                )}
              </ListItemIcon>
              <a href={link.link}>
                <ListItemText primary={link.title} />
              </a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {externalLinks.map((link, index) => (
          <ListItem key={link.title} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {link.title === "Source code" ? (
                  <GitHubIcon />
                ) : link.title === "FAQ`s" ? (
                  <QuestionMarkIcon />
                ) : (
                  <HotelIcon />
                )}
              </ListItemIcon>
              <a rel="noopener noreferrer" href={link.link} target="_blank">
                <ListItemText primary={link.title} />
              </a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          color: "black",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Docs
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <CloseIcon
            sx={{
              position: "absolute",
              right: "10px",
              top: "10px",
              zIndex: "10000",
            }}
            onClick={() => handleDrawerClose()}
          />

          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Container maxWidth="md">
          <Box sx={{ bgcolor: "whitesmoke" }}>
            <img
              width={"100%"}
              src="https://www.canislupus.dev/static/media/seethem.8344e946e151469d4e4c.jpeg"
              alt="seethemall"
            />
            <Typography variant="h3"> Introduction: </Typography>
            <Typography sx={{ textAlign: "left", padding: "2%" }}>
              SEETHEM is a Linux tool designed exclusively for educational
              purposes, providing users with the ability to scan their networks
              using ARP spoofing techniques. This tool is intended for
              educational use only and should not be employed for unauthorized
              access or any malicious activities.
            </Typography>
            <Typography
              sx={{ textAlign: "left", padding: "2%", marginTop: "2%" }}
            >
              <Alert severity="warning">
                {" "}
                It is imperative to emphasize that SEETHEM is strictly intended
                for educational purposes. Users are strongly discouraged from
                using this tool for any activities that violate ethical
                standards, compromise network integrity, or infringe upon the
                privacy and security of others. The creators of Network Sentry
                do not support or endorse any illicit or unauthorized use of
                this tool. Users are expected to abide by ethical guidelines and
                legal regulations governing network security practices. Any
                misuse or unlawful activities conducted using Network Sentry are
                solely the responsibility of the user.
              </Alert>
            </Typography>
            <Typography id="commands" variant="h3">
              Commands
            </Typography>

            <ul>
              <li>
                <b>--scan:</b> Displays connected devices and essential details
                using ARP spoofing, revealing insights into the network's
                composition and structure.
                <img
                  width={"100%"}
                  src="https://www.canislupus.dev/static/media/seethem.8344e946e151469d4e4c.jpeg"
                  alt="seethemall"
                />
              </li>
              <li>
                <b>--kick:</b> Enables users to disconnect devices via ARP
                poisoning. Note: This function operates without affecting the
                Wi-Fi connection.
                <img
                  width={"100%"}
                  src="https://www.canislupus.dev/static/media/seethem.8344e946e151469d4e4c.jpeg"
                  alt="seethemall"
                />
              </li>
              <li>
                <b>--analyze:</b> Facilitates package analysis, allowing users
                to delve into network traffic and gain insights into data
                packets and communication patterns.
                <img
                  width={"100%"}
                  src="https://www.canislupus.dev/static/media/seethem.8344e946e151469d4e4c.jpeg"
                  alt="seethemall"
                />
              </li>
            </ul>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
