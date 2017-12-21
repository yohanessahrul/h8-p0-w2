function balikString(kata){
    var kataBaru = '';
    for(i = kata.length - 1; i >= 0; i--){
      kataBaru += kata[i]
    }
    return kataBaru;
  }
  
  console.log(balikString('Hello World!'));
  