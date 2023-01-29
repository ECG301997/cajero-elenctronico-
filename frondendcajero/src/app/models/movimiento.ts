export class movimiento{
        id : number
		saldo :number	
		fecha	: String	
		documento	: String
		tipoMov : String 

        constructor(id: number,saldo :number,fecha: String,documento : String,tipoMov : String){
            this.id = id
            this.saldo = saldo
            this.fecha = fecha 
            this.documento = documento
            this.tipoMov = tipoMov

        }
}


export class retiro{
    valorRetiro :number 
    constructor(valorRetiro : number){
        this.valorRetiro = valorRetiro
    }

}