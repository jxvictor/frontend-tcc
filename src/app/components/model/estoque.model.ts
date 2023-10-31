import { Produto } from "./produto.model";

export interface Estoque {
    id?: string;
    produto?: Produto;
    quantidade?: bigint;
    valor?: number;
    formaDePagamento?: string;
    data?: Date;
    tipo?: string;
}