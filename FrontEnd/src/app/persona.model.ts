export interface Persona {
    id?:number
    nombre:string;
    apellido:string;
    profesion:string;
    ciudad:string;
    pais:string;
    imagenPerfil:string;
    telCelular:string;
    mail:string;
    sobremi:string;
    usuario:string;
    password:string;
    educacion:Educacion[];
    experiencia:Experiencia[];
    skill:Skill[];
    proyectos:Proyecto[];


}

export interface Educacion{
    id?:number;
    institucion:string;
    titulo:string;
    logoInstitucion:string;
    desde:Date;
    hasta:Date;
}

export interface Experiencia{
    id?:number;
    compania:string;
    puesto:string;
    logoCompania:string;
    desde:Date;
    hasta:Date;
}

export interface Skill{
    id?:number;
    tipo:string;
    nombre:string;
    progreso:number;

}

export interface Proyecto {
    id?:number;
    nombre:string;
    descripcion:string;
    linkGithub:string;
}
