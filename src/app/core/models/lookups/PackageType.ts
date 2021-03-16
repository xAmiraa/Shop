import { BaseFilterDto } from "../common/BaseFilter";

export class CreateUpdatePackageTypeDto {
  name: string = null;
  description: number = null;
}

export class PackageTypeFilterDto extends BaseFilterDto {
  name: string = null;
}