//------------------------------ import libraries
import React, { useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//------------------------------ import components
import MainHero from '../components/Com--Main-hero';
import Metadata from '../cards/Card--Metadata';
import RecipeIngredientsList from '../components/Com--Recipe-ingredients';
import RecipeInstructionsList from '../components/Com--Recipe-instructions';
import RecipeCarrousel from '../components/Com--Recipe-carrousel';
import RecipeCard from '../cards/Card--Recipe-card';
import Footer from '../components/Com--Footer';
import { getRecipeData, getRecommendedRecipes } from '../actions/recipeActions';

//------------------------------ import styles and images
import '../assets/components-style/Layout.scss';

//------------------------------------ COMPONENT ------------------------------------//
const RecipePage = (props) => {
	const { id } = props.match.params;
	const currentRecipe = useSelector(
		(state) => state.recipeReducer.currentRecipe
	);
	const dispatch = useDispatch();

	const recipes = useSelector((state) => state.recipeReducer.recommended);

	useLayoutEffect(() => {
		dispatch(getRecommendedRecipes());
		dispatch(getRecipeData(id));
	}, []);

	return (
		<div className="Layout">
			<MainHero title={currentRecipe.name} picture={currentRecipe.picture} />
			<div className="Layout__body">
				<Metadata
					time={currentRecipe.preparationTime}
					portions={currentRecipe.portions}
					difficult={currentRecipe.dificult}
				/>
				<RecipeIngredientsList />
				<RecipeInstructionsList />
				<RecipeCarrousel title="Recomendados">
					{recipes?.map((recipe, i = 0) => {
						i++;
						return (
							<RecipeCard
								id={recipe.id}
								cardId={i}
								key={recipe.id}
								picture={recipe.picture}
								name={recipe.name}
								portions={recipe.portions}
								preparationTime={recipe.preparationTime}
								dificult={recipe.dificult}
							/>
						);
					})}
				</RecipeCarrousel>
			</div>
			<Footer />
		</div>
	);
};

export default RecipePage;
