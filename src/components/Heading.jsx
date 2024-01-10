import PropTypes from "prop-types";

export const Heading = (props) => (
	<header className="grid py-12 place-content-center">
		<h1 className="text-3xl font-black text-center">{props.title}</h1>
	</header>
);

Heading.propTypes = {
	title: PropTypes.string,
};
