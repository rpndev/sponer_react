import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { apiKey } from '../config';

const styles = {
  container: {
    margin: "auto",
    marginTop: "100px",
    maxWidth: "500px",
    borderRadius: "10px",
    border: "1px solid #000000",
    padding: "20px"
  },
  backButton: {
    color: "#000000",
    fontSize: "24px",
    textDecoration: "none"
  },
  resultContainer: {
    border: "1px solid #000000"
  },
  result: {
    marginTop: "5px",
    fontSize: "24px",
    borderBottom: "1px solid #000000",
    paddingLeft: "20px"
  },
  recipeImage: {
    width: "30px",
    height: "30px",
    marginRight: "10px"
  },
  ingredientImage: {
    width: "30px",
    height: "30px"
  },
  recipeRow: {
    display: "flex"
  }
}

export default function Result({ ingredients }) {
  const [isLoading, setIsLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  const toggleExpanded = (recipeId) => {
    const newRecipes = recipes.map(recipe => recipe.id === recipeId ? { ...recipe, isExpanded: !recipe.isExpanded } : recipe);
    setRecipes(newRecipes);
  }

  async function loadRecipes() {
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredients}&number=4`;
    const response = await axios.get(url);
    setIsLoading(false);
    setRecipes(response.data);
  }

  useEffect(() => {
    loadRecipes();
  },[ingredients]);

  return (
    <div style={styles.container}>
      <Link to="/" style={styles.backButton}>back</Link>
      {isLoading &&
        <div>is loading...</div>
      }
      <div style={styles.resultContainer}>
        {recipes && recipes.map((recipe) =>
          <div key={recipe.id} style={styles.result} >
            <div onClick={()=>toggleExpanded(recipe.id)}>
              <img src={recipe.image} style={styles.recipeImage} alt="recipeImage"/>
              {recipe.title}
            </div>
            {recipe.isExpanded && 
              recipe.usedIngredients.map((usedIngredient, index) => (
                <div key={index} style={styles.recipeRow}>
                  <img src={usedIngredient.image} alt="ingredientImage" style={styles.ingredientImage} />
                  <div>original:{usedIngredient.original}</div>
                </div>
              ))
            }
          </div>
        )}
      </div>
    </div>
  )
}