class ResponseInterface{
    constructor(token,uri){
        this.token=token;
        this.uri=uri;
    }
}

export class ModuloResponseInterface extends ResponseInterface{
    alterarModulos(){
        
    }
    obtenerModulosDañados(){

    }
}

export class OcrResponseInterface extends ResponseInterface{
    enviarOcr(){

    }
    enviarOcrDeSegunda(){

    }
}

