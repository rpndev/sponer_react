import { useState } from 'react';
import { Accordion } from '@material-ui/core';

import RecipeAccordionDetails from './RecipeAccordionDetails';
import RecipeAccordionSummary from './RecipeAccordionSummary';

import './ingredientRecipesPage.css';

const RecipeAccordion = ({
    recipe
}) => {
    const [expanded, setExpanded] = useState('');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Accordion
            className='accordion-item'
            expanded={expanded === recipe.panel}
            onChange={handleChange(recipe.panel)}>
            <RecipeAccordionSummary recipe={recipe} />
            <RecipeAccordionDetails recipe={recipe} />
        </Accordion>
    )
}

export default RecipeAccordion;
