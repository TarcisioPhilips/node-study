// Ler pequenas partes de alguma coisa e trabalhar com os dados mesmo sem ter o arquivo por completo

// process.stdin
//   .pipe(process.stdout)

import {Readable} from 'node:stream'
import { setTimeout } from 'node:timers/promises'

class OneToHundredStream extends Readable {
  index = 1
  _read() {
    const i = this.index++

    setTimeout( () =>{
      if (i> 100){
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))
        this.push(buf)
      }
    }, 1000)

  }
}

new OneToHundredStream().pipe(process.stdout)