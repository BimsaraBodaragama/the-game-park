import * as React from "react"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import "../../styles/global.css"

const Filter = ({ statusFilter, setStatusFilter }) => {
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
        <FormControl
          variant="outlined"
          sx={{ m: 1, minWidth: 120, width: 220, left: "6%" }}
        >
          <label
            htmlFor="status-filter"
            style={{ color: "white", height: "20%", marginBottom: "8px" }}
          >
            Filter by status:
          </label>

          <Select
            labelId="status-filter-label"
            id="status-filter"
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            aria-labelledby="status-filter-label"
            sx={{
              "&:before": {
                borderColor: "white !important",
              },
              "&:after": {
                borderColor: "white !important",
              },
              "& fieldset": {
                borderColor: "white !important",
              },
              "& svg": {
                color: "white",
              },
              backgroundColor: "white",
              height: "32px",
              padding: "4px",
            }}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="stable">Stable</MenuItem>
            <MenuItem value="beta">Beta</MenuItem>
            <MenuItem value="alpha">Alpha</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default Filter
