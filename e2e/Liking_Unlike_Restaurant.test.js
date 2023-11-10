const assert = require('assert');
Feature('Liking and Unliking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

const likingRestaurant = async ({ I }) => {
    I.amOnPage('/');
    I.seeElement('.card-h3');
    const firstMovie = locate('.card-h3').first();
    const firstMovieTitle = await I.grabTextFrom(firstMovie);
    I.click(firstMovie);

    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorite');
    I.seeElement('.movie-item');

    const likedMovieTitle = await I.grabTextFrom('.card-h3');

    assert.strictEqual(firstMovieTitle, likedMovieTitle);
};

Scenario('Showing empty liked restaurant info when there is no liked restaurant', ({ I }) => {
    I.wait(3);
    I.seeElement('#fav-resto');
    I.see('Empty favorite Resto. Put one, by clicking heart button in the detail page.', '#fav-resto');
});

Scenario('Liking one restaurant', async ({ I }) => {
    I.wait(3);
    await likingRestaurant({ I });
});

Scenario('Unliking one restaurant', async ({ I }) => {
    I.wait(3);
    await likingRestaurant({ I });
    I.amOnPage('/#/favorite');
    I.seeElement('.card-h3');
    I.click(locate('.card-h3').first());
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorite');
    //memastikan terdapat informasi kalau tidak ada resto yang difavoritekan
    I.see('Empty favorite Resto. Put one, by clicking heart button in the detail page.', '#fav-resto');
});
