import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Estefania Ochoa H';
  following = 900;
  followers = 680;
  email = 'estefaniaochoah@gmail.com';
 

  strengths = [{ text: 'Profesión', level: 'Zootecnista' },{ text: 'English', level: 'Basic' }, { text: 'HTML', level: 'Basic' } ];

  people = [
    {
      "name": "Estefania Ochoa",
      "age": 32,
      "color": 'blue'
    },
    {
      "name": "Carlos Angulo",
      "age": 25,
      "color": 'green'
    },
    {
      "name": "Estefa",
      "age": 21,
      "color": 'Azul'
    }
  ];

}
