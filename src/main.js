import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './../.env';
import $ from 'jquery';
import { Doctor } from './../js/doctorLookup.js';

$(document).ready(function() {

  $("#doctor-requested-info").submit(function(event){
    event.preventDefault();

    let location = $("#address").val().toLowerCase();
    let medicalSymptom = $("#medical-symptom").val();
    let doctorName = $("#doctor-name").val();

    $('#address').val("");
    $("#medical-symptom").val("");
    $("#doctor-name").val("");


    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorName}&query=${medicalSymptom}&location=${location}&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=4eb8980f81fbd52ac494fd65e2bd5a1b`).then(function(response){
      console.log(response);

      if (response.data.length === 0){
        console.log(response.data.length);
        $('#doctor-results').append("No matches for your search criteria, please try again");
        $('#doctor-results').show();
        $('#doctor-requested-info').hide();
      }else{
        for(let i = 0; i < response.data.length; i++){
          for(let j = 0; j < response.data[i].specialties.length; j++){
            console.log(response.data.length);
            $('#doctor-results').append(`<img src=${response.data[i].profile.image_url}>` +"<br><strong>Doctor Name: </strong>"+ response.data[i].profile.first_name + " " + response.data[i].profile.last_name + ", "+ response.data[i].profile.title + '<br><strong> Accepting New Patients? </strong>' + response.data[i].practices[0].accepts_new_patients + '<br><strong> Location: </strong>'+ response.data[i].practices[0].visit_address.street +", "+ response.data[i].practices[0].visit_address.city +", "+ response.data[i].practices[0].visit_address.state +'<br><strong> Specialty: </strong>' + response.data[i].specialties[j].name +'<br><strong> Phone Number: </strong>'+ response.data[i].practices[0].phones[0].number +'<br><strong> Website: </strong>' + response.data[i].practices[0].website + '<br><strong> Bio: </strong>' + response.data[i].profile.bio + '<hr>')
            $('#doctor-results').show();
            $('#doctor-requested-info').hide();
          }
        }
      }
    })
    .fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    })
  });
});
