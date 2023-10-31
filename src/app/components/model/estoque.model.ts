import { Produto } from "./produto.model";

export interface Estoque {
    id?: string;
    produto?: Produto;
    quantidade?: bigint;
    valorUnitario?: number;
    data?: Date;
    tipo?: string;
}