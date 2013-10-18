/**
 *	Deutsche Verben Trainer.
 *	German verbs trainer.
 *	Entrenador de verbos alemán.
 *
 *	Manu de Frutos Vila <manufvdev@gmail.com>
 *	2013
 */


/**
 * muestra los verbos
 */
function displayVerb(){
	$('#collapsePrasens').show(200);
	$('#collapsePrateritum').show(200);
	$('#collapsePartizipII').show(200);
}

/**
 * oculta los verbos
 */
function hideVerb(){
	$('#collapsePrasens').hide(200);
	$('#collapsePrateritum').hide(200);
	$('#collapsePartizipII').hide(200, getRandom);
}

/**
 * prepara un verbo aleatorio
 */
function getRandom(){

	var random = Math.floor(Math.random()*verben.length);

	$('#verboEsp').html(verben[random][0]);
	$('#hilfe-hidden').html(verben[random][4]);
	$('#verboPrasens').html(verben[random][1]);
	$('#verboPrateritum').html(verben[random][2]);
	$('#verboPartizipII').html(verben[random][3]);
}




$(function() {

	getRandom();

	//button hilfe
	$('#btn-hilfe').click(function() {
		$('#btn-hilfe').attr("data-content", $('#hilfe-hidden').html());
	});
	// tooltip hilfe
	$('#btn-hilfe').popover();

	//button prufen
	$('#btn-prufen').click(function() {
		displayVerb();
	});

	//button nachste
	$('#btn-nachste').click(function() {
		hideVerb();
	});
  

 });