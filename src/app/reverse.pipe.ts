import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let newString = value
    if(args[0]){
      newString += '.'
    }
    if(args[1] == 'singlequote'){
      newString = "'" + newString
    }else if(args[1] === 'doublequote'){
      newString = '"' + newString
    }
    return newString;
  }

}
