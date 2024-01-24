const docs = [
//     {
//     'fileAsBase64': '',
//     'fileName': 'WhatsApp Image 2023-12-21 at 14.14.43_1c349de9.jpg',
//     'identificationDocumentID': 8,
//     'mimeType': 'image/jpeg',
//     'documentRefNo': 'GHA-000694099-9',
//     'fileLocation': '3b17ad7d-b51a-4565-a740-372b461894db',
//     extraData: '""',
// }
    {
        'fileAsBase64': '',
        'fileName': 'WhatsApp Image 2023-12-21 at 14.14.43_c9742066.jpg',
        'identificationDocumentID': 8,
        'mimeType': 'image/jpeg',
        'documentRefNo': 'GHA-000694099-9',
        'fileLocation': 'a5fd6329-271c-443d-a4fe-712de290f22e',
        extraData: '"{side: \\"back\\"}"'
    },
//     {
//         'fileAsBase64': '',
//         'fileName': 'WhatsApp Image 2023-12-21 at 14.14.43_c9742066.jpg',
//         'identificationDocumentID': 8,
//         'mimeType': 'image/jpeg',
//         'documentRefNo': 'GHA-000694099-9',
//         'fileLocation': 'a5fd6329-271c-443d-a4fe-712de290f22e',
//         extraData: {side: 'front'}
//     }
];
const extractExtraData = (data) => {
    try {
        const extraDataStr = data.extraData || '';
        if (typeof extraDataStr === 'object') {
            return extraDataStr;
        } else {
            const removedDoubleQuotesOnExtraDataStr = extraDataStr.slice(1, -1);
            let cleanedExtraDataStr = removedDoubleQuotesOnExtraDataStr
                 .replace(/^"|"$/g, '')
                .replace(/\\/g, '')
                .replace(/(\w+):/g, '"$1":');
            // let cleanedExtraDataStr = removedDoubleQuotesOnExtraDataStr
            //     .replace(/^"(.*)"$/g, '$1')       // Remove leading and trailing double quotes
            //     .replace(/\\/g, '')                // Remove backslashes
            //     .replace(/"(\S+)"\s*:/g, '"$1":'); // Add double quotes around keys


            return cleanedExtraDataStr.trim() !== '' ? JSON.parse(cleanedExtraDataStr) : JSON.parse('{}');
        }
    } catch (error) {
        return JSON.parse('{}');
    }
}

const frontDoc = docs?.find((file) => {
    const extraData = extractExtraData(file);
    return extraData?.side === 'front';
});
const backDoc = docs?.find((file) => {
    const extraData = extractExtraData(file);
    return extraData?.side === 'back';
});


console.log('frontDoc => ', frontDoc);
console.log('backDoc => ', backDoc);