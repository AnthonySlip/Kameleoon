import {SiteService} from '../../../Site';
import {TestService} from '../../services/test.service.ts';
import {ITest} from '../types/test.interface.ts';
import {convertSiteUrlToName} from '../../../../shared/helper/convertSiteUrlToName.ts';

interface IReturn {
    getTests: () => Promise<ITest[]>
}
export const useTests = (): IReturn => {

    const getTests = async (): Promise<ITest[]> => {

        const [siteDTOs, testDTOs] = await Promise.all([SiteService.getSites(), TestService.getTests()])

        const mapSitesById: Map<number, string> = new Map<number, string>()

        siteDTOs.forEach(dto => {
            mapSitesById.set(dto.id, convertSiteUrlToName(dto.url))
        })


        return testDTOs.map(dto => ({
            id: dto.id,
            name: dto.name,
            type: dto.type,
            status: dto.status,
            siteName: mapSitesById.get(dto.siteId) ?? 'site not fount'
        }) as ITest)
    }


    return {getTests}
}