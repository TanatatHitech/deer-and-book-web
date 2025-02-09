export const convertToJSONPatch = (data: any) => {
    return Object.keys(data).map((key) => ({
        op: 'replace',
        path: key,
        value: data[key],
    }));
};
