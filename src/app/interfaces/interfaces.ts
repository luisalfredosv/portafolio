export interface InterfacePersonal {
    foto?: string,
    userName: string,
    nombreOne: string,
    nombreTwo: string,
    apellidoOne: string,
    apellidoTwo: string,
    fechaNacimiento: string,
    nacionalidad: string,
    direccion: any[],
    correoOne: string,
    correoTwo: string,
    telegram: string,
    linkedIn: string,
    gitHub: string,
    cv: string,
    ocupaciones: string[],
    hobbies: string[],
    descripcion: string,
    infoextra: string
}

export interface InterfaceEstudios{
    id: number,
    nombre: string,
    siglas: string,
    inicio: string,
    fin:    string,
    status: string,
    titulo: string,
    mension:string,
    ubicacion:string,
}

export interface InterfaceExperienciaLaboral{
    id: number,
    nombre: string,
    areaEmpresa: string,
    cargo:  string,
    tareas: string[],
    inicio: string,
    fin:    string,
}

export interface InterfaceSistemasRealizados{
    id: number,
    name: string,
    empresa: string,
    tecnologias: string[],
    descripcion: string,
    acciones: string[],
    fecha: string,
    tareas: string[],
    carpetaImg: string,
    img_s: string[]
}

export interface InterfaceTechPrograming{
    nombre: string,
    nivel: number
}