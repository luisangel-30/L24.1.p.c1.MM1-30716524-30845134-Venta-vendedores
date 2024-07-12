export default class CL_reporte{
    constructor(){
        this.contmenor=0;
        this.contmayor=0;
        this.acumventas=0.0;
    }
    procesar(ven){
        this.acumventas+=ven.montoventa;
        if(ven.montoventa<=100)
            this.contmenor++;
        else
        this.contmayor++;
    }
}