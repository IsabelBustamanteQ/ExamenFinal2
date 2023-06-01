import restar from "./sumador.js";
import cambiarDinero from "./cambiarDinero.js";
describe("restar", () => {
  it("deberia restar dos numeros", () => {
    expect(restar(3, 2)).toEqual(1);
  });
});
describe("Cambiar Dinero",()=>{
  it("Si no se manda ningun valor, devuelve 0",()=>{
    expect(cambiarDinero()).toEqual("");
  });
  it("Se cambia un valor de moneda",()=>{
    expect(cambiarDinero(5)).toEqual("5, ");
  });
  it("Se cambia un valor de moneda de 2",()=>{
    expect(cambiarDinero(2)).toEqual("2, ");
  });
  it("Se cambia un valor de moneda de 1",()=>{
    expect(cambiarDinero(1)).toEqual("1, ");
  });
  
  it("Se cambia un valor de moneda de 0.5",()=>{
    expect(cambiarDinero(0.5)).toEqual("0.5, ");
  });
  
  it("Se cambia un valor de moneda de 0.2",()=>{
    expect(cambiarDinero(0.2)).toEqual("0.2, ");
  });
  
  it("Se cambia un valor mayor a las monedas",()=>{
    expect(cambiarDinero(10)).toEqual("5, 5, ");
  });
  
  it("Se cambia un monto con varias monedas",()=>{
    expect(cambiarDinero(7)).toEqual("5, 2, ");
  });
  

});
