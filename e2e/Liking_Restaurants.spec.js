const assert = require('assert');

Feature('Favorite Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#main-menu');
  I.see('Empty favorite Resto. Put one, by clicking heart button in the detail page.', '#main-menu');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Empty favorite Resto. Put one, by clicking heart button in the detail page.', '#main-menu');

  I.amOnPage('/');

  I.wait(3);
  I.seeElement('.menu-content-name a');

  const firstRestoCard = locate('.menu-content-name a').first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);

  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.menu-item');
  const likedCardTitle = await I.grabTextFrom('.menu-content-name');
  assert.strictEqual(firstRestoCardTitle, likedCardTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Empty favorite Resto', '#main-menu');

  I.amOnPage('/');

  I.wait(3);
  I.seeElement('.menu-content-name a');
  const firstRestoCard = locate('.menu-content-name a').first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);

  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.menu-item');
  const likedCardTitle = await I.grabTextFrom('.menu-content-name');
  assert.strictEqual(firstRestoCardTitle, likedCardTitle);

  I.click(likedCardTitle);

  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#main-menu');
  const noFavRestaurant = await I.grabTextFrom('#main-menu');
  assert.strictEqual(noFavRestaurant, 'Empty favorite Resto. Put one, by clicking heart button in the detail page.');
});

Scenario('Customer review', async ({ I }) => {
  I.see('Empty favorite Resto. Put one, by clicking heart button in the detail page.', '#main-menu');

  I.amOnPage('/');
  const reviewText = 'Automated reviewww';
  const addName = 'Syifa Sukma';

  I.waitForElement('.menu-content-name a');
  I.click(locate('.menu-content-name a').first());

  I.wait('form-review form');

  I.fillField('inputName', addName);
  I.fillField('inputReview', reviewText);

  I.click('#submit-review');

  const lastReview = locate('.review-body').last();
  const textLastReview = await I.grabTextFrom(lastReview);

  assert.strictEqual(reviewText, textLastReview);
});
