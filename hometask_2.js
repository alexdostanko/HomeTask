var term = {
    MINSK:-20,
    VITEBSK:-25,
    MOGILEV:-22,
    GOMEL:-19,
    BREST:-18,
    GRODNO:-18
  };

function vivodObj(term) { 
  var str = "<tr><td>ГОРОД</td><td>ТЕМПЕРАТУРА (°C)</td></tr>"; 
    for(k in term) { 
        str += "<tr><td>"+k+"</td><td>"+ term[k]+"</td></tr>"; 
    }
    document.getElementById('object').innerHTML = str;
} 
  
function getSredneeZnach(term){
  let sum = 0, count = 0;
    for(let i in term){
      count++;
      sum += term[i];
    }
    sr=(sum/count).toFixed(2);
    document.getElementById('sredneeZnach').innerHTML = sr;
}
  
function getMaximZnach(term) {
  let max = "-273.15";
    for(let i in term){
        if (term[i] > max){ 
            max = term[i]; 
        } 
    }
    document.getElementById('maximZnach').innerHTML = max;
}
  
  