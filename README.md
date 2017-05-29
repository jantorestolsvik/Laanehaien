## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

## Oppgaver

### Lag en "risikokomponent" 
- I `components/Loan` er det litt kaos. Den har blant annet en `div` som viser risko for de ulike beløpene. 
Dette bør være en egen komponent.

### Lage en knapp på forsiden
- Denne knappen skal route deg til `/loans`

### Forbedre "loans"-komponent
- På `components/Loans` vises lånene dine JSON.stringified. Dette er ikke veldig pent. Det bør heller være en komponent.
- Hver og en av underelementene til denne listen burde også være en egen komponent, f.eks. `LoanItem`. Skriv denne.


### Lag en "oppsummeringskomponent" som kan åpnes og lukkes
- Tilstanden skal være lokal i komponenten
- Komponenten kan brukes i Headerkomponenten så er den synlig på alle routes

### Vis frem din totale belåning, hvor mye du må betale neste måned og hvor mye av den betalingen som er render.
- Skal vises i oppsummeringskomponenten
- Du trenger ikke lagre den nye tilstanden på serveren
- Bruk connect til å koble komponenten til redux
- Bruk mapStateToProps i connect til å transformere dataene som skal vises.

### Gjør det mulig å ikke betale avdrag på et lån mot en avgift på 100 kr
- Lag støtte i reduceren for en ny action som kan sette paydownMonths på et lån til Number.MAX_VALUE eller finn en annen løsning.
- Legg til 100 kr på lånet dersom avdrag slås av
- Lag en funksjon i mapDispatchToProps i connect som kan dispatche den nye actionen.
- Lag en knapp som kan kaller funksjonen fra mapDispatchToProps med IDen på lånet