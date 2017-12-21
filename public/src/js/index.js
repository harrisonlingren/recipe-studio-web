// make AJAX request to API for recipes and add to page
function getRecipes() {
    showPreload();

    $.getJSON(APIurl + 'recipe/all')
    .then((recipes) => {

        // build recipes and append to page
        recipes.forEach((recipe) => {

            // put cards here
            let recipeContainer = $('.recipe-container');

            recipe.image = recipe.image || 'http://via.placeholder.com/400x400';
            recipe.description = recipe.description || 'recipe.description';
            let recipeImg = $('<div></div>')
            .addClass('card-image-overflow waves-effect waves-block waves-light')
            .append(
                $('<img />')
                .addClass('activator')
                .attr('src', recipe.image)
            );

            // card title
            let recipeTitle = $('<span></span>')
            .addClass('card-title activator grey-text text-darken-4')
            .html( recipe.name + '<i class="material-icons right">more_vert</i>' );

            // completed card content
            let recipeContent = $('<div></div>')
            .addClass('card-content')
            .append(recipeTitle);

            // card action
            let recipeLink = $('<div></div>')
            .addClass('card-action')
            .append(
                $('<a></a>')
                .attr('href', 'recipes/' + recipe._id)
                .text('Open recipe')
            );

            // card summary
            let recipeSummary = $('<p></p>')
            .text(recipe.description);

            // card reveal content
            let recipeReveal = $('<div></div>')
            .addClass('card-reveal')
            .append(
                $('<span></span>')
                .addClass('card-title activator grey-text text-darken-4')
                .html( recipe.name + '<i class="material-icons right">close</i>')
            )
            .append( recipeSummary );

            // completed card
            let recipeCard = $('<div></div>')
            .addClass('card sticky-action')
            .append(recipeImg)
            .append(recipeContent)
            .append(recipeLink)
            .append(recipeReveal);

            // create col for layout
            $('<div></div>').addClass('col s12 l6')
            .append(recipeCard)

            // add to the container
            .appendTo(recipeContainer);
        });

        hidePreload();
        $('.recipe-container').show();
    });
}

$(document).ready(() => {
    getRecipes();
});