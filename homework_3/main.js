import {getUsers, getCompanies, getProducts, getReviews} from './api.js';
import {User} from './classes/User.js';
import {Review} from './classes/Review.js';
import {Product} from './classes/Product.js';
import {Company} from './classes/Company.js';

const [users,
    companies,
    products,
    reviews] = await Promise.all([
    getUsers(),
    getCompanies(),
    getProducts(),
    getReviews(),
]);

const userArr = [];
for (const user of users) {
    userArr.push(new User(user.id, user.name));
}

const reviewArr = [];
for (const review of reviews) {
    const user = userArr.find(u => u.id === review.userId);
    reviewArr.push(new Review(review.id, review.text, user));
}

const companyArr = [];
for (const company of companies) {
    companyArr.push(new Company(company.id, company.name, company.created, company.country, []));
}

const productArr = [];
for (const product of products) {
    const company = companyArr.find(c => c.id === product.companyId);
    const productReviews = [];

    for (const reviewId of product.reviewIds) {
        const review = reviewArr.find(r => r.id === reviewId);
        if (review) {
            productReviews.push(review);
        }
    }

    productArr.push(new Product(product.id, product.name, product.description, company, productReviews));
}

for (const company of companyArr) {
    const companyProducts = [];
    for (const product of productArr) {
        if (product.company.id === company.id) {
            companyProducts.push(product);
        }
    }
    company.products = companyProducts;
}

const result = {
    users: userArr,
    companies: companyArr,
    products: productArr,
    reviews: reviewArr,
};

console.log(result);


