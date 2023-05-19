import {
  Select,
  MenuItem,
  InputLabel,
  Grid,
  TextField,
  FormControl,
  styled,
} from "@mui/material";
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
import { useMediaQuery, useTheme } from "@mui/material";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updatenewsType = (e: any) => {
    dispatch(updateNewsType(e.target.value));
  };

  const navigateSearchPage = () => {
    navigate("/search");
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar className="body">
      <Toolbar>
        {!isSmallScreen && (
          <Box sx={{ display: "flex", alignItems: "center", mr: 1 }}>
            <img
              src="https://img.favpng.com/5/10/18/new-york-city-the-new-york-times-newspaper-logo-symbol-png-favpng-V4BQsYhVgcXNux5sL0nnMdaM0.jpg"
              alt="NewYork Times"
              className="img"
            />
          </Box>
        )}

        {!isSmallScreen && (
          <>
            <Box sx={{ flexGrow: 1, mr: 2 }}>
              <TextField
                type="search"
                onClick={navigateSearchPage}
                placeholder="Search news and articles..."
              />
            </Box>

            <Box sx={{ flexGrow: 1, mr: 2 }}>
              <Link to="https://www.nytimes.com/international/">
                The NewYork TiMes
              </Link>
            </Box>
          </>
        )}

        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label" className="selecttext">
            Select News
          </InputLabel>
          <Select onChange={updatenewsType}>
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
        <Box sx={{ mr: 2, marginLeft: 1 }}>
          <Logout />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
