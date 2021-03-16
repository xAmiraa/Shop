
import { environment } from 'src/environments/environment';

export const PackageTypesController = {
  SearchPackageTypes: environment.baseURL + `/api/packagetypes`,
  CreatePackageType: environment.baseURL + `/api/packagetypes`,
  UpdatePackageType: (id: number) => environment.baseURL + `/api/packagetypes/${id}`,
  DeletePackageType: (id: number) => environment.baseURL + `/api/packagetypes/${id}`,
}