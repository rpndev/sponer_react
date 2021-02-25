import { useState } from 'react';
import { connect } from "react-redux"
import {
  Link,
  Paper,
  Button,
  Tooltip,
  TextField,
  Typography,
} from "@material-ui/core"

import { Search } from '@material-ui/icons';

import { history } from '../../data/store';
import { fetchRecipes } from '../../data/actions/ingredientRecipesActions';
import { saveToRecentSearches } from '../../data/actions/ingredientQueryActions';
import { getRecentSearchIngredients } from '../../data/selectors/ingredientQuerySelectors';

import './ingredientQueryPage.css';

const IngredientQueryPage = ({
  saveToRecentSearches,
  fetchRecipes,
  searches,
}) => {

  const [searchIngredient, setSearchIngredient] = useState('');
  const [validationError, setValidationError] = useState('');

  const validationErrorMessage = 'Please provide ingredient';

  const handleSearchIngredientChange = ev => {
    if (ev.target.value) {
      setValidationError('');
    } else {
      setValidationError(validationErrorMessage);
    }
    setSearchIngredient(ev.target.value);
  }

  const handleSearchAgain = ingredient => {
    setSearchIngredient(ingredient);
    handleRequestQuery(ingredient);
  }

  const handleRequestQuery = ingredient => {
    if (!ingredient) {
      setValidationError(validationErrorMessage);
    } else {
      setValidationError('');
      saveToRecentSearches(ingredient);
      fetchRecipes(ingredient);
    }
    history.push(`/results/${ingredient}/recipes`);
  }

  return (
    <div className='query-page-wrapper'>
      <Paper className='paper-container'>
        <TextField
          value={searchIngredient}
          label='Search by ingredient'
          className='ingredient-input'
          onChange={handleSearchIngredientChange}
        />
        {
          validationError &&
          <Typography
            variant='caption'
            className='input-validation-error'
          >
            {validationError}
          </Typography>
        }
        {
          (searches && searches.length > 0) &&
          <div className='recent-searches-wrapper'>
            <Typography variant='body1' className='recent-searches-title'>
              <Search className='recent-searches-icon' />Recent searches
            </Typography>
            {
              searches.map((x, i) => {
                return (
                  <div key={i}>-
                    <Tooltip title={`Search again for ${x}`}>
                      <Link
                        className='recent-search-item'
                        onClick={() => handleSearchAgain(x)}
                      >
                        {x}
                      </Link>
                    </Tooltip>
                  </div>
                )
              })
            }
          </div>
        }
        <Button
          color='primary'
          variant='outlined'
          className='search-button'
          onClick={() => handleRequestQuery(searchIngredient)}
        >
          Search
        </Button>
      </Paper>
    </div>
  )
}

const mapStateToProps = state => ({
  searches: getRecentSearchIngredients(state),
})

const mapDispatchToProps = {
  fetchRecipes,
  saveToRecentSearches,
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientQueryPage);