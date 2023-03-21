import * as React from "react"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import "../../styles/global.css"

const VideoFilter = ({ videosFilter, setVideosFilter }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginLeft: "-8px",
        position: "fixed",
        marginTop: "5px",
      }}
    >
      <div>
        <FormControlLabel
          sx={{ m: 1, minWidth: 120, width: 220, left: "8%", color: "white" }}
          control={
            <Checkbox
              checked={videosFilter}
              onChange={e => setVideosFilter(e.target.checked)}
              color="primary"
              id="videos-filter"
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "white",
                },
              }} // Updated sx prop
            />
          }
          label="Courses with videos"
          labelPlacement="end"
          htmlFor="videos-filter"
        />
      </div>
    </div>
  )
}

export default VideoFilter
