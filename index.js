let yo = {
    nombre: 'yeison',
    edad: 22,
    hablar: function () {
      console.log(this.nombre);
    }
};
  
yo.hablar(); // yeison

let decirNombre = function(obj) {
    obj.hablar = function() {
    console.log(this.nombre);
    };
  };
  
  const Mateo = {
    nombre: 'Mateo',
    edad: 22
  };
  
  const juan = {
    nombre: 'Juan',
    edad: 25
  };
  
  decirNombre(juan);
  decirNombre(Mateo);
  
  juan.hablar(); // Juan
  Mateo.hablar(); // Mateo