import * as React from "react"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import "../../styles/global.css"
import curriculum from "../../data/curriculum.yaml"

const Filter = ({ curriculumFilter, setCurriculumFilter }) => {
  const allItems = curriculum
  //   const items = curriculum[name]?.items || []

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
            Filter by curriculum:
          </label>
          <Select
            labelId="status-filter-curriculum"
            id="curriculum-filter"
            value={curriculumFilter}
            onChange={e => setCurriculumFilter(e.target.value)}
            label="Filter by Curriculum:"
            aria-labelledby="curriculum-filter-label"
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
              padding: "4px",
            }}
            MenuProps={{
              variant: "menu",
              PaperProps: {
                style: {
                  maxHeight: 200,
                  width: 220,
                },
              },
            }}
          >
            <MenuItem value="all">All</MenuItem>
            {console.log("adad")}
            {console.log(allItems)}
            {allItems.map(allItems => (
              <MenuItem
                key={allItems.name}
                value={allItems.name}
                style={{ whiteSpace: "normal" }}
              >
                {allItems.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default Filter
