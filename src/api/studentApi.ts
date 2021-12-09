import { City, ListParams, Student, ListResponse } from 'src/models';
import axiosClient from "./axiosClient";

const studentApi = {
  // getAll(): Promise<ListResponse<Student>> {
  //   const url = '/students';
  //   return axiosClient.get(url);
  // },
  getAll(params: ListParams): Promise<ListResponse<Student>> {
    const url = '/students';
    return axiosClient.get(url, {
      params
    });
  },
  
  getById(id: string): Promise<Student> {
    const url = `students/${id}`;
    return axiosClient.post(url);
  },

  add(data: any): Promise<Student> {
    const url = `/students`;
    return axiosClient.post(url, data);
  },

  update(data: any): Promise<Student> {
    console.log(data);
    const url = `/students/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id: string): Promise<any> {
    const url = `/students/${id}`;
    return axiosClient.delete(url);
  }
}

export default studentApi