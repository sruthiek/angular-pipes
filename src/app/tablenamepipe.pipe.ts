import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tablenamepipe'
})
export class TablenamepipePipe implements PipeTransform {

  transform(value: string, gender: string): string {
    return (gender === 'Male') ? 'Mr. ' + value : 'Miss.' + value;
  }

}
