const assert = require('assert');
Feature('Customer Reviews');

Before(({ I }) => {
    I.amOnPage('/');
});

Scenario('adding and viewing a new customer review for a restaurant', async ({ I }) => {
    I.seeElement('.card-h3');
    I.click(locate('.card-h3').first());
    I.seeElement('.detail-review');

    const numberOfReviewsBefore = await I.grabNumberOfVisibleElements('.detail-review-item');
    I.seeElement('.form-review');

    // Isi formulir untuk menambahkan review baru
    const newReviewText = 'Review baru untuk pengujian';
    I.fillField('input[id=name-input]', 'John Doe'); // Menggunakan id sebagai selector
    I.fillField('input[id=review-input]', newReviewText);
    I.click('#submit-review');

    I.amOnPage('/');
    I.click(locate('.card-h3').first());

    // Verifikasi bahwa jumlah ulasan pelanggan bertambah satu
    const numberOfReviewsAfter = await I.grabNumberOfVisibleElements('.detail-review-item');
    assert.strictEqual(numberOfReviewsAfter, numberOfReviewsBefore + 1, 'Customer review count did not increase');

    // Verifikasi bahwa review baru muncul di bagian ulasan pelanggan
    const lastReviewText = (await I.grabTextFrom('.detail-review-item:last-child .review-body')).trim();
    assert.strictEqual(lastReviewText, newReviewText, 'New customer review does not match');
});
