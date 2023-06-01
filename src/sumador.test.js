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
  
  
  

});
