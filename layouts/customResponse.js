
export function getCustomResponse(code, message, content) {
    const isValid = code === 200;
    const exceptions = isValid ? [] : [{ code, description: message }];
    return { isValid, exceptions, content };
}