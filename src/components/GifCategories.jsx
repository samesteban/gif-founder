import PropTypes from "prop-types";
import GifGrid from "./GifGrid";

export const GifCategories = ({ categories }) => {
	return (
		<div className="my-6 overflow-hidden rounded-2xl">
			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
		</div>
	);
};

GifCategories.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.string),
};
