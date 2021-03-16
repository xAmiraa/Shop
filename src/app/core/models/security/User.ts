export class StoredData {
    user: LoggedInUser = null;
    token: string = null;
}

export class LoggedInUser {
    id: number = null;
    name: string = null;
    email: string = null;
    mobile: string = null;
    role: string = null;
}

export function getStoredData(): StoredData {
    return JSON.parse(localStorage.getItem('costing_user')) as StoredData;
}