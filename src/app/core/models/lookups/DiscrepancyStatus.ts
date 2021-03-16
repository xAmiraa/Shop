import { BaseFilterDto } from "../common/BaseFilter";

export class CreateUpdateDiscrepancyStatusDto {
  name: string = null;
  description: number = null;
}

export class DiscrepancyStatusFilterDto extends BaseFilterDto {
  name: string = null;
}