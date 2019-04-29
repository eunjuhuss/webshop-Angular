import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
