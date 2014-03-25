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
	$('#inputPrasens').val($('#verboPrasens').html());
	$('#inputPrateritum').val($('#verboPrateritum').html());
	$('#inputPartizipII').val($('#verboPartizipII').html());
}

/**
 * oculta los verbos
 */
function hideVerb(){
	$('#inputPrasens').val("");
	$('#inputPrateritum').val("");
	$('#inputPartizipII').val("");
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
		getRandom();
	});
  

 });