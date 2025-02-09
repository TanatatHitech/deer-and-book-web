import { WHITELIST } from '../store/cropPlanStore';

export const mapWhitelist = (formData: any) => {
    return Object.keys(formData || {})
        .filter((key) => WHITELIST.includes(key))
        .reduce((obj, key) => {
            obj[key] = formData[key];
            return obj;
        }, {} as any);
};
