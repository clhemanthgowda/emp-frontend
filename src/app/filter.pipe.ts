import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  
  pure : false
})
export class FilterPipe implements PipeTransform {

  transform(employee: any, searchname: any): any {
    if(searchname === undefined){
      return employee;
    }

  return employee.filter(emp =>{
    return emp.firstname.toLowerCase().includes(searchname.toLowerCase())
  });

  }
 

}
