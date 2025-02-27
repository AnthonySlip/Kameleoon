
export const convertSiteUrlToName = (url: string): string => {
    return url.replace(/^(https?:\/\/)?(www\.)?/, '');
}