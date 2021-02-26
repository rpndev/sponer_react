import { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    Paper,
    Tooltip,
    Typography,
    IconButton,
} from '@material-ui/core';
import { YoutubeSearchedFor } from '@material-ui/icons';

import { history } from '../../data/store';
import RecipeAccordion from './RecipeAccordion';
import { getResultRecipes } from '../../data/selectors/ingredientRecipesSelectors';

import './ingredientRecipesPage.scss';

const IngredientRecipesPage = ({
    recipes
}) => {
    const { ingredient } = useParams();

    const [expanded, setExpanded] = useState('');

    const handleExpandedChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

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
                <Tooltip className='new-search-button' title='New search'>
                    <IconButton onClick={() => history.push('/')}>
                        <YoutubeSearchedFor color='secondary' fontSize='large' />
                    </IconButton>
                </Tooltip>
                <div className='accordions-container'>
                    <Typography
                        variant='h5'
                        className='result-recipes-title'
                    >
                        Recipes with {ingredient}
                    </Typography>
                    {
                        recipesWithPanels.map((recipe, i) => (
                            <RecipeAccordion
                                key={i}
                                recipe={recipe}
                                expanded={expanded}
                                handleExpandedChange={handleExpandedChange}
                            />
                        ))
                    }
                </div>
            </Paper>
        </div>
    )
}

const mapStateToProps = state => ({
    recipes: getResultRecipes(state),
})

export default connect(mapStateToProps)(IngredientRecipesPage);
