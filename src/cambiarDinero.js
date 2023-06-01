function cambiarDinero(monto) {
    let monedas="";
    if(!monto){
        return "";
    }
    else
    {
        while(monto>0)
        {
            if(monto>=5)
            {
                monedas+="5, ";
                monto-=5;
            }
            if(monto>=2)
            {
                monedas+="2, ";
                monto-=2;
            }
            if(monto>=1)
            {
                monedas+="1, ";
                monto-=1;
            }
            
        }
        return monedas;
    }
  }
  
  export default cambiarDinero;