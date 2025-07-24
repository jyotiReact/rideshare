import api from "@/lib/axios";
interface ApiConfig {
  params?: Record<string, any>;
  headers?: Record<string, string>;
  [key: string]: any; 
}

export const getApi = <T = any>(url: string, config: ApiConfig = {}): Promise<T> =>
  api.get<T>(url, config).then(response => response.data);

export const postApi = <T = any, D = any>(
  url: string, 
  data?: D, 
  config: ApiConfig = {}
): Promise<T> =>
  api.post<T>(url, data, config).then(response => response.data);

export const putApi = <T = any, D = any>(
  url: string, 
  data?: D, 
  config: ApiConfig = {}
): Promise<T> =>
  api.put<T>(url, data, config).then(response => response.data);