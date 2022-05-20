import { Persona } from "./persona.model";

export const persona:Persona ={

    "id":1,
    "nombre":"German",
    "apellido":"Pappalardo",
    "profesion":"FullStack Jr Developer",
    "ciudad":"Sierra de la Ventana",
    "pais":"Argentina",
    "imagenPerfil":"",
    "telCelular":"2216231739",
    "mail":"germangp62@gmail.com",
    "sobremi":"Profe Jorge, salió, JAJA, al fin va queriendo!!!!",
    "usuario":"germangp62",
    "password":"Sierra2019",
    "educacion":[
        {"id":1,
            "institucion":"UTN La Plata",
            "titulo":"Ingenieria en Sistemas",
            "logoInstitucion":"./portfolio-german-pappalardo/src/assets/proyectoImg/logo-utn",
            "desde": new Date(),
            "hasta": new Date(),
        },
        {"id":2,
            "institucion":"Colegio Esquiu",
            "titulo":"Bachiller",
            "logoInstitucion":"./portfolio-german-pappalardo/src/assets/proyectoImg/fondo3",
            "desde": new Date(),
            "hasta": new Date(),
        },
        {"id":3,
            "institucion":"Ni Idea",
            "titulo":"Menos que menos",
            "logoInstitucion":"./portfolio-german-pappalardo/src/assets/proyectoImg/fondo1",
            "desde": new Date(),
            "hasta": new Date(),
        },
    ],
    "experiencia":[
        {
            "id":1,
            "compania":"Back-Door Informatica",
            "puesto":"Director",
            "logoCompania":"string;",
            "desde": new Date(),
            "hasta": new Date(),
        },

        {
            "id":2,
            "compania":"Tecnico en Informatica",
            "puesto":"Director",
            "logoCompania":"string;",
            "desde": new Date(),
            "hasta": new Date(),
        },

        {
            "id":3,
            "compania":"Tecnico a domicilio",
            "puesto":"Director",
            "logoCompania":"string;",
            "desde": new Date(),
            "hasta": new Date(),
        }

    ],
    "skill":[
            {
                "id":1,
                 "tipo":"hard",
                "nombre":"HTML",
                "progreso":60,
            },
            {
                "id":2,
                 "tipo":"hard",
                "nombre":"CSS",
                "progreso":50,
            },
            {
                "id":3,
                 "tipo":"hard",
                "nombre":"JS",
                "progreso":40,
            },

            {
                "id":3,
                 "tipo":"soft",
                "nombre":"resolucion-problemas",
                "progreso":90,
            }

    ],
    "proyectos":[

        {
            "id":1,
            "nombre":"calculadora",
            "descripcion":"una caculadora",
            "linkGithub":"http://www.google.com",
        },
        {
            "id":2,
            "nombre":"porfolio",
            "descripcion":"El portfolio",
            "linkGithub":"http://www.google.com",
        },
        {
            "id":3,
            "nombre":"sin novedad",
            "descripcion":"no hay mas ideas",
            "linkGithub":"http://www.google.com",
        }
    ],
}