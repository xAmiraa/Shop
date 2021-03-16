import { BaseFilterDto } from "../common/BaseFilter";

export class CreateUpdateVatDto {
  vatPercentage: number = null;
}

export class VatFilterDto extends BaseFilterDto {
  vatPercentage: number = null;
}