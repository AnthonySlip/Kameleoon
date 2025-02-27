import axios from 'axios';
import {API_URL} from '../../../shared/api/consts.ts';
import {ISiteDTO} from '../model/types/site.interface.ts';


export const SiteService = {
    async getSites(): Promise<ISiteDTO[]> {
        return (await axios.get<ISiteDTO[]>(API_URL + '/sites')).data
    }
}