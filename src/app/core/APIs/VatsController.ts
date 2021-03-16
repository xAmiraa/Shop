
import { environment } from 'src/environments/environment';

export const VatsController = {
  SearchVats: environment.baseURL + `/api/vats`,
  CreateVat: environment.baseURL + `/api/vats`,
  UpdateVat: (id: number) => environment.baseURL + `/api/vats/${id}`,
  DeleteVat: (id: number) => environment.baseURL + `/api/vats/${id}`,
}