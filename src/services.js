import {jsonInstance} from './api/jsonInstance';

export const getData=(url)=>jsonInstance.get(url);
export const setData=(url,data)=>jsonInstance.post(url,data);
export const editData=(url,data)=>jsonInstance.put(url,data);
export const deletData=(url)=>jsonInstance.delete(url);
