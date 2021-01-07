import { Component } from '@angular/core';
import { TtsService } from '../services/tts.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private _stts:TtsService) {}

  hablar(esp:string){
    this._stts.discurso(esp);
  }

  speak(eng:string){
    this._stts.speech(eng);
  }
}
