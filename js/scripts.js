// scripts.js
var url = 'https://restcountries.eu/rest/v2/name/';
var countriesListLabels = $('#countries-labels');
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';
$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {

  countriesListLabels.empty();
  countriesList.empty();

        $('<th>').text('flag').appendTo(countriesListLabels);
       	$('<th>').text('name').appendTo(countriesListLabels);
        $('<th>').text('capital').appendTo(countriesListLabels);
        $('<th>').text('population').appendTo(countriesListLabels);
        $('<th>').text('area').appendTo(countriesListLabels);

  resp.forEach(function(item){
        var tableRow = $("<tr>");
        $('<td><img src="' + item.flag +'"></td>').appendTo(tableRow);
       	$('<td></td>').text(item.name).appendTo(tableRow);
        $('<td></td>').text(item.capital).appendTo(tableRow);
        var formatPopulation = numeral(item.population).format('0,0');
        $('<td></td>').text(formatPopulation).appendTo(tableRow);
        var formatArea = numeral(item.area).format("0,0");
        $('<td></td>').text(formatArea).appendTo(tableRow);
        tableRow.appendTo(countriesList);
});

}
