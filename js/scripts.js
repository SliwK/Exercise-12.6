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
        $('<td><img>').appendTo(countriesList);
        var imgCountry = $('img');
        $(imgCountry).attr('src', item.flag);
       	$('<td>').text(item.name).appendTo(countriesList);
        $('<td>').text(item.capital).appendTo(countriesList);
        $('<td>').text(item.population).appendTo(countriesList);
        $('<td>').text(item.area).appendTo(countriesList);
});

}
