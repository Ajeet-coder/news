import { Select, MenuItem, InputLabel, Grid, TextField, FormControl, styled } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useDispatch } from "react-redux";
import { updateNewsType } from "../../redux/slice/SelectNewsType";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logout from "../Logout/Logout";
import { useMediaQuery,useTheme } from '@mui/material';


const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //updating news type based on users selection
  const updatenewsType = (e: any) => {
    dispatch(updateNewsType(e.target.value));
  };

  const navigateSearchPage = () => {
    //localStorage.setItem("component", "NewsSearch")
    navigate("/search");
  };



  // return (
  //   <Box sx={{ flexGrow: 1 }}>
  //     <AppBar>
  //       <Toolbar>
  //         <img
  //           src="https://img.favpng.com/5/10/18/new-york-city-the-new-york-times-newspaper-logo-symbol-png-favpng-V4BQsYhVgcXNux5sL0nnMdaM0.jpg"
  //           alt="newYork Times"
  //         />
  //         <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
  //           <Select onChange={updatenewsType}>
  //             <MenuItem value="world">World</MenuItem>
  //             <MenuItem value="science">Science</MenuItem>
  //             <MenuItem value="arts">Art</MenuItem>
  //           </Select>
  //         </Typography>
  //         <Logout/>
  //       </Toolbar>
  //     </AppBar>
  //   </Box>
  // );

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <AppBar className="body">
      <Toolbar>

      {!isSmallScreen && (
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
          <img
            src="https://img.favpng.com/5/10/18/new-york-city-the-new-york-times-newspaper-logo-symbol-png-favpng-V4BQsYhVgcXNux5sL0nnMdaM0.jpg"
            alt="NewYork Times"
            className="img"
          />
        </Box>
        )}
        

        {/* <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" color="inherit" noWrap>
            News App
          </Typography>
        </Box> */}

        {!isSmallScreen && (
          <Box sx={{ flexGrow: 1, mr: 2 }} >
            <TextField
              type="search"
              
              onClick={navigateSearchPage}
              placeholder="Search news and articles..."
              
            />
          </Box>
        )}

        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Select News</InputLabel>
          <Select  onChange={updatenewsType}>
            <MenuItem value="world">World</MenuItem>
            <MenuItem value="science">Science</MenuItem>
            <MenuItem value="arts">Art</MenuItem>
          </Select>
        </FormControl>

        {isSmallScreen && (
          <Box sx={{ flexGrow: 1, mt: 1 }}>
            <TextField
              type="search"
              onClick={navigateSearchPage}
              placeholder="Search news and articles..."
              fullWidth
            />
          </Box>
        )}

        <Logout />
      </Toolbar>
    </AppBar>
  );

  // return (
  //   <div className="header">
  //     <div className=" slect">
  //       <InputLabel id="demo-simple-select-label" >Select News  categary</InputLabel>

  //       <Select
  //         labelId="demo-simple-select-label"
  //         id="demo-simple-select"

  //         label="Age"
  //         onChange={updatenewsType}

  //       >
  //         <MenuItem value="world">World</MenuItem>
  //         <MenuItem value="science">Science</MenuItem>
  //         <MenuItem value="arts">Art</MenuItem>
  //       </Select>
  //     </div>
  //     <div className="brand-name">
  //       <Link to="https://www.nytimes.com/international/">The NewYork TiMes</Link>
  //     </div>
  //     <div className="search-bar">
  //       <input
  //         type="search"
  //         onClick={navigateSearchPage}
  //         placeholder="Search news and artical..."

  //       />
  //       <button type="submit" >
  //         <i className="fa fa-search"></i>
  //       </button>
  //     </div>
  //     <div className="user-img">
  //       <img src="https://img.favpng.com/5/10/18/new-york-city-the-new-york-times-newspaper-logo-symbol-png-favpng-V4BQsYhVgcXNux5sL0nnMdaM0.jpg" alt="user" />
  //     </div>
  //   </div>
  // );
};

export default Header;
