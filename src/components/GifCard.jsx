import PropTypes from "prop-types";

const GifCard = ({ title, url, id }) => (
	<div className="flex flex-col items-start self-stretch justify-start overflow-hidden rounded-xl gif-card">
		<div className="relative w-full aspect-video">
			<img
				src={url}
				alt={id}
				className="absolute top-0 left-0 object-cover object-center w-full h-full"
			/>
		</div>
		<p className="grid flex-1 w-full p-2 text-sm font-light text-center bg-white place-items-center">
			{title}
		</p>
	</div>
);

GifCard.propTypes = {
	title: PropTypes.string,
	url: PropTypes.string,
	id: PropTypes.string,
};

export default GifCard;
