import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import {BookmarksSharp} from '@material-ui/icons';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  fontSize: "13px",
  fontWeight: "600",
  height: "6px",
  backgroundColor: "rgb(38, 38, 51)",
  borderWidth: "0px",
  padding: "20px",
  borderRadius: "4px",
  textTransform: "capitalize",
  letterSpacing: "1.5px",
  width: "300px !important",
  [theme.breakpoints.up("md")]: {
    width: "20ch",
  },
}));

const StyledHeaderBox = styled(Box)(() => ({
  width: "100vw",
  display: "flex",
  flexDirection: "row",
  alignContent: "space-between",
  justifyContent: "space-between",
  alignItems: "center",
}));

const StyleHeaderLeftBox = styled(Box)(() => ({
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
}));
const StyleHeaderRightBox = styled(Box)(() => ({
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
}));

const StyleHeaderRightListBox = styled(List)(() => ({
  display: "flex",
}));

const StyleHeaderRightListText = styled(Typography)(() => ({
  fontFamily: "Montserrat, sans-serif",
  textTransform: "uppercase",
  textOverflow: "ellipsis",
  color: "rgb(134, 134, 160)",
  fontWeight: "700",
  fontSize: "13px",
  cursor:"pointer",
  '&:hover': {
    color: "white",       
}
}));

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#1A1A25",
          }}
        >
          <Toolbar>
            <StyledHeaderBox>
              <StyleHeaderLeftBox>
                <Box
                  component="img"
                  sx={{
                    height: 48,
                  }}
                  alt="Logo"
                  src="/assests/images/logo.svg"
                />
                <Typography
                  variant="h6"
                  component="p"
                  mx={3}
                  fontSize="16px"
                  fontFamily="Montserrat, sans-serif"
                  lineHeight="25px"
                  fontWeight={600}
                  color="rgb(255, 255, 255)"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  NFTNerds
                </Typography>
                <Search>
                  <StyledInputBase
                    placeholder="search by address,name and slug"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </StyleHeaderLeftBox>
              <StyleHeaderRightBox>
                <Box>
                  <StyleHeaderRightListBox>
                    <ListItem>
                      <StyleHeaderRightListText
                        variant="p"
                        fontFamily="Montserrat, sans-serif"
                      >
                        FIREHOSE
                      </StyleHeaderRightListText>
                    </ListItem>
                    <ListItem>
                      <StyleHeaderRightListText
                        variant="p"
                        fontFamily="Montserrat, sans-serif"
                      >
                        TRENDING
                      </StyleHeaderRightListText>
                    </ListItem>
                    <ListItem>
                      <StyleHeaderRightListText
                        variant="p"
                        fontFamily="Montserrat, sans-serif"
                      >
                        ASSET
                      </StyleHeaderRightListText>
                    </ListItem>
                    <ListItem>
                      <StyleHeaderRightListText
                        variant="p"
                        fontFamily="Montserrat, sans-serif"
                      >
                        FAQ
                      </StyleHeaderRightListText>
                    </ListItem>
                    <ListItem>
                      <ListItemText>
                        <ListItemIcon/>
                      <BookmarksSharp/>
                      </ListItemText>
                    </ListItem>
                  </StyleHeaderRightListBox>
                </Box>
                <Box>hey</Box>
              </StyleHeaderRightBox>
            </StyledHeaderBox>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
