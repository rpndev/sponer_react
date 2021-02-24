import { useState } from 'react';
import { connect } from "react-redux"
import { Button, TextField, Paper, Typography } from "@material-ui/core"

import { requestQuery } from '../../data/actions/queryActions';

import './queryPage.css';

const QueryPage = ({
  requestQuery
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

  const handleRequestQuery = () => {
    if (!searchIngredient) {
      setValidationError(validationErrorMessage);
    } else {
      setValidationError('');
      requestQuery(searchIngredient);
    }
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
          <div className='recent-searches-wrapper'>
            <Typography>Recent searches</Typography>
            {
              // implement recent searches
            }
          </div>
        }
        <Button
          color='primary'
          variant='outlined'
          onClick={handleRequestQuery}
          className='search-button'
        >
          Search
        </Button>
      </Paper>
    </div>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
  requestQuery,
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryPage);
