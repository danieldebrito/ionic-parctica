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
      name: 'Buttons',
      redirectTo: '/buttons',
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
