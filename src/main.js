import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './../.env';
import $ from 'jquery';

$(document).ready(function() {

  $("#doctor-requested-info").submit(function(event){
    event.preventDefault();

    let location = $("#address").val();
    let medicalSymptom = $("#medical-symptom").val();
    let doctorName = $("#doctor-name").val();

    $('#address').val("");
    $("#medical-symptom").val("");
    $("#doctor-name").val("");


    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorName}&specialty_uid=${medicalSymptom}&location=${location}&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=4eb8980f81fbd52ac494fd65e2bd5a1b`).then(function(response){
      console.log(response);
      $('#doctor-results').append("doctor name: "+ response.data.profile.first_name + response.data.profile.last_name)
    })
    .fail(function(error) {
          $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);

})




  });
});
