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
  });
});
