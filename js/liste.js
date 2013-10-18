/*
 *	Deutsche Verben Trainer.
 *	German verbs trainer.
 *	Entrenador de verbos alemán.
 *
 *	Manu de Frutos Vila <manufvdev@gmail.com>
 *	2013
 */

 /*
  * Genera la lista de verbos
  */
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