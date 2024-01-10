import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState("");

	const onInputChange = (e) => {
		let value = e.target.value;

		setInputValue(value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim().length <= 1) return;

		onNewCategory(inputValue.trim());
		setInputValue("");
	};
	return (
		<div className="sticky top-0 z-10 w-full p-4 bg-white">
			<form onSubmit={onSubmit}>
				<div className="relative">
					<div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
						<svg
							className="w-4 h-4 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
					</div>
					<input
						type="search"
						id="search"
						className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg outline-none ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
						placeholder="Type whatever you want..."
						value={inputValue}
						onChange={onInputChange}
					/>
					<button
						type="submit"
						className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-4 py-2 font-black uppercase"
					>
						Search
					</button>
				</div>
			</form>
		</div>
	);
};

AddCategory.propTypes = {
	onNewCategory: PropTypes.func,
};
