import {
    Chip,
    Typography,
    AccordionSummary,
} from '@material-ui/core';

import { ExpandMore, ThumbUpAlt } from '@material-ui/icons';

import './ingredientRecipesPage.css';

const RecipeAccordionSummary = ({
    recipe
}) => {
    return (
        <AccordionSummary
            expandIcon={<ExpandMore />}
            className='accordion-summary'
        >
            <Typography>{recipe.title}</Typography>
            <Chip
                color='primary'
                label={recipe.likes}
                variant='outlined'
                style={{ marginLeft: '10px', cursor: 'pointer' }}
                icon={<ThumbUpAlt style={{ marginLeft: '10px' }} color='primary' />}
            />
        </AccordionSummary>
    )
}

export default RecipeAccordionSummary;
