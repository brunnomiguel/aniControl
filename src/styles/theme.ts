import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	colors: {
		grey: {
			0: "#FFFFFF",
			600: "#2C2C38",
			700: "#21212D",
			900: "#000000",
		},
		pink: {
			50: "#BE92A4",
			100: "#B28ECF",
			200: "#E064CC",
			800: "#28121E",
			900: "#1E0019",
		},
		red: {
			50: "#FF4940",
			100: "#E60000",
			500: "#800026",
			600: "#5A2843",
		},
		blue: {
			50: "#5CC6DC",
			100: "#1B83EA",
			200: "#1778F2",
			300: "#155BCB",
			400: "#0C6072",
			600: "#6778B1",
		},
		yellow: {
			50: "#FFF37E",
			400: "#FFCD07",
		},
		green: {
			50: "#6AF06A",
			400: "#168821",
		},
	},
	fonts: {
		heading: "Inter, sans-serif",
		body: "Inter, sans-serif",
	},
	fontSizes: {
		xs: "0.75rem",
		sm: "0.875rem",
		md: "1rem",
		lg: "1.125rem",
		"2xl": "1.5rem",
		"3xl": "1.875rem",
		"4xl": "2.25rem",
		"5xl": "3rem",
		"6xl": "3.75rem",
		"7xl": "4.5rem",
		"8xl": "6rem",
		"9xl": "8rem",
	},
	styles: {
		global: {
			body: {
				bg: "grey.700",
				color: "grey.0",
			},
		},
	},
});
