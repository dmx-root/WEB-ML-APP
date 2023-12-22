import {ModuloRequestInterface} from'../API/requestsInterfaces'

export class EventModalManageFormModulosReq extends ModuloRequestInterface{
    solicitarModulos(){
        this.obterModulos();
    }
    solicitarModulosDanados(){
        this.obtenerModulosDañados();
    }
}