import { Injectable } from '@angular/core';
import { InterfacePersonal, InterfaceSistemasRealizados, InterfaceEstudios, InterfaceExperienciaLaboral, InterfaceTechPrograming } from '../interfaces/interfaces'

@Injectable({
  providedIn: 'root'
})
export class DataInfoService {

  constructor() { }

     //////////////////////////////////////////////////////////////////////////
    //// DATOS PARA EL SISTEMA DE PORTAFOLIOS BY LUIS SARABIA 07/01/2021  ////
   //////////////////////////////////////////////////////////////////////////


// infoPersonal                 || Datos personales
// infoSistemasRealizados       || Sistemas Realizados
// infoEstudios                 || Formacion Profesional
// infoExperienciaLaboral       || Experiencia Laboral
// infoTecnologias              || Manejo de Tecnologias
// infoLenguajesProgramacion    || Manejo de Lenguajes de Programacion 
// infoBaseDatos                || Manejo de BD
// url base de las imagenes

getSistema( id: number ): InterfaceSistemasRealizados{
    return this.infoSistemasRealizados[(id - 1)];
}

infoPersonal : InterfacePersonal[] = [
    {
        foto: 'perfil',
        userName: 'Luis Alfredo SV',
        nombreOne: 'Luis',
        nombreTwo: 'Alfredo',
        apellidoOne: 'Sarabia',
        apellidoTwo: 'Valera',
        fechaNacimiento: '12/07/1995',
        nacionalidad: 'Venezolana',
        direccion: [
            {
                pais: 'Venezuela',
                estado: 'Carabobo',
                ciudad: 'Valencia'
            }
        ],
        correoOne: 'luissarabia80@gmail.com',
        correoTwo: 'lasv80@outlook.com',
        telegram: 'https://t.me/luisalfredosv',
        linkedIn: 'https://linkedin.com/in/luisalfredosv',
        gitHub: 'https://github.com/luisalfredosv',
        cv: 'assets/docs/cv-dev-luis-sarabia.pdf',
        ocupaciones: ['Desarrollador Full-Stack de Web Apps'],
        hobbies:[
            'Ver documentales, series y películas.',
            'Escuchar música dubstep o electrojunkie.', 
            'Jugar PUBG Mobile, Factorio, COD, CSGO, Royal Revolt 2, EuroTruck 2',
            'Leer noticias sobre los nuevos avences en el mundo de la tecnología.'
        ],

        descripcion:'Hola soy Luis, un desarrollador semi-senior con 5 años de experiencia en el desarrollo de web app, apasionado por el arte de la programación, por crear herramientas y soluciones informáticas, TSU en Análisis de Sistemas y estoy estudiando el 3er año de Ingeniería en Informática, he tenido múltiples experiencias a nivel laboral que me han ayudado a mejorar mis conocimientos, siempre hago cursos, investigo nuevas tecnologías y experimento con el fin de aprender y elegir la más adecuada para el desarrollo de cada proyecto.',

        infoextra:''

    }
];

 infoSistemasRealizados : InterfaceSistemasRealizados[] = [
    {
        id: 1,
        name: 'Registro de Operativos',
        empresa: 'C.A Metro de Valencia',
        tecnologias: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'Bootstrap', 'CSS'],
        descripcion: 'Mi primer desarrollo, el cual realice para una empresa donde obtuve grandes conocimientos, ademas fue mi proyecto de pasantías, el objetivo principal del sistema era llevar un registro y control de los operativos alimenticios realizados en dicha empresa',
        acciones: [
                    'Gestión de operativos',
                    'Gestión de cuentas por pagar',
                    'Gestión de entregas de productos del operativo',
                    'Reporte general de los registros'
                    ],
        fecha: '10/2017',
        tareas: ['Análisis', 'Desarrollo', 'Testing'],
        carpetaImg: 'portafolios/metro/registro-de-operativos',
        img_s: ['01','02','03','04','05','06','07']

    },
    {
        id: 2,
        name: 'Registro de Visitantes',
        empresa: 'C.A Metro de Valencia',
        tecnologias: ['PHP', 'MySQL', 'JavaScript', 'Jquery', 'DataTables', 'JqueryUI', 'Webcodecamjs', 'HTML', 'Bootstrap', 'CSS'],
        descripcion: 'Desarrollado para llevar control de los visitantes a la empresa, esto incluye a los empleados en el caso de que entren a la empresa con un computador, en el cual al pasar por vigilancia se le toman los datos para regístralos en el sistema tomando una foto del visitante para dejar total constancia del visitante en los registros, el registro se realiza de forma detallada donde se describe a quien viene a ver y en que parte del edificio será la visita, al irse se le registra la salida y el registro del visitante se cierra.',
        acciones: [
                    'Gestión de visitante',
                    'Gestión de Vehículos o equipos de computación',
                    'Reportes de datos'
                    ],
        fecha: '03/2018',
        tareas: ['Análisis', 'Desarrollo', 'Testing'],
        carpetaImg: 'portafolios/metro/registro-de-visitantes',
        img_s: ['01','02','03','04','05','06','07','08','09','10']

    },
    {
        id: 3,
        name: 'Venta de Espacios Publicitarios',
        empresa: 'C.A Metro de Valencia',
        tecnologias: ['PHP', 'MySQL', 'JavaScript', 'Jquery', 'DataTables', 'JqueryUI', 'HTML', 'Bootstrap', 'CSS'],
        descripcion: 'Es un sistema de venta de espacios publicitarios que gestiona totalmente los procesos manuales llevándolos al sistema de forma digital, en el que se gestionan presupuestos, venta de espacios publicitarios, cobros y contratos, también imprime reportes de los datos almacenados en el mismo.',
        acciones: [
                    'Gestión de presupuestos',
                    'Gestión de espacios publicitarios',
                    'Gestión de contratos',
                    'Gestión de pagos',
                    'Reportes de información'
                    ],
        fecha: '06/2018',
        tareas: ['Análisis', 'Desarrollo', 'Testing'],
        carpetaImg: 'portafolios/metro/venta-de-espacios-publicitarios',
        img_s: ['01','02','03','04','05','06','07','08','09','10']

    },
    {
        id: 4,
        name: 'Control y Gestión de Almacén',
        empresa: 'C.A Metro de Valencia',
        tecnologias: ['PHP', 'MySQL', 'JavaScript', 'Jquery', 'DataTables', 'JqueryUI', 'QRcodelib', 'Webcodecamjs','HTML', 'Bootstrap', 'CSS'],
        descripcion: 'Gestiona las herramientas, repuestos y todo objeto que la empresa requiera tener un control sobre con el consumo y uso del mismo, durante los procesos los usuarios admin y los usuarios que soliciten repuestos o herramientas usan identificadores QR para poder firmar y dejar constancia de que todo lo que se registró en el sistema es totalmente seguro y real y así evitar robos o encubrimiento de información, dicho sistema necesita acceso a una cámara web de lo contrario no se podrá usar para gestionar entrada y salida de objetos, ya que este es su principal método de autenticación, y el acceso a códigos QR es limitado por el admin del sistema.',
        acciones: [
                    'Gestión de solicitud de herramientas, respuestas, consumibles',
                    'Verificación de los involucrados en el proceso mediante códigos QR',
                    'Muestra e imprime reportes de información en el sistema'
                    ],
        fecha: '12/2018',
        tareas: ['Análisis', 'Desarrollo', 'Testing'],
        carpetaImg: 'portafolios/metro/control-y-gestion-de-almacen',
        img_s: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15']

    },
    {
        id: 5,
        name: 'Modulo de Gestión Pagos',
        empresa: 'Así de Rápido C.A',
        tecnologias: ['PHP', 'YiiFramework', 'MySQL', 'JavaScript', 'Jquery', 'DataTables','HTML', 'UiKit', 'CSS'],
        descripcion: 'Desarrollado para gestionar los pagos realizados por los usuarios, cuando se genera un pedido y se realiza un pago este pasa por este módulo donde se verifica el pago y se realizan las acciones correspondientes, la información de los pagos es utilizada por otros módulos de contabilidad para cálculos internos de la empresa y tener un mejor control sobre las finanzas',
        acciones: [
                    'Registrar pagos desde el panel administrativo del sistema o desde la App móvil a través de la API',
                    'Gestionar pagos y verificar en los distintos bancos o servicios de pagos',
                    'Enviar el pedido a los admin en caso de que el pago sea correcto'
                    ],
        fecha: '11/2019',
        tareas: ['Creación','Mantenimiento', 'Actualizaciones'],
        carpetaImg: 'portafolios/adr/modulo-de-pagos',
        img_s: ['01','02']

    },
    {
        id: 6,
        name: 'Modulo de Pedidos Externos',
        empresa: 'Así de Rápido C.A',
        tecnologias: ['PHP', 'YiiFramework', 'MySQL', 'Javascript', 'Jquery', 'DataTables','HTML', 'UiKit', 'CSS'],
        descripcion: 'Este es un subsistema alterno que permite el registro de pedidos a establecimientos no afiliados a los servicios de la empresa, sin embargo se les permite usar el servicio de Delivery, estos pedidos son registrados desde el panel administrativo para tener historial de los mismos; en este sistema desarrolle las funciones necesarias en los tres sistemas de la empresa (panel admin, API de clientes, API de Motorizados) las cuales funcionan en conjunto con una misma información que es dividida y almacenada en cada sistema.',
        acciones: [
                    'Gestionar pedidos externos a establecimientos no afiliados a los servicios de la empresa',
                    'Gestionar la entrega de pedido desde el panel admin de motorizados',
                    'Enviar el pedido a la app móvil de quien entregara el pedido al cliente'
                    ],
        fecha: '06/2020',
        tareas: ['Creación','Mantenimiento', 'Actualizaciones'],
        carpetaImg: 'portafolios/adr/modulo-de-pedidos-externos',
        img_s: ['01']

    },
    {
        id: 7,
        name: 'Modulo de Gestión de Publicidad',
        empresa: 'Así de Rápido C.A',
        tecnologias: ['PHP', 'YiiFramework', 'MySQL', 'JavaScript', 'Jquery', 'DataTables','HTML', 'UiKit', 'CSS'],
        descripcion: 'Desarrolle un sistema de publicidad y promociones, que se gestiona desde el panel admin, la publicidad y promociones son mostradas en la app móvil a los usuarios; el sistema no analiza información de los usuarios ni muestra información basada en sus datos al contrario de todo esto el espacio publicitario es vendido a establecimientos y el sistema maneja la carga de imágenes, el tiempo que estará disponible, el status y el posicionamiento',
        acciones: [
                    'Gestión del espacio publicitario',
                    'Listar historial',
                    'Enviar la data necesaria a la API y que esta envié la información a la app móvil'
                    ],
        fecha: '03/2019',
        tareas: ['Creación','Mantenimiento', 'Actualizaciones'],
        carpetaImg: 'portafolios/adr/modulo-de-gestion-de-publicidad',
        img_s: ['01']

    },
    {
       id: 8,
        name: 'Modulo de Status de la App Móvil',
        empresa: 'Así de Rápido C.A',
        tecnologias: ['PHP', 'YiiFramework', 'MySQL', 'JavaScript', 'Jquery', 'DataTables','HTML', 'UiKit', 'CSS'],
        descripcion: 'Este módulo fue desarrollado para dar a conocer a los usuarios desde (la app móvil Android, IOS y el sitio web) el status en que se encuadra la app (activa, deshabilitada, actualización) estos estatus se cargan desde el panel administrativo del sistema, en el desarrollo de esta funcionalidad me toco implementar las acciones necesarias en el backend del panel admin y en la API de la aplicación móvil',
        acciones: [
                    'Gestionar los status de la app móvil desde el panel administrativo',
                    'Listar historial de status'
                    ],
        fecha: '07/2020',
        tareas: ['Mantenimiento', 'Actualizaciones'],
        carpetaImg: 'portafolios/adr/modulo-de-status-de-la-app-movil',
        img_s: ['01','02']
    },
    {
       id: 9,
        name: 'Otros Desarrollos',
        empresa: 'Varias empresas y/o desarrollos propios',
        tecnologias: ['YiiFramework', 'Electronjs', 'Flutter', 'Dart', 'Laravel', 'Nodejs', 'Expressjs', 'NativeScript', 'VueNative', 'QuasarFramework'],
        descripcion: 'He tenido muchos otros desarrollos pero actualmente no tengo acceso a ellos, otros han sido solo en Back-end por lo que es imposible que comparta información sobre ellos por motivos de seguridad y ética. Tengo experiencia trabajado en app móviles hibridas con PhoneGap, con API rest en YiiFramework y  Nodejs usando Expressjs, muchos otros desarrollos con fines educativos como: NativeScript, Flutter, Dart, Laravel, VueNative, ElectronJS, QuasarFramework y muchos más de los cuales consideró he aprendido bastante sobre ellos pero no lo necesario para considerarlos parte de mis skills',
        acciones: [],
        fecha: '',
        tareas: ['Mantenimiento', 'Actualizaciones'],
        carpetaImg: 'portafolios/otros',
        img_s: ['01']
    },
];


infoEstudios : InterfaceEstudios[] = [
    {
        id: 1,
        nombre: 'Instituto Universitario de Tecnología para la Informática',
        siglas: 'IUTEPI',
        inicio: '01/2014',
        fin:    '12/2017',
        status: 'Finalizado',
        titulo: 'TSU Analista de Sistemas',
        mension:'Desarrollo Web',
        ubicacion: 'Valencia Edo. Carabobo'
    },
    {
        id: 2,
        nombre: 'Universidad Politécnica Territorial Valencia',
        siglas: 'UPTValencia',
        inicio: '06/2018',
        fin:    '12/2023',
        status: 'Cursando 3er año',
        titulo: 'Ingeniero en Informática',
        mension:'',
        ubicacion: 'Valencia Edo. Carabobo'
    }
];

infoExperienciaLaboral : InterfaceExperienciaLaboral[] = [
    {
        id: 1,
        nombre: 'C.A Metro de Valencia',
        areaEmpresa: 'Transporte masivo subterráneo',
        cargo:  'Pasante de Sistemas de Información',
        tareas: ['Desarrollar sistemas web', ' soporte de aplicaciones', ' diseñar soluciones para optimizar procesos'],
        inicio: '11/2016',
        fin:    '03/2017'

    },
    {
        id: 2,
        nombre: 'C.A Metro de Valencia',
        areaEmpresa: 'Transporte masivo subterráneo',
        cargo:  'Analista de Sistemas B',
        tareas: ['Desarrollar sistemas web', ' soporte de aplicaciones', ' diseñar soluciones para optimizar procesos'],
        inicio: '06/2017',
        fin:    '07/2018'

    },
    {
        id: 3,
        nombre: 'C.A Metro de Valencia',
        areaEmpresa: 'Transporte masivo subterráneo',
        cargo:  'Consultor Sénior de Tecnologías',
        tareas: ['Desarrollar sistemas web', ' soporte de aplicaciones', ' diseñar soluciones para optimizar procesos'],
        inicio: '07/2018',
        fin:    '04/2019'

    },
    {
        id: 4,
        nombre: 'Filtros Ramírez C.A',
        areaEmpresa: 'Distribuidora de repuestos y accesorios de vehículos de motor',
        cargo:  'Asistente de Sistemas',
        tareas: ['Soporte Técnico', ' soporte de aplicaciones', ' ventas online'],
        inicio: '04/2019',
        fin:    '10/2019'

    },
    {
        id: 5,
        nombre: 'Así de Rápido C.A',
        areaEmpresa: 'Servicios web y delivery',
        cargo:  'Desarrollador Web Back-End',
        tareas: ['Mantenimiento de sistemas web', ' mantenimiento de APIs'],
        inicio: '11/2019',
        fin:    '09/2020'

    }
];

infoTecnologias : InterfaceTechPrograming[] = [
    {
        nombre: 'YiiFramework',
        nivel:  7.5,
    },
    {
        nombre: 'Nodejs',
        nivel:  6,
    },
    {
        nombre: 'Expressjs',
        nivel:  8,
    },
    {
        nombre: 'Jquery',
        nivel:  10,
    },
    {
        nombre: 'Bootstrap',
        nivel:  10,
    },
    {
        nombre: 'Electronjs',
        nivel:  5,
    },
    {
        nombre: 'PDO',
        nivel:  7.5,
    },
    {
        nombre: 'UiKit',
        nivel:  9,
    },
    {
        nombre: 'Bulma',
        nivel:  9,
    },
    {
        nombre: 'Materialize',
        nivel:  9,
    },
    {
        nombre: 'Tailwind',
        nivel:  5,
    },
    // {
    //     nombre: 'Laravel',
    //     nivel:  4,
    // },
    {
        nombre: 'Angular',
        nivel:  7.5,
    },
    // {
    //     nombre: 'NGRX',
    //     nivel: 7
    // },
    {
        nombre: 'Vue',
        nivel:  8,
    },
    {
        nombre: 'Vuex',
        nivel:  7.5,
    },
    {
        nombre: 'Ionic',
        nivel:  4.5,
    },
    // {
    //     nombre: 'Flutter',
    //     nivel:  5.2,
    // },
    {
        nombre: 'CSS',
        nivel: 5
    },
    {
        nombre: 'HTML',
        nivel: 10
    },
    {
        nombre: 'Babel',
        nivel: 6
    },
];

infoLenguajesProgramacion : InterfaceTechPrograming[] = [
    {
        nombre: 'PHP',
        nivel: 8
    },
    {
        nombre: 'JavaScript',
        nivel: 8.5
    },
    {
        nombre: 'TypeScript',
        nivel: 7
    },
    // {
    //     nombre: 'Dart',
    //     nivel: 4
    // }

];

infoBaseDatos : InterfaceTechPrograming[] = [
    {
        nombre: 'MySQL',
        nivel:  7,
    },
    {
        nombre: 'MongoDb',
        nivel:  6,
    },
    {
        nombre: 'FireBase',
        nivel:  4,
    },
];

}

