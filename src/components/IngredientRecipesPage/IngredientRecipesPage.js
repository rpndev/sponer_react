import { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    Paper,
    Typography,
} from '@material-ui/core';

import RecipeAccordion from './RecipeAccordion';
import { getResultRecipes } from '../../data/selectors/ingredientRecipesSelectors';

import './ingredientRecipesPage.css';

const IngredientRecipesPage = ({
    recipes
}) => {
    const { ingredient } = useParams();

    const sortByLikes = (recipes) => {
        return recipes.sort((a, b) => b.likes - a.likes);
    }

    const addPanelProps = (recipes) => {
        let index = 0;
        return recipes.map(x => ({ panel: `panel${index++}`, ...x }));
    }

    const sortedByLikes = sortByLikes(recipes);
    const recipesWithPanels = addPanelProps(sortedByLikes);

    return (
        <div className='result-recipes-page-wrapper'>
            <Paper className='paper-container'>
                <Typography
                    variant='h5'
                    style={{ marginBottom: '10px' }}
                >
                    Recipes with {ingredient}
                </Typography>
                {
                    recipesWithPanels.map(recipe => <RecipeAccordion recipe={recipe} />)
                }
            </Paper>
        </div>
    )
}

const mapStateToProps = state => ({
    recipes: getResultRecipes(state),
})

export default connect(mapStateToProps)(IngredientRecipesPage);
