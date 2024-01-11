import React, { useState } from "react";
import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { Logout } from "@mui/icons-material";
import { Collapse } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { colors, sideBarMenu } from "../utils/common";
import { Logo } from ".";

const drawerWidth = 280;

const CustomAppBar = styled(AppBar)({
  boxShadow: "none",
});

const CustomList = styled(List)({
  height: "calc(100vh - 220px)",
  overflowY: "auto",
});

interface Props {
  children: React.ReactNode;
  title?: string;
  rightSide?: React.ReactNode;
}

export const DashboardDrawer: React.FC<Props> = ({
  children,
  title,
  rightSide,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={`${colors.bg().darkBlue} h-full overflow-hidden`}>
      <Toolbar className="px-8 py-5">
        <Logo />
      </Toolbar>
      <Divider className={`${colors.divider().lightBlue}`} />
      <Toolbar className="flex justify-between px-8 py-5">
        <div className="flex gap-4 items-center">
          <img
            className="rounded-md"
            src="https://flixtv.volkovdesign.com/main/img/avatar.svg"
          />
          <div className="text-white">
            <div className="text-[10px]">Admin</div>
            <div className="text-base">John Doe</div>
          </div>
        </div>
        <Logout className="fill-blue-500" />
      </Toolbar>
      <Divider className={`${colors.divider().lightBlue}`} />
      <CustomList className="pt-5 text-white">
        {sideBarMenu.map(({ title, icon: Icon, nestedMenu }, index) => (
          <>
            <ListItem
              key={index}
              disablePadding
              onClick={() => nestedMenu && setOpen(!open)}
              className="transition-colors duration-700 hover:text-blue-500 cursor-pointer px-8 pb-4 focus:text-blue-500"
            >
              <Icon className="mr-3" />
              <ListItemText primary={title} />
            </ListItem>
            {nestedMenu && (
              <Collapse
                in={open}
                timeout="auto"
                className={`${colors.bg().lightBlue} mb-5`}
                unmountOnExit
              >
                <List className="text-white">
                  {nestedMenu.map(({ title }) => (
                    <ListItem
                      key={index}
                      disablePadding
                      className="transition-colors duration-700 hover:text-blue-500 cursor-pointer px-8 pb-2 last:pb-0"
                    >
                      <div className="h-1 w-1 bg-sky-500 rounded-full mr-3" />
                      <ListItemText primary={title} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </>
        ))}
      </CustomList>
      <div
        className={`fixed bottom-0 px-9 py-5 text-white text-xs ${
          colors.bg().darkBlue
        }`}
      >
        © ProTV, 2021.
        <br /> Created by Ronak Khunt.
      </div>
    </div>
  );

  return (
    <Box className="flex">
      <CustomAppBar
        position="absolute"
        className={colors.bg().darkBlue}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className="relative px-8 py-5">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div className="flex justify-between w-full">
            <Typography className="text-2xl md:text-3xl">{title}</Typography>
            {rightSide}
          </div>
          <div
            style={{ width: `calc(100% - 32px)` }}
            className={`absolute bottom-0 border-b ${
              colors.divider().lightBlue
            }`}
          />
        </Toolbar>
      </CustomAppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderColor: colors.divider(true).lightBlue,
              backgroundColor: colors.bg(true).darkBlue,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRight: `1px solid ${colors.divider(true).lightBlue}`,
              backgroundColor: colors.bg(true).darkBlue,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        className="text-white"
        sx={{
          flexGrow: 1,
          p: 4,
          paddingTop: "74px",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
