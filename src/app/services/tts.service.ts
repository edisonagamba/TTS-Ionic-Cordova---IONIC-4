import { Injectable } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class TtsService {

  constructor(private _tts: TextToSpeech, private _toast:ToastController) { }

  discurso(texto:string){
    this._tts.speak({
      text:texto,
      locale:'es-CO',
      rate:1
    }).then(()=> this.mensaje('Español'))
    .catch((resp:any)=>console.error(resp)
   );
 }

  speech(texto:string){
    this._tts.speak({
      text:texto,
      locale:'en-US',
      rate:1
    }).then(()=> this.mensaje('English'))
     .catch((resp:any)=>console.error(resp)
    );
  }

  async mensaje(texto:string){
    const toast = await this._toast.create({
      message: texto,
      duration: 2000
    });
    toast.present();
 }


}
