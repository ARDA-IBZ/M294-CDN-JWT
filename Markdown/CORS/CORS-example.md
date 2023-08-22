## Praktisches Beispiel für CORS

Angenommen, man hat eine Webanwendung auf Domain A (http://example.com), die auf eine API auf Domain B (http://api.exampleapi.com) zugreifen möchte.

**Ohne CORS:**
Ohne CORS blockiert der Webbrowser standardmäßig Anfragen von Domain A an die API auf Domain B aus Sicherheitsgründen. Dies führt dazu, dass die Anfrage fehlschlägt und die Daten nicht abgerufen werden können.

**Mit CORS:**
Um die Anfrage zu ermöglichen, muss die API auf Domain B CORS-Richtlinien definieren und an den Browser senden. Dies geschieht durch Hinzufügen spezieller Header zur Antwort der API:

```js
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://example.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type
