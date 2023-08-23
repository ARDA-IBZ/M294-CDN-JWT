# Gruppenpräsentation nr 2 - 23.08.2023 -

# Technische Grundlagen für Webentwicklung: Von CDN bis JWT

## 1. Content Delivery Network (CDN)

### Was ist CDN?

Ein Content Delivery Network (CDN) ist ein Netzwerk von Servern, das Inhalte wie Webseiten, Bilder und Videos speichert und an Nutzer auf der ganzen Welt verteilt. Das Ziel ist es, die Ladezeiten von Webseiten zu verkürzen, indem Inhalte von Servern in der Nähe der Benutzer ausgeliefert werden. Dadurch verbessert sich die Performance, da die Entfernung zum Ursprungsserver weniger Einfluss hat. CDNs bieten schnellere Ladezeiten, Lastverteilung, Skalierbarkeit und verbesserte Sicherheit für Webanwendungen.

### Vorteile und Nachteile von CDNs:

- **Vorteile:**

  1. Lastverteilung, da CDNs den Traffic auf Verschiedene Server gleichmässig verteilt

  2. Zuverlässigkeit, da bei Serverausfall von anderen Servern inhalte bereitgestellt werden könne.

  3. Sicherheit, Einige CDNs bieten Schutz vor DDoS-Angriffen und Malware durch die Anwendung von Sicherheitsmechanismen auf Netzwerkebene

- **Nachteile:**
  1. Kosten, da nutzung von CDNs je nach dem mit Kosten verbunden sein können
  2. Abhängigkeit von Drittanbietern, da CDNs logischerweise durch Drittanbiet gehostet werden
  3. Komplexität, da CDNs nicht einfach eingesetzt werden können und es je nach dem aufwand bei der implementierung brauchen könnte

### Bootstrap-CDN Besipiel

[CDN-Beispiel](CDN/CDN-example.md)

## 2. Create, Delete, Update, Delete (CRUD)

### Was bedeutet CRUD?

**CRUD** steht für **Create, Read, Update, Delete** und beschreibt grundlegende Aktionen zur Interaktion mit Daten. Im Bezug auf HTML, CSS und JavaScript bezieht sich CRUD auf die Manipulation von Inhalten und Elementen auf Webseiten:

- **Create (Erstellen):** Hinzufügen neuer Inhalte, z.B. das Einfügen von Elementen in den DOM (Document Object Model) mittels JavaScript oder das Erstellen von neuen HTML-Elementen.

- **Read (Lesen):** Anzeigen existierender Inhalte, z.B. das Lesen und Anzeigen von Daten oder Elementen auf der Webseite.

- **Update (Aktualisieren):** Modifikation von vorhandenen Inhalten, z.B. Ändern von Text oder Stilen eines HTML-Elements oder Aktualisieren von Informationen mittels JavaScript.

- **Delete (Löschen):** Entfernen von Inhalten, z.B. Löschen von Elementen aus dem DOM oder Entfernen von Daten oder Inhalten von der Webseite.

### Konkretes Live-Demo Beispiel

[CRUD-Beispiel](CRUD/CRUD-example.md)

## 3. Cross-Origin Ressource Sharing (CORS)

### Was bedeutet CORS?

**CORS** steht für **Cross-Origin Resource Sharing** und bezieht sich auf eine Sicherheitsrichtlinie in Webbrowsern, die den Zugriff auf Ressourcen (wie Daten oder APIs) auf verschiedenen Domains einschränkt. Wenn eine Webseite auf Ressourcen von einer anderen Domain zugreifen möchte, greift die CORS-Politik, um zu bestimmen, ob dieser Zugriff erlaubt ist:

- **Zweck:** CORS verhindert potenziell unsichere Cross-Origin-Anfragen, die Sicherheitsprobleme verursachen könnten, indem sie den Zugriff auf Ressourcen von einer anderen Domain ohne ausdrückliche Erlaubnis einschränken.

- **Wie es funktioniert:** Der Webbrowser erzwingt CORS, indem er spezielle HTTP-Header verwendet, um sicherzustellen, dass der Server auf der anderen Domain den Zugriff erlaubt. Wenn die Anfrage von einem anderen Ursprung (Origin) stammt, prüft der Browser die CORS-Header des Servers, um festzustellen, ob der Zugriff erlaubt ist.

- **Verwendung:** CORS wird häufig verwendet, wenn Webseiten auf externe APIs oder Ressourcen zugreifen müssen, die auf einer anderen Domain gehostet werden. Durch die Verwendung von CORS können Server die Zugriffsberechtigungen kontrollieren und sicherstellen, dass nur vertrauenswürdige Anwendungen auf ihre Daten zugreifen können.

**Kurze erwähnung:**
CORS ist nur dann relevant, wenn eine andere Domain auf Ressourcen auf meiner Domain zugreifen möchte. Wenn beispielsweise in Thema 4 meine Domain auf Ressourcen von einer anderen Domain, wie der Wetter-Domain, zugreifen möchte, ist es nicht erforderlich, CORS von meiner Seite aus zu konfigurieren. Stattdessen ist es die Wetter-Domain, die CORS-Richtlinien bereitstellt, um den Zugriff auf ihre Daten zu kontrollieren und zu schützen.

### Beispiel wie man CORS einbinden kann

[CORS-Beispiel](CORS/CORS-example.md)

## 4. Application Programming Interface (API)

### Was ist ein API-Key?

## Was ist ein API-Key?

Ein **API-Key** ist ein eindeutiger Zugriffsschlüssel, der von einem Webdienst oder einer API (Application Programming Interface) bereitgestellt wird. Er dient zur Identifizierung und Authentifizierung von Anwendungen oder Benutzern, die auf die Funktionalität einer API zugreifen möchten.

- **Zweck:** API-Keys ermöglichen es Anwendungen, sich bei einer API zu authentifizieren und autorisiert zu werden, um bestimmte Aktionen auszuführen oder Daten abzurufen.

- **Funktionsweise:** Ein API-Key wird normalerweise in einer Anfrage an die API gesendet. Die API prüft den Key und entscheidet basierend darauf, welche Berechtigungen der Anwendung oder dem Benutzer gewährt werden.

- **Verwendung:** API-Keys werden oft verwendet, um den Zugriff auf APIs zu kontrollieren und sicherzustellen, dass nur autorisierte Anwendungen oder Benutzer die Dienste nutzen können.

API-Keys sind eine gängige Methode, um die Sicherheit und Kontrolle über den Zugriff auf APIs zu gewährleisten.

### Beispiel was man mit einer Wetter-API machen kann
[API-Key-Beispiel](API/API-Key-example.md)

## 5. JWT-Token

### Was ist ein JWT-Token?


Ein JSON Web Token (JWT) ist ein kompaktes, URL-sicheres Format zur Übertragung von Informationen zwischen Parteien. Es besteht aus drei Teilen: Header, Payload und Signatur. Ein JWT-Token wird häufig zur Authentifizierung und Autorisierung in Webanwendungen verwendet.

### Aufbau eines JWT-Tokens

Ein JWT-Token setzt sich aus den folgenden Teilen zusammen:

- **Header:** Enthält den Typ des Tokens (z. B. "JWT") und den verwendeten Algorithmus zur Signaturerstellung.

- **Payload:** Hier werden die Informationen im JSON-Format gespeichert. Dazu gehören Ansprüche wie Benutzerinformationen, Ablaufdaten und andere nutzerspezifische Daten.

- **Signatur:** Die Signatur wird aus dem Header, dem Payload und einem geheimen Schlüssel gebildet. Sie dient der Überprüfung der Integrität und Authentizität des Tokens.

![JWT-Bild](JWT/JWT-build.png)

### Verwendungszwecke von JWT-Tokens

JWT-Tokens haben verschiedene Anwendungsbereiche, darunter:

- **Authentifizierung:** JWT-Tokens werden häufig als Authentifizierungsmethode verwendet. Nachdem ein Benutzer sich angemeldet hat, erhält er einen JWT-Token, der seine Identität bestätigt. Dieser Token wird bei jeder Anfrage an den Server gesendet.

- **Autorisierung:** Zusätzlich zur Authentifizierung können JWT-Tokens verwendet werden, um Zugriffsrechte und Rollen eines Benutzers festzulegen. Diese Informationen werden im Payload des Tokens gespeichert.

- **Single Sign-On (SSO):** JWT-Tokens können in einer SSO-Umgebung eingesetzt werden, um Benutzersitzungen über verschiedene Dienste hinweg zu verwalten, ohne dass der Benutzer sich bei jedem Dienst erneut anmelden muss.

- **Informationstransfer:** JWT-Tokens können genutzt werden, um sicher Informationen zwischen verschiedenen Diensten oder Mikroservices zu übertragen, da sie signiert sind und die Daten nicht manipuliert werden können.

### Vorteile von JWT-Tokens

- **Kompakt und plattformunabhängig:** JWT-Tokens sind einfach zu übertragen und plattformunabhängig nutzbar.

- **Selbst enthalten:** Da alle relevanten Informationen im Token selbst gespeichert sind, wird keine zusätzliche Serverdatenbank benötigt.

- **Sicherheit:** Die Signatur schützt vor Manipulation und Fälschung der Daten im Token.

### Beispiel

**Ein Beispiel für ein JWT-Token:**
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c


In diesem Beispiel enthält der Header den verwendeten Algorithmus (hier "HS256") und den Token-Typ (hier "JWT"), der Payload enthält Benutzerinformationen und der Signatur-Teil dient der Validierung.

Bitte beachtet, dass JWT-Tokens sicher verwaltet und gehandhabt werden sollten, um einen Missbrauch zu vermeiden.

## Credits

[Credits](credits.md)
