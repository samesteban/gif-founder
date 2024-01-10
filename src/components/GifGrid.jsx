import PropTypes from "prop-types";
import GifCard from "./GifCard";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
	const { images, isLoading } = useFetchGifs(category);

	return (
		<div
			key={category}
			className="p-8 odd:bg-stone-100 even:bg-stone-200 [&_.last-search]:first:inline-block"
		>
			<h2 className="mb-3 text-2xl font-semibold">
				{isLoading ? "Cargando..." : category}{" "}
				<span className="hidden text-sm font-light tracking-tighter last-search">
					(last search)
				</span>
			</h2>
			<div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{images.map((image) => (
					<GifCard key={image.id} {...image} />
				))}
			</div>
		</div>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string,
};

export default GifGrid;
