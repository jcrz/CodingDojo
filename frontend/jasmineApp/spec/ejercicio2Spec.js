//función que devuelva la suma del número más grande y el más pequeño del array.
//Por ejemplo, sumMaxMin([1,3,10]) debería devolver 10 + 1 = 11, y 
//sumMaxMin([-2,-5,-10]) debería devolver -2 + -10 = -12. 
function sumMaxMin(arreglo){
    var min = Math.min(...arreglo);
    var max = Math.max(...arreglo);
    return min + max;
}

// Pruebas
describe("sumMaxMin", function() { 
    it("deberia devolver 11 pasando como argumento [1,3,10]", function() { 
        expect(sumMaxMin([1,3,10])).toEqual(11); 
    }); 
    it("deberia devolver -12 pasando como argumento [-2,-5,-10]", function() { 
        expect(sumMaxMin([-2,-5,-10])).toEqual(-12); 
    }); 
});