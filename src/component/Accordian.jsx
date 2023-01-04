import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, Grid } from '@mui/material';

function Accordian({ item }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion sx={{ boxShadow: 'none' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                {/* health panal  */}
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 1 }}>
                        Health Labels
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2" color="text.secondary">
                        {item.recipe.healthLabels.map((e, i) => e + ", ")}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ boxShadow: 'none' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '100%', flexShrink: 0 }}>Ingredient</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid display="flex" flexWrap='wrap' >
                        {
                            item.recipe.ingredients.map((e, i) => {
                                return (
                                    <Typography key={i} variant="body2" color="text.secondary">
                                        <Avatar alt="inc" src={e.image} />
                                    </Typography>
                                )
                            })
                        }
                    </Grid>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}


export default Accordian;