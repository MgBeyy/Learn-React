import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import { useState } from "react";

import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

const label = { inputProps: { 100: 500 } };

export default function Metarial() {
  const [height, setHeight] = useState(100);

  const handleChange = (event) => {
    if (height === 100) setHeight(500);
    else setHeight(100);
  };
  return (
    <Container maxWidth="md" style={{ marginTop: "200px" }}>
      <Accordion>
        <AccordionSummary
          //   expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          //   expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Switch {...label} defaultChecked onChange={handleChange} />
        </AccordionDetails>
      </Accordion>
      <Typography backgroundColor="orange" height={height}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
    </Container>
  );
}
