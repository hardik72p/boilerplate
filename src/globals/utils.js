export const ValidationProcessor = validations => {
    const errors = {};
    let isValid = true;
  
    validations.forEach(validation => {
      errors[validation.name] = handleValidation(validation);
      54;
      if (errors[validation.name] !== '' && isValid) {
        isValid = false;
      }
    });
  
    return { isValid, errors };
  };

  const getRegExp = type => {
    let regx = null;
    switch (type) {
      case 'email':
        regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        break;
      case 'companyName':
        regx = /^([a-z]||[A-Z]||[ \-,.\&])+$/;
        break;
      case 'name':
        regx = /^(?=.*?[A-Za-z])/;
        break;
      case 'number':
        regx = /^[0-9]*$/;
        break;
      case 'phone':
        regx = /^(?=.{12})/;
      case 'url':
        // regx = /^(?:http(s)?:\/\/)?(?:[w]{3}.?)?(([a-z]+)+(?:.?)?([a-z]+))+([.]+[a-z]+)$/gm;
        // regx = /(www.)([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{2}.?([a-z]+)$/;
        break;
      case 'password':
        regx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        break;
      case 'website':
        regx = /((?:https?\:\/\/|www\.)(?:[-a-z0-9]+\.)*[-a-z0-9]+.*)/i;
        // regx = /^((https?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
        // regx = new RegExp(
        //   '^(https?:\\/\\/)?' +
        //     '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        //     '((\\d{1,3}\\.){3}\\d{1,3}))' +
        //     '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        //     '(\\?[;&a-z\\d%_.~+=-]*)?' +
        //     '(\\#[-a-z\\d_]*)?$',
        //   'i'
        // );
        break;
      case 'decimal':
        regx = /^\d{1,2}(\.\d{1,2})?$/;
        break;
      case 'canada-pincode':
        regx = /^[A-Za-z]\d[A-Za-z][ ]\d[A-Za-z]\d$/;
        break;
      case 'USA-pincode':
        regx = /^(\d{5}|\d{9})$/;
        break;
      default:
        break;
    }
    return regx;
  };
  

  const handleValidation = ({
    name,
    value,
    isRequired,
    reqType,
    minLength,
    maxLength,
    fixLength,
    minValue,
    multipleOf,
  }) => {
    if (value && typeof value === 'string' && isRequired) {
      value = value.trim();
    }
    if (value && isRequired && value < minValue) {
      return `Please enter value more than ${minValue}.`;
    }
    if (value && isRequired && multipleOf) {
      if (value % multipleOf !== 0) {
        return `Please enter multiple of ${multipleOf}`;
      }
    }
    if (!value && isRequired) {
      return `Please enter ${getSentenceFromCamelCase(name)}.`;
    }
    if (value && reqType && !getRegExp(reqType).test(value)) {
      return `Please enter valid ${getSentenceFromCamelCase(name)}.`;
    }
    if (minLength && value.length < minLength) {
      return `${name.charAt(0).toUpperCase() +
        getSentenceFromCamelCase(name).slice(
          1
        )} must be at least ${minLength} characters long.`;
    }
    if (maxLength && value.length > maxLength) {
      return `${name.charAt(0).toUpperCase() +
        getSentenceFromCamelCase(name).slice(
          1
        )} must be ${minLength} characters long.`;
    }
    if (fixLength && value.length !== fixLength) {
      return `${name.charAt(0).toUpperCase() +
        getSentenceFromCamelCase(name).slice(
          1
        )} must be ${fixLength} characters.`;
    }
  
    return '';
  };
  export const getWordCamelCase = msg => {
    const patt1 = /[A-Za-z]/g;
    const msgArr = msg.match(patt1);
    let errorMsg = msgArr[0];
    for (let i = 1; i < msgArr.length; i++) {
      errorMsg +=
        msgArr[i] === msgArr[i].toUpperCase()
          ? `${msgArr[i].toLowerCase()}`
          : msgArr[i];
    }
    return errorMsg.trim();
  };  
  export const getSentenceFromCamelCase = msg => {
    const patt1 = /[A-Za-z]/g;
    const msgArr = msg.match(patt1);
    let errorMsg = '';
    for (let i = 0; i < msgArr.length; i++) {
      errorMsg +=
        msgArr[i] === msgArr[i].toUpperCase()
          ? ` ${msgArr[i].toLowerCase()}`
          : msgArr[i];
    }
    return errorMsg.trim();
  };  