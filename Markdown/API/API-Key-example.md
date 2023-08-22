## Praktisches Beispiel zur Anzeige von Wetterdaten mit OpenWeatherMap-API

In diesem Beispiel wird ein einfacher HTML-Code verwendet, um Wetterdaten mithilfe der OpenWeatherMap-API abzurufen und anzuzeigen.

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<!--The CSS styling-->
	<style>
	/* CSS-Styling hier */
	</style>
</head>
<body>
	<div class="container">
		<!-- Wetterdaten werden hier angezeigt -->
	</div>
	<!--Linking the javascript code-->
	<script src="script.js"></script>
</body>
</html>
```

## JavaScript-Funktionalität
Der JavaScript-Teil des Codes startet, sobald die Seite vollständig geladen ist (window.addEventListener("load", ...)). Es wird überprüft, ob der Browser Geolokalisierung unterstützt (navigator.geolocation). Wenn dies der Fall ist, werden Längen- und Breitengrade des Standorts des Benutzers abgerufen.

### JavaScript
```js
// Declaring the variables
let lon;
let lat;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273;

window.addEventListener("load", () => {
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition((position) => {
	console.log(position);
	lon = position.coords.longitude;
	lat = position.coords.latitude;

	// API ID
	const api = "6d055e39ee237af35ca066f35474e9df";

	// API URL
	const base =
`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
`lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df`;

	// Calling the API
	fetch(base)
		.then((response) => {
		return response.json();
		})
		.then((data) => {
		console.log(data);
		// Datenverarbeitung und Anzeige
		});
	});
}
});
```

Nach dem Abrufen des Standorts verwendet der Code die OpenWeatherMap-API mit einem API-Key ("6d055e39ee237af35ca066f35474e9df") zur Authentifizierung. Die Daten werden mit `fetch` abgerufen und verarbeitet, um Temperatur, Wetterbeschreibung, Ortsname und Wettersymbol im HTML anzuzeigen.

## Wichtig zu erwähnen
Dieses beispiel wurde nicht von uns erstellt und dient nur zu Bildungszwecken:

Link:
[Weather app using Vanilla JavaScript example](https://www.geeksforgeeks.org/weather-app-using-vanilla-javascript/)