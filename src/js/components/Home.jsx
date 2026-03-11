import React from "react";


import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer"

//create your first component
const Home = () => {

	const cardData = [

		{
			productImage: 'https://image.made-in-china.com/202f0j00RsbodFcaAPqf/No-Logo-Vegan-Matte-Full-Coverage-Foundation-Lightweight-Liquid-Foundation-Makeup.webp',
			productName: 'Base liquida FPS 50 Nova',
			precio: 15.00,
		},

		{
			productImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJqh9DOVhRuOjAWwQPCia9sAEH5Ivc2aJMcw&s',
			productName: 'Paleta de sombras CoverFull',
			precio: 18.00,
		},

		{
			productImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ2jblHRVbKCC5DC60xTvG4I-930ikRxpYEw&s',
			productName: 'Set de brochas Mac',
			precio: 20.00,
		},

		{
			productImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg0TT2ZJcbmLij7Mv3c614pZK2WyE2o9pCtg&s',
			producttName: 'Labial luxury',
			precio: 8.00,
		},




	]
	return (

		<div className="text-center">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					{
						cardData.map((el, i) => 
							<Card key={i} productImage={el.productImage} productName={el.productName} precio={el.precio} />
						)
					}				
				</div>
			</div>
			<Footer />
		</div>



	);
};

export default Home;