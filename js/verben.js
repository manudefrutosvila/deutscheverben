/*
 *	Deutsche Verben Trainer.
 *	German verbs trainer.
 *	Entrenador de verbos alemán.
 *
 *	Manu de Frutos Vila <manufvdev@gmail.com>
 *	2013
 */

var verben = 
	[
			["quedarse, permanecer", "bleiben", "blieb", "ist geblieben", "Typ I - A: ei / i: / i:"],
			["escribir", "schreiben", "schrieb", "hat geschrieben", "Typ I - A: ei / i: / i:"],
			["subir", "steigen / einsteigen", "stieg / stieg ein", "ist gestiegen / ist eingestiegen", "Typ I - A: ei / i: / i:"],
			["bajar", "aussteigen", "stieg aus", "ist ausgestiegen", "Typ I - A: ei / i: / i:"],
			["hacer transbordo", "umsteigen", "stieg um", "ist umgestiegen", "Typ I - A: ei / i: / i:"],
			["hacer deporte", "Sport treiben", "trieb", "hat getrieben", "Typ I - A: ei / i: / i:"],
			["prestar", "leihen", "lieh", "hat geliehen", "Typ I - A: ei / i: / i:"],
			["gritar", "schreien", "schrie", "hat geschrien", "Typ I - A: ei / i: / i:"],
			["brillar", "scheinen", "schien", "hat geschienen", "Typ I - A: ei / i: / i:"],

			["cortar", "schneiden", "schnitt", "hat geschnitten", "Typ I - B: ei / i / i"],
			["comparar", "vergleichen", "verglich", "hat verglichen", "Typ I - B: ei / i / i"],

			["volar", "fliegen", "flog", "ist geflogen", "Typ II - A: i: / o: / o:"],
			["salir en avión", "abfliegen", "flog ab", "ist abgeflogen", "Typ II - A: i: / o: / o:"],
			["volver en avión", "zurückfliegen", "flog zurück", "ist zurückgeflogen", "Typ II - A: i: / o: / o:"],
			["ofrecer", "bieten", "bot", "hat geboten", "Typ II - A: i: / o: / o:"],
			["vestir", "anziehen", "zog an", "hat angezogen", "Typ II - A: i: / o: / o:"],
			["desvestir", "ausziehen", "zog aus", "hat ausgezogen", "Typ II - A: i: / o: / o:"],
			["mudarse, trasladarse", "umziehen", "zog um", "hat umgezogen", "Typ II - A: i: / o: / o:"],
			["perder", "verlieren", "verlor", "hat verloren", "Typ II - A: i: / o: / o:"],

			["cerrar", "schließen", "schloss", "hat geschlossen", "Typ II - B: i: / o / o"],

			["encontrar", "finden", "fand", "hat gefunden", "Typ III: i / a / u"],
			["tener lugar, celebrarse", "stattfinden", "fand statt", "hat stattgefunden", "Typ III: i / a / u"],
			["cantar", "singen", "sang", "hat gesungen", "Typ III: i / a / u"],
			["beber", "trinken", "trank", "hat getrunken", "Typ III: i / a / u"],
			["saltar", "springen", "sprang", "ist gesprungen", "Typ III: i / a / u"],

			["viajar (en coche)", "fahren", "fuhr", "ist gefahren", "Typ IV: a: / u: / a: oder a / u / a"],
			["salir (de viaje) (en coche)", "abfahren", "fuhr ab", "ist abgefahren", "Typ IV: a: / u: / a: oder a / u / a"],
			["partir en coche", "webfahren", "fuhr web", "ist webgefahren", "Typ IV: a: / u: / a: oder a / u / a"],
			["ir en bici", "Rad fahren", "fuhr", "ist gefahren", "Typ IV: a: / u: / a: oder a / u / a"],
			["invitar", "einladen (lädt ein)", "lud ein", "hat eingeladen", "Typ IV: a: / u: / a: oder a / u / a"],
			["llevar (puesto)", "tragen (trägt)", "trug", "hat getragen", "Typ IV: a: / u: / a: oder a / u / a"],
			["lavar", "waschen (wäscht)", "wusch", "hat gewaschen", "Typ IV: a: / u: / a: oder a / u / a"],

			["comenzar, empezar (real)", "beginnen", "begann", "hat begonnen", "Typ V - A: i / a / o"],
			["ganar", "gewinnen", "gewann", "hat gewonnen", "Typ V - A: i / a / o"],
			["nadar", "schwimmen", "schwamm", "ist geschwommen", "Typ V - A: i / a / o"],

			["venir", "kommen", "kam", "ist gekommen", "Typ V - B: o / a: / o"],
			["venir (con alguien)", "mitkommen", "kam mit", "ist mitgekommen", "Typ V - B: o / a: / o"],
			["volver", "zurückkommen", "kam zurück", "ist zurückgekommen", "Typ V - B: o / a: / o"],
			["llegar", "ankommen", "kam an", "ist angekommen", "Typ V - B: o / a: / o"],
			["recibir", "bekommen", "bekam", "hat bekommen", "Typ V - B: o / a: / o"],

			["aconsejar, recomendar", "empfehlen (empfiehlt)", "empfahl", "hat empfohlen", "Typ V - C: e: / a: / o: oder e / a: / o oder e / a / o"],
			["mandar, ordenar", "befehlen (befiehlt)", "befahl", "hat befohlen", "Typ V - C: e: / a: / o: oder e / a: / o oder e / a / o"],
			["tomar, coger, comer / beber, pedir", "nehmen (nimmt)", "nahm", "hat genommen", "Typ V - C: e: / a: / o: oder e / a: / o oder e / a / o"],
			["tomar / llevar / traer (consigo)", "mitnehmen (nimmt mit)", "nahm mit", "hat mitgenommen", "Typ V - C: e: / a: / o: oder e / a: / o oder e / a / o"],
			["hablar", "sprechen (spricht)", "sprach", "hat gesprochen", "Typ V - C: e: / a: / o: oder e / a: / o oder e / a / o"],
			["quedar", "treffen (trifft) ", "traf", "hat getroffen", "Typ V - C: e: / a: / o: oder e / a: / o oder e / a / o"],
			["morir", "sterben", "starb", "ist gestorben", "Typ V - C: e: / a: / o: oder e / a: / o oder e / a / o"],
			["lanzar", "werfen (wirft) ", "warf", "hat geworfen", "Typ V - C: e: / a: / o: oder e / a: / o oder e / a / o"],
			["ayudar", "helfen (hilft)", "half", "hat geholfen", "Typ V - C: e: / a: / o: oder e / a: / o oder e / a / o"],

			["ver", "sehen (sieht)", "sah", "hat gesehen", "Typ VI - A: e: / a: / e: oder e / a: / e"],
			["ver la televisión", "fernsehen (sieht fern)", "sah fern", "hat ferngesehen", "Typ VI - A: e: / a: / o: oder e / a: / e"],
			["dar", "geben (gibt)", "gab", "hat gegeben", "Typ VI - A: e: / a: / o: oder e / a: / e"],
			["gastar", "Geld ausgeben (gibt aus)", "gab aus", "hat ausgegeben", "Typ VI - A: e: / a: / o: oder e / a: / e"],
			["leer", "lesen (liest)", "las", "hat gelesen", "Typ VI - A: e: / a: / o: oder e / a: / e"],
			["comer", "essen (isst)", "aß", "hat gegessen", "Typ VI - A: e: / a: / o: oder e / a: / e"],
			["devorar", "fressen (frisst)", "fraß", "hat gefressen", "Typ VI - A: e: / a: / o: oder e / a: / e"],
			["olvidar", "vergessen (vergisst)", "vergaß", "hat vergessen", "Typ VI - A: e: / a: / o: oder e / a: / e"],

			["estar tumbado, yacer", "liegen", "lag", "hat gelegen", "Typ VI - B: i: / a: / e: oder i / a: / e: oder i / a: / e"],
			["pedir", "bitten", "bat", "hat gebeten", "Typ VI - B: i: / a: / e: oder i / a: / e: oder i / a: / e"],
			["estar sentado", "sitzen", "saß", "hat gesessen", "Typ VI - B: i: / a: / e: oder i / a: / e: oder i / a: / e"],

			["dormir", "schlafen (schläft)", "schlief", "hat geschlafen", "Typ VII: Stammvokal im Infinitiv und im Perfekt gleich"],
			["correr", "laufen (läuft)", "lief", "ist gelaufen", "Typ VII: Stammvokal im Infinitiv und im Perfekt gleich"],
			["caer", "fallen (fällt)", "fiel", "ist gefallen", "Typ VII: Stammvokal im Infinitiv und im Perfekt gleich"],
			["gustar, agradar", "gefallen (gefällt)", "gefiel", "hat gefallen", "Typ VII: Stammvokal im Infinitiv und im Perfekt gleich"],
			["parar / mantener", "halten (hält)", "hielt", "hat gehalten", "Typ VII: Stammvokal im Infinitiv und im Perfekt gleich"],
			["dejar", "lassen (lässt)", "ließ", "hat gelassen", "Typ VII: Stammvokal im Infinitiv und im Perfekt gleich"],
			["comenzar, empezar (abstracto)", "anfangen (fängt an)", "fing an", "hat angefangen", "Typ VII: Stammvokal im Infinitiv und im Perfekt gleich"],
			["aconsejar", "raten (rät)", "riet", "hat geraten", "Typ VII: Stammvokal im Infinitiv und im Perfekt gleich"],
			["llamar", "rufen", "rief", "hat gerufen", "Typ VII: Stammvokal im Infinitiv und im Perfekt gleich"],
			["llamar por telefono", "anrufen", "rief an", "hat angerufen", "Typ VII: Stammvokal im Infinitiv und im Perfekt gleich"],
			["llamarse", "heißen", "hieß", "hat geheißen", "Typ VII: Stammvokal im Infinitiv und im Perfekt gleich"],

			["estar de pie", "stehen", "stand", "hat gestanden", "Typ VIII: Andere"],
			["levantarse, ponerse de pie", "aufstehen", "stand auf", "hat aufgestanden", "Typ VIII: Andere"],
			["entender", "verstehen", "verstand", "hat verstanden", "Typ VIII: Andere"],
			["ir", "gehen", "ging", "ist gegangen", "Typ VIII: Andere"],
			["salir", "ausgehen", "ging aus", "ist ausgegangen", "Typ VIII: Andere"],
			["irse, marcharse", "weggehen", "ging weg", "ist weggegangen", "Typ VIII: Andere"],
			["pasear", "spazieren gehen", "ging", "ist gegangen", "Typ VIII: Andere"],
			["hacer", "tun (tut)", "tat", "hat getan", "Typ VIII: Andere"],

			["traer, llevar", "bringen", "brachte", "hat gebracht", "Typ IX: Gemischte Konjugation"],
			["traer, llevar (consigo)", "mitbringen", "brachte mit", "hat mitgebracht", "Typ IX: Gemischte Konjugation"],
			["pensar", "denken", "dachte", "hat gedacht", "Typ IX: Gemischte Konjugation"],
			["conocer", "kennen", "kannte", "hat gekannt", "Typ IX: Gemischte Konjugation"],
			["saber", "wissen (weiß)", "wusste", "hat gewusst", "Typ IX: Gemischte Konjugation"],
			["gustar", "mögen (mag)", "mochte", "hat gemocht", "Typ IX: Gemischte Konjugation"],

			["poder", "können (kann)", "konnte", "hat gekonnt", "Typ X: Modal und Hilfsverben"],
			["tener que", "müssen (muss)", "musste", "hat gemusst", "Typ X: Modal und Hilfsverben"],
			["poder (de permiso)", "dürfen", "durfte", "hat gedurft", "Typ X: Modal und Hilfsverben"],
			["querer", "wollen (will)", "wollte", "hat gewollt", "Typ X: Modal und Hilfsverben"],
			["deber", "sollen (soll)", "sollte", "hat gesollt", "Typ X: Modal und Hilfsverben"],
			["tener", "haben (hat)", "hatte", "hat gehabt", "Typ X: Modal und Hilfsverben"],
			["ser, estar", "sein", "war", "ist gewesen", "Typ X: Modal und Hilfsverben"],
			["llegar a ser", "werden (wird)", " wurde", "ist geworden", "Typ X: Modal und Hilfsverben"]
		];

extraverben = 
	[

		["hornear", "backen", "backte", "hat gebacken", ""],
		["engañar", "betrügen", "betrog", "hat betrogen", ""],
		["demostrar", "beweisen", "bewies", "hat bewiesen", ""],
		["doblar", "biegen", "bog", "hat gebogen", ""],
		["atar", "binden", "band", "hat gebunden", ""],
		["soplar", "blasen", "blies", "hat geblasen", ""],
		["freir", "braten", "briet", "hat gebraten", ""],
		["arder", "brennen", "brannte", "hat gebrannt", ""],
		["recibir", "empfangen", "empfing", "hat empfangen", ""],
		["sentir", "empfinden", "empfand", "hat empfunden", ""],
		["asustarse", "erschrecken", "erschrak", "ist erschrocken", ""],
		["coger", "fangen (fängt)", "fing", "hat gefangen", ""],
		["trenzar", "flechten (flicht)", "flocht", "hat geflochten", ""],
		["huir", "fliehen", "floh", "ist geflohen", ""],
		["fluir", "fließen", "floss", "ist geflossen", ""],
		["helarse", "frieren", "fror", "hat/ist gefroren", ""],
		["fermentar", "gären", "gor", "hat/ist gegoren", ""],
		["parir", "gebären", "gebar", "hat geboren", ""],
		["disfrutar", "genießen", "genoss", "hat genossen", ""],
		["salir bien", "geraten", "geriet", "ist geraten", ""],
		["ocurrir", "geschehen (geschieht)", "geschah", "ist geschehen", ""],
		["regar", "gießen", "goss", "hat gegossen", ""],
		["agarrar", "greifen", "griff", "hat gegriffen", ""],
		["colgar", "hängen", "hing", "hat gehangen/gehängt", ""],
		["elevar", "heben", "hob", "hat gehoben", ""],
		["sonar", "klingen", "klang", "hat geklungen", ""],
		["cargar", "laden (lädt)", "lud", "hat geladen", ""],
		["sufrir", "leiden", "litt", "hat gelitten", ""],
		["mentir", "lügen", "log", "hat gelogen", ""],
		["evitar", "meiden", "mied", "hat gemieden", ""],
		["medir", "messen (misst)", "maß", "hat gemessen", ""],
		["fracasar", "misslingen", "misslang", "ist misslungen", ""],
		["nombrar", "nennen", "nannte", "hat gennant", ""],
		["silbar", "pfeifen", "pfiff", "hat gepfiffen", ""],
		["frotar", "reiben", "rieb", "hat gerieben", ""],
		["cabalgar", "reiten", "ritt", "ist geritten", ""],
		["correr", "rennen", "rannte", "ist gerannt", ""],
		["beber (despectivo)", "saufen (säuft)", "soff", "hat gesoffen", ""],
		["crear", "schaffen", "schuf", "hat geschaffen", ""],
		["arrastrar", "schieben", "schob", "hat geschoben", ""],
		["golpear", "schlagen (schlägt)", "schlug", "hat geschlagen", ""],
		["atar", "schlingen", "schlang", "hat geschlungen", ""],
		["callarse", "schweigen", "schwieg", "hat geschwiegen", ""],
		["disminuir", "verschwinden", "verschwand", "ist geschwunden", ""],
		["jurar", "schwören", "schwor", "hat geschworen", ""],
		["enviar", "senden", "sandte", "hat gesandt", ""],
		["pinchar", "stechen (sticht)", "stach", "hat gestochen" , ""]
		["robar", "stehlen (stiehlt)", "stahl", "hat gestohlen", ""],
		["empujar", "stoßen (stößt)", "stieß", "hat gestoßen", ""],
		["pintar, untar", "streichen", "strich", "hat gestrichen", ""],
		["disputar", "streiten", "stritt", "hat gestritten", ""],
		["pisar", "treten (triff)", "trat", "ist getreten", ""],
		["perdonar", "verzeihen", "verzieh", "hat verziehen", ""],
		["crecer", "wachsen (wächst)", "wuchs", "ist gewachsen", ""],
		["esquivar", "weichen", "wich", "ist gewichen", ""],
		["girar", "wenden", "wandte", "hat gewandt", ""],
		["publicitar", "werben (wirbt)", "warb", "hat geworben", ""],
		["tirar", "ziehen", "zog", "hat gezogen", ""],
		["obligar", "zwingen", "zwang", "hat gezwungen", ""],
	];


function getRandom(){
	var verboEsp=document.getElementById("verboEsp");
	var verboPrasens=document.getElementById("verboPrasens");
	var verboPrateritum=document.getElementById("verboPrateritum");
	var verboPartizipII=document.getElementById("verboPartizipII");
	var hilfe=document.getElementById("hilfe");

	hilfe.style.display = 'none';
	verboPrasens.style.visibility = 'hidden';
	verboPrateritum.style.visibility = 'hidden';
	verboPartizipII.style.visibility = 'hidden';

	var random = Math.floor(Math.random()*verben.length);

	verboEsp.innerHTML = verben[random][0];
	hilfe.innerHTML = verben[random][4];
	verboPrasens.innerHTML = verben[random][1];
	verboPrateritum.innerHTML = verben[random][2];
	verboPartizipII.innerHTML = verben[random][3];
}

function displayVerb(){
	var verboEsp=document.getElementById("verboEsp");
	var verboPrasens=document.getElementById("verboPrasens");
	var verboPrateritum=document.getElementById("verboPrateritum");
	var verboPartizipII=document.getElementById("verboPartizipII");

	verboPrasens.style.visibility = 'visible';
	verboPrateritum.style.visibility = 'visible';
	verboPartizipII.style.visibility = 'visible';
}

function displayHilfe(){
	var hilfe=document.getElementById("hilfe");

	hilfe.style.display = 'block';
}

function generateListe(extra){
	var table = document.getElementById("verbenliste");
	var n, row, cell, text;
	var tipo = '';

	for(var i in verben){
		// si es un tipo de verbo nuevo
		if (verben[i][4] != tipo){
			tipo = verben[i][4];

			//fila en blanco
			row = document.createElement('tr');
			cell = document.createElement('td');
			cell.setAttribute('style', 'background-color:#ffeecc;');
			cell.innerHTML = "&nbsp;";
			cell.setAttribute('colspan', '5');
			cell.appendChild(document.createTextNode(" "));
			row.appendChild(cell);
			table.getElementsByTagName('tbody')[0].appendChild(row);

			//fila con tipo
			row = document.createElement('tr');
			cell = document.createElement('td');
			cell.setAttribute('style', 'background-color:#ffeecc;');
			cell.appendChild(document.createTextNode(""));
			row.appendChild(cell);
			cell = document.createElement('th');
			cell.setAttribute('colspan', '4')
			cell.setAttribute('style', 'background-color:#ffeecc;');
			text = document.createTextNode(tipo);
			cell.appendChild(text);
			row.appendChild(cell);
			table.getElementsByTagName('tbody')[0].appendChild(row);

			//fila en blanco
			row = document.createElement('tr');
			cell = document.createElement('td');
			cell.setAttribute('style', 'background-color:#ffeecc;');
			cell.innerHTML = "&nbsp;";
			cell.setAttribute('colspan', '5');
			cell.appendChild(document.createTextNode(" "));
			row.appendChild(cell);
			table.getElementsByTagName('tbody')[0].appendChild(row);
		}

		row = document.createElement('tr');
		n = parseInt(i) + 1;
		cell = document.createElement('td');
		text = document.createTextNode(n);
		cell.appendChild(text);
		row.appendChild(cell);
		
		cell = document.createElement('td');
		text = document.createTextNode(verben[i][0]);
		cell.appendChild(text);
		row.appendChild(cell);

		cell = document.createElement('td');
		text= document.createTextNode(verben[i][1]);
		cell.appendChild(text);
		row.appendChild(cell);

		cell = document.createElement('td');
		text = document.createTextNode(verben[i][2]);
		cell.appendChild(text);
		row.appendChild(cell);

		cell = document.createElement('td');
		text = document.createTextNode(verben[i][3]);
		cell.appendChild(text);
		row.appendChild(cell);
		table.getElementsByTagName('tbody')[0].appendChild(row);
	}

	if (extra==1){
		//fila en blanco
		row = document.createElement('tr');
		cell = document.createElement('td');
		cell.setAttribute('style', 'background-color:#ffeecc;');
		cell.innerHTML = "&nbsp;";
		cell.setAttribute('colspan', '5');
		cell.appendChild(document.createTextNode(" "));
		row.appendChild(cell);
		table.getElementsByTagName('tbody')[0].appendChild(row);

		//fila hr
		row = document.createElement('tr');
		cell = document.createElement('td');
		cell.setAttribute('colspan', '5');
		cell.setAttribute('style', 'background-color:#ffeecc;');
		cell.appendChild(document.createElement('hr'));
		row.appendChild(cell);
		table.getElementsByTagName('tbody')[0].appendChild(row);

		//fila en blanco
		row = document.createElement('tr');
		cell = document.createElement('td');
		cell.setAttribute('style', 'background-color:#ffeecc;');
		cell.innerHTML = "&nbsp;";
		cell.setAttribute('colspan', '5');
		cell.appendChild(document.createTextNode(" "));
		row.appendChild(cell);
		table.getElementsByTagName('tbody')[0].appendChild(row);
		
		for(var j in extraverben){
			row = document.createElement('tr');
			n = parseInt(i) + parseInt(j) + 2;
			cell = document.createElement('td');
			text = document.createTextNode(n);
			cell.appendChild(text);
			row.appendChild(cell);

			cell = document.createElement('td');
			text = document.createTextNode(extraverben[j][0]);
			cell.appendChild(text);
			row.appendChild(cell);

			cell = document.createElement('td');
			text= document.createTextNode(extraverben[j][1]);
			cell.appendChild(text);
			row.appendChild(cell);

			cell = document.createElement('td');
			text = document.createTextNode(extraverben[j][2]);
			cell.appendChild(text);
			row.appendChild(cell);

			cell = document.createElement('td');
			text = document.createTextNode(extraverben[j][3]);
			cell.appendChild(text);
			row.appendChild(cell);
			table.getElementsByTagName('tbody')[0].appendChild(row);
		}
	}

}





  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-40100159-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

