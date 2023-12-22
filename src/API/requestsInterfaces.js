class RequestInterface{
    constructor(token,uri){
        this.token=token;
        this.uri=uri;
    }
}

export class ModuloRequestInterface extends RequestInterface{
    obterModulos(){
        
    }
    obtenerModulosDañados(){

    }
}

export class OcrRequestInterface extends RequestInterface{
    obtenerOcr(){

    }
    obtenerOcrPorOp(){

    }
}

