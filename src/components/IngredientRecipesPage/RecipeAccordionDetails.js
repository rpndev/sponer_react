import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    AccordionDetails,
} from '@material-ui/core';

import { ArrowRight } from '@material-ui/icons';

import './ingredientRecipesPage.css';

const RecipeAccordionDetails = ({
    recipe
}) => {
    return (
        <AccordionDetails>
            <img src={recipe.image} alt='recipe-image' className='recipe-image' />
            <List component='ul'>
                {
                    (recipe.usedIngredients && recipe.usedIngredients.length > 0) &&
                    (recipe.missedIngredients && recipe.missedIngredients.length > 0) &&
                    recipe.usedIngredients.concat(recipe.missedIngredients).map(ingredientInfo => {
                        return (
                            <ListItem>
                                <ListItemIcon>
                                    <ArrowRight />
                                </ListItemIcon>
                                <ListItemText primary={ingredientInfo.originalString} />
                            </ListItem>
                        )
                    })
                }
            </List>
        </AccordionDetails>
    )
}

export default RecipeAccordionDetails;
