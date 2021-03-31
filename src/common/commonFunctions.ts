
export const getPictureNumberString = (url:string) => {
    let urlNumber = url.match(/[0-9]/g) || [];
    let pictureNumberString = urlNumber.join('');
    return pictureNumberString
}

