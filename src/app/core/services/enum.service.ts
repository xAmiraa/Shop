import { Injectable } from '@angular/core';
import * as enums from '../models/enum/Enums';
import { HumanizePipe } from '../pipes/humanizePipe';

@Injectable()
export class EnumService {

  humanizePipe: any;

  constructor() {
    this.humanizePipe = new HumanizePipe();
  }


  RoleTypeEnum(value: number): EnumResult {
    let target = enums.ApplicationRolesEnum;
    let result = new EnumResult();
    result.name = this.humanizePipe.transform(target[value]) || '-';

    switch (value) {
      case target.SuperAdmin:
        result.className = 'bg-light-success';
        break;
      case target.LocalAdmin:
        result.className = 'bg-light-warning';
        break;
      case target.Manager:
        result.className = 'bg-light-warning';
        break;
      case target.Standard:
        result.className = 'bg-light-warning';
        break;
      default:
        result.className = 'bg-light-default';
        break;
    }

    return result;
  }

}

class EnumResult {
  className: string = 'bg-light-default';
  name: string = '-';
}
