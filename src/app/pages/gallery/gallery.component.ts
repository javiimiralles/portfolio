import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {

  projectIndex: number;

  mobileImages = [
    // Tech4DietApp
    [
      { alt: 'Página de login de Tech4DietApp', url: 'https://live.staticflickr.com/65535/53769517686_e17e4c2a8e_k.jpg' },
      { alt: 'Página de elección de objetivo de Tech4DietApp', url: 'https://live.staticflickr.com/65535/53769722553_cc9b30afea_k.jpg' },
      { alt: 'Página de inicio de Tech4DietApp', url: 'https://live.staticflickr.com/65535/53768608622_a13ba1746b_k.jpg' },
      { alt: 'Página de registro de alimentos de Tech4DietApp', url: 'https://live.staticflickr.com/65535/53769722488_f333f6252e_k.jpg' },
      { alt: 'Página de estadísticas de alimentación de Tech4DietApp', url: 'https://live.staticflickr.com/65535/53769722478_9554a021de_k.jpg' },
      { alt: 'Página de listado de alimentos de Tech4DietApp', url: 'https://live.staticflickr.com/65535/53769517481_0cc3c7239d_k.jpg' },
      { alt: 'Página de listado de registros de peso de Tech4DietApp', url: 'https://live.staticflickr.com/65535/53769722438_fdca40f2dd_k.jpg' },
      { alt: 'Página de estadísticas de la evolución del peso de Tech4DietApp', url: 'https://live.staticflickr.com/65535/53769722428_cd53b06a9b_k.jpg' },
      { alt: 'Página de registro de actividades físicas de Tech4DietApp', url: 'https://live.staticflickr.com/65535/53769722388_4c8287f6b1_k.jpg' },
      { alt: 'Página de listado de actividades físicas de Tech4DietApp', url: 'https://live.staticflickr.com/65535/53768608487_3106976550_k.jpg' },
      { alt: 'Página de registro de la ingesta de agua de Tech4DietApp', url: 'https://live.staticflickr.com/65535/53769942100_a0a1328bf6_k.jpg' },
      { alt: 'Página de perfil de Tech4DietApp', url: 'https://live.staticflickr.com/65535/53769847509_f99702121f_k.jpg' },
      { alt: 'Barra lateral de Tech4DietApp', url: 'https://live.staticflickr.com/65535/53769517411_ad76591473_k.jpg' }
    ],
    // FitnessForce
    [
      { alt: 'Página de estadísticas de usuario de Fitness Force', url: 'https://live.staticflickr.com/65535/53769320756_ae904d8e73_k.jpg' },
      { alt: 'Página de listado de rutinas de Fitness Force', url: 'https://live.staticflickr.com/65535/53768409642_264f56b584_k.jpg' },
      { alt: 'Página de plan activo de Fitness Force', url: 'https://live.staticflickr.com/65535/53769649424_2f378b8bdf_k.jpg' },
      { alt: 'Página de listado de planes de Fitness Force', url: 'https://live.staticflickr.com/65535/53769523013_b6ce87c856_k.jpg' },
      { alt: 'Página de listado de sesiones de Fitness Force', url: 'https://live.staticflickr.com/65535/53769320606_21f4628612_k.jpg' },
      { alt: 'Página de autogeneración de rutinas de Fitness Force', url: 'https://live.staticflickr.com/65535/53769320691_7ae90ad39d_k.jpg' },
      { alt: 'Página de creación de plan de entrenamiento de Fitness Force', url: 'https://live.staticflickr.com/65535/53769523073_25a36167c6_k.jpg' },
      { alt: 'Página de entrenamiento iniciado de Fitness Force', url: 'https://live.staticflickr.com/65535/53769649334_d99467ff30_k.jpg' },
    ],
    // JFitness
    [
      { alt: 'Página de inicio de JFitness', url: 'https://live.staticflickr.com/65535/53769537970_518dfef2d0_k.jpg' },
      { alt: 'Página de registro de un entrenamiento de JFitness', url: 'https://live.staticflickr.com/65535/53769114781_494c5c0dd2_k.jpg' },
      { alt: 'Página de listado de entrenamientos de JFitness', url: 'https://live.staticflickr.com/65535/53768203177_e2aff75b89_k.jpg' },
      { alt: 'Página de listado de rutinas de JFitness', url: 'https://live.staticflickr.com/65535/53769443919_f20f60526a_k.jpg' },
      { alt: 'Página de creación de una rutina de JFitness', url: 'https://live.staticflickr.com/65535/53769537945_05f23f88c3_k.jpg' },
      { alt: 'Página de creación de una sesión de JFitness', url: 'https://live.staticflickr.com/65535/53769537900_47a9af0d15_k.jpg' },
      { alt: 'Página de listado de ejercicios de JFitness', url: 'https://live.staticflickr.com/65535/53768203132_db422cd7bf_k.jpg' },
      { alt: 'Página de creación de ejercicios de JFitness', url: 'https://live.staticflickr.com/65535/53769443854_15521ea71e_k.jpg' },
    ]
  ]

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.activatedRoute.queryParams.subscribe({
      next: (params) => {
        this.projectIndex = params['projectIndex'];
      }
    })
  }


}
