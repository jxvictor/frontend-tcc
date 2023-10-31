import { Role } from "./role.model";
import { UsuarioRole } from "./usuarioRole.enum";

export interface Usuario {
    id?: string;
    username?: String;
    password?: String;
    email?: String;
    roles?: Role[];
}