// import { Planet } from './planet.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $("#submit").click(function(){
    $("form").submit(function(event){
      event.preventDefault();
    });
    let age = parseInt($("age").val());
    let estimated = parseInt($("estimated").val());
  })
});
