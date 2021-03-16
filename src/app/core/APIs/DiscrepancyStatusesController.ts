
import { environment } from 'src/environments/environment';

export const DiscrepancyStatusesController = {
  SearchDiscrepancyStatuses: environment.baseURL + `/api/discrepancystatuses`,
  CreateDiscrepancyStatus: environment.baseURL + `/api/discrepancystatuses`,
  UpdateDiscrepancyStatus: (id: number) => environment.baseURL + `/api/discrepancystatuses/${id}`,
  DeleteDiscrepancyStatus: (id: number) => environment.baseURL + `/api/discrepancystatuses/${id}`,
}