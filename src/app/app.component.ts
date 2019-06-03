import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  name = 'Estefania Ochoa H';
  following = 110;
  followers = 680;
  email = 'estefaniaochoah@gmail.com';
 

  strengths = [{ text: 'Profesión', level: 'Zootecnista' },{ text: 'English', level: 'Basic' }, { text: 'HTML', level: 'Basic' } ];

  gente = [
    {
      "name": "Estefania Ochoa",
      "age": 32,
      "color": 'blue',
      "data":[{"sexo":'M'},{"sexo":'F'}]
    },
    {
      "name": "Carlos Angulo",
      "age": 25,
      "color": 'pink',
      "data":[{"sexo":'M'},{"sexo":'F'}]
    },
    {
      "name": "Estefa",
      "age": 21,
      "color": 'white',
      "data":[{"sexo":'M'},{"sexo":'F'}]
    }
  ];

}
