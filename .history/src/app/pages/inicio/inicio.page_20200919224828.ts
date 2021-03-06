import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componentes[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet',
    },
    {
      icon: 'rose-outline',
      name: 'Alert',
      redirectTo: '/alert',
    },
    {
      icon: 'image-outline',
      name: 'Avatar',
      redirectTo: '/avatar',
    },
    {
      icon: 'leaf-outline',
      name: 'Buttons y Router',
      redirectTo: '/buttons',
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/card',
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'CkeckBox',
      redirectTo: '/check',
    },
    {
      icon: 'calendar',
      name: 'Date Time',
      redirectTo: '/date-time',
    },
    {
      icon: 'car',
      name: 'fabs',
      redirectTo: '/fab',
    },
    {
      icon: 'grid',
      name: 'grid',
      redirectTo: '/grid',
    },
    {
      icon: 'infinite',
      name: 'infinite scroll',
      redirectTo: '/infinite-scroll',
    },
    {
      icon: 'hammer',
      name: 'input',
      redirectTo: '/input',
    },
    {
      icon: 'list',
      name: 'lista sliding',
      redirectTo: '/lista',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componentes {
  icon: string;
  redirectTo: string;
  name: string;
}
