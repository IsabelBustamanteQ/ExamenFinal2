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
            else if(monto>=2)
            {
                monedas+="2, ";
                monto-=2;
            }
            else if(monto>=1)
            {
                monedas+="1, ";
                monto-=1;
            }
            else if(monto>=0.5)
            {
                monedas+="0.5, ";
                monto-=0.5;
            }
            else
            {
                monedas+="0.2, ";
                monto-=0.2;
            }
        }
        return monedas;
    }
  }
  
  export default cambiarDinero;