// Generated by https://quicktype.io
export interface InscribirMateria extends Materia {
  correo_institucional: string;
  cantidad_alumnos: number;
  nombreGrupo: string;
}

export interface Materia {
  cod_asignatura: string;
  nombre: string;
  grupos?: GrupoResponse[];
}

export interface GrupoResponse {
  cod_grupo: number;
  nombre: string;
  cod_asignatura?: string;
  cantidad_alumnos?: number;
}