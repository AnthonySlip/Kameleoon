import axios from 'axios';
import {API_URL} from '../../../shared/api/consts.ts';
import {ITestDTO} from '../model/types/test.interface.ts';


export const TestService = {
    async getTests(): Promise<ITestDTO[]> {
       return (await axios.get<ITestDTO[]>(API_URL + '/tests')).data
    }
}