import { useState } from "react";
import { AddCategory, Heading, GifCategories } from "./components";

const GifExpertApp = () => {
	const [categories, setCategories] = useState(["gif"]);

	const onAddCategory = (newCategory) => {
		if (categories.indexOf(newCategory) > -1) return;
		if (categories.length > 1) {
			categories.pop();
		}
		setCategories([newCategory, ...categories]);
	};

	console.log(categories);

	return (
		<div className="relative">
			<div className="relative w-full h-full bg-white">
				<div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
			</div>
			<main className="w-full px-4 mx-auto max-w-7xl font-body">
				<Heading title="Found your Gif!" />
				<AddCategory onNewCategory={onAddCategory} />
				<GifCategories categories={categories} />
			</main>
		</div>
	);
};

export default GifExpertApp;
