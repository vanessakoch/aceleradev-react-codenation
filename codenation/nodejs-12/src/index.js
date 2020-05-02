const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

const promotionArray = (products) => {

	const categories = new Set (
		products.map((product) => product.category)
	);

	return promotions[categories.size - 1];
};

const getPromotion = (promotionsList, promotion) => 
	promotionsList && promotionsList.find((p) => 
	p.looks.indexOf(promotion) !== -1);

const newCart = (productList, promotion) => 

	productList.reduce((cart, { name, category, regularPrice, promotions }) => {
		const productPromotion = getPromotion(promotions, promotion);
		cart.productList.push({ name, category });
		cart.regularPrice += regularPrice;
		cart.price += (productPromotion && productPromotion.price) || regularPrice;
		return cart;
	},

	{
		productList: [],
		regularPrice: 0,
		price: 0,
	}

);

function getShoppingCart(ids, productsList) {

  const products = productsList.filter((product) => ids.includes(product.id));
  const promotion = promotionArray(products);
  const cart = newCart(products, promotion);
  const discountValue = cart.regularPrice - cart.price;
  const discount = (discountValue / cart.regularPrice) * 100;

  return {
    products: cart.productList,
    promotion,
    totalPrice: cart.price.toFixed(2),
    discountValue: discountValue.toFixed(2),
    discount: `${discount.toFixed(2)}%`,
	};
	
};

module.exports = { 
	getShoppingCart 
};