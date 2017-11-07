$(document).ready(function(){
  $.ajax({
      url : 'https://developer.trimet.org/ws/V1/arrivals?locIDs=6137&appID=34B6C26A06BC68D44A5A84188&json=true',
      type : 'GET',
      dataType : 'json',
      success: function(data) {
        console.log('Success!');
        console.log(data);
        console.log(data.resultSet.arrival[0].scheduled.slice(11,16));
        console.log(data.resultSet.queryTime.slice(11,16));
        var n = String(parseInt(data.resultSet.arrival[0].scheduled.slice(11,16))-parseInt(data.resultSet.queryTime));
        console.log(n);
        var location = document.getElementById('location');
        var one = document.getElementById('one');
        var two = document.getElementById('two');
        var three = document.getElementById('three');

        location.innerHTML = data.resultSet.location["0"].desc;
        one.innerHTML = data.resultSet.arrival[0].shortSign + " - " + String(parseInt(data.resultSet.arrival[0].scheduled.slice(11,16))-parseInt(data.resultSet.queryTime.slice(11,16)));
        two.innerHTML = data.resultSet.arrival[1].shortSign+ " - " + data.resultSet.arrival[1].scheduled.slice(11,16);
        three.innerHTML = data.resultSet.arrival[2].shortSign+ " - " + data.resultSet.arrival[2].scheduled.slice(11,16);

        },
      error: function() {
        console.log('Uh Oh!');
        },
      });
})
