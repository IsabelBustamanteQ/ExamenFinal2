function cambiarDinero(monto) {
    let monedas="";
    let cambios=[5,2,1,0.5,0.2];
    if(!monto){
        return "";
    }
    else
    {
        var i=0;
       while(monto>0&&i<5)
        {
            if(monto>=cambios[i])
            {
                monedas+=cambios[i].toString()+", ";
                monto-=cambios[i];
            }
            else
            {
                i++;
            }
        }
        return monedas;
    }
  }
  
  export default cambiarDinero;