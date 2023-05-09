import { Select, MenuItem, InputLabel } from "@mui/material"
import { Link, useNavigate } from "react-router-dom";
import './Header.scss'
import { useDispatch } from "react-redux";
import { updateNewsType } from "../../redux/slice/SelectNewsType";



const Header: React.FC = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  //updating news type based on users selection
  const updatenewsType = (e: any) => {
    dispatch(updateNewsType(e.target.value))
  }



  const navigateSearchPage = () => {
    //localStorage.setItem("component", "NewsSearch")
    navigate("/search")
  }

  return (
    <div className="header">
      <div className=" slect">
        <InputLabel id="demo-simple-select-label" >Select News  categary</InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"

          label="Age"
          onChange={updatenewsType}

        >
          <MenuItem value="world">World</MenuItem>
          <MenuItem value="science">Science</MenuItem>
          <MenuItem value="arts">Art</MenuItem>
        </Select>
      </div>
      <div className="brand-name">
        <Link to="https://www.nytimes.com/international/">The NewYork TiMes</Link>
      </div>
      <div className="search-bar">
        <input
          type="search"
          onClick={navigateSearchPage}
          placeholder="Search news and artical..."

        />
        <button type="submit" >
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div className="user-img">
        <img src="https://img.favpng.com/5/10/18/new-york-city-the-new-york-times-newspaper-logo-symbol-png-favpng-V4BQsYhVgcXNux5sL0nnMdaM0.jpg" alt="user" />
      </div>
    </div>
  );
}

export default Header
