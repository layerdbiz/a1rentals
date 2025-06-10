import { redirect } from "@sveltejs/kit";

export async function handle({ event, resolve }) {
	const url = event.url;

	// Wedding party rentals redirects
	if (url.pathname === "/weddingparty-rentals-beaumont-texas") {
		throw redirect(301, "/wedding-party-rentals");
	}

	// Contractor equipment redirects to About page
	if (url.pathname === "/contractor-equipment-rentals") {
		throw redirect(301, "/about");
	}

	if (url.pathname === "/contractor-equipment-rentals-beaumont-texas") {
		throw redirect(301, "/about");
	}

	// Portfolio items redirect to home page
	if (url.pathname === "/portfolio-items/vila-olimpica") {
		throw redirect(301, "/");
	}

	if (url.pathname === "/portfolio-items/the-cube") {
		throw redirect(301, "/");
	}

	if (url.pathname === "/portfolio-items/singapore-skyrise") {
		throw redirect(301, "/");
	}

	if (url.pathname === "/portfolio-items/new-england-marina") {
		throw redirect(301, "/");
	}

	// PDF redirects to planning page
	if (
		url.pathname === "/wp-content/uploads/2017/05/Wedding-Planner-Guide.pdf"
	) {
		throw redirect(301, "/planning");
	}

	// Disclaimer PDF redirect to home page
	if (url.pathname === "/wp-content/uploads/2017/05/Disclaimer-3.pdf") {
		throw redirect(301, "/");
	}

	return resolve(event);
}
