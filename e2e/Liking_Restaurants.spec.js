const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const firstCondition = 'You dont have restaurant saved.';

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.content');

  I.see(firstCondition, '.content__heading');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(firstCondition, '.content__heading');

  I.amOnPage('/');

  // melihat element restaurant dan mengklik restaurant pertama
  I.seeElement('.resto-item__title a');
  const firstResto = locate('.resto-item__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  // like restaurant saat di halaman detail
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // kembali ke halaman favorite dan melihat element restaurant
  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');
  const likedRestoTitle = await I.grabTextFrom('.resto-item__title');

  // membandingkan restaurant yang di like
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see(firstCondition, '.content__heading');

  I.amOnPage('/');

  // melihat element restaurant dan mengklik restaurant pertama
  I.seeElement('.resto-item__title a');
  const firstResto = locate('.resto-item__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  // like restaurant saat di halaman detail
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // kembali ke halaman favorite dan melihat element restaurant
  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');
  const likedRestoTitle = await I.grabTextFrom('.resto-item__title');

  // membandingkan restaurant yang di like
  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  // mengklik restaurant yang ada di favorite
  I.click(likedRestoTitle);

  // menghapus like restaurant
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // kembali ke halaman favorite
  I.amOnPage('/#/favorite');
  I.seeElement('.content__heading');
  const noLikedResto = await I.grabTextFrom('.content__heading');

  // membandingkan restaurant yang di like
  assert.strictEqual(noLikedResto, firstCondition);
});

Scenario('customer review', async ({ I }) => {
  I.see(firstCondition, '.content__heading');

  I.amOnPage('/');

  // melihat element restaurant dan mengklik restaurant pertama
  I.seeElement('.resto-item__title a');
  I.click(locate('.resto-item__title a').first());

  // melihat form review restaurant saat di halaman detail dan memasukkan review
  I.seeElement('.form-review');
  const customerReview = 'Customer Review with E2E testing';
  I.fillField('inputName', 'Konik Saputra');
  I.fillField('inputReview', customerReview);
  I.click('#submit-review');

  // cek review sudah masuk atau belum
  const lastReview = locate('.review-body').last();
  const textLastReview = await I.grabTextFrom(lastReview);

  assert.strictEqual(customerReview, textLastReview);
});
