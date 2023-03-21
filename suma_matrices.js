function sumar_matrices() {
    // Obtenemos los valores de los elementos de la matriz A
    var a11 = parseFloat(document.getElementById("A11").value);
    var a12 = parseFloat(document.getElementById("A12").value);
    var a13 = parseFloat(document.getElementById("A13").value);
    var a21 = parseFloat(document.getElementById("A21").value);
    var a22 = parseFloat(document.getElementById("A22").value);
    var a23 = parseFloat(document.getElementById("A23").value);
    var a31 = parseFloat(document.getElementById("A31").value);
    var a32 = parseFloat(document.getElementById("A32").value);
    var a33 = parseFloat(document.getElementById("A33").value);
  
    // Obtenemos los valores de los elementos de la matriz B
    var b11 = parseFloat(document.getElementById("B11").value);
    var b12 = parseFloat(document.getElementById("B12").value);
    var b13 = parseFloat(document.getElementById("B13").value);
    var b21 = parseFloat(document.getElementById("B21").value);
    var b22 = parseFloat(document.getElementById("B22").value);
    var b23 = parseFloat(document.getElementById("B23").value);
    var b31 = parseFloat(document.getElementById("B31").value);
    var b32 = parseFloat(document.getElementById("B32").value);
    var b33 = parseFloat(document.getElementById("B33").value);
  
    // Realizamos la suma de las dos matrices
    var c11 = a11 + b11;
    var c12 = a12 + b12;
    var c13 = a13 + b13;
    var c21 = a21 + b21;
    var c22 = a22 + b22;
    var c23 = a23 + b23;
    var c31 = a31 + b31;
    var c32 = a32 + b32;
    var c33 = a33 + b33;
  
    // Mostramos los resultados en la tabla correspondiente
    document.getElementById("C11").value = c11;
    document.getElementById("C12").value = c12;
    document.getElementById("C13").value = c13;
    document.getElementById("C21").value = c21;
    document.getElementById("C22").value = c22;
    document.getElementById("C23").value = c23;
    document.getElementById("C31").value = c31;
    document.getElementById("C32").value = c32;
    document.getElementById("C33").value = c33;
  }
  