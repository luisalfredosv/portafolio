import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loadsvg'
})
export class LoadsvgPipe implements PipeTransform {

    transform(images: string, path: string, ): string {

    const url_base: string = 'assets/img';
    const format: string = '.svg'
  
      if( !images ){  // Cuando no hay url de img se muestra una por defecto
        return `${ url_base }/noimage.png`
      }else{          // Cuando si hay url de la img
        return `${ url_base }/${ path }/${ images }${ format }`
      }

    return null;
  }

}
