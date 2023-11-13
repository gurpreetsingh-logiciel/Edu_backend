/**
 * @param  {[any]} obj
 * @return {[bool]}
 */
const IsObject = (obj) => {

    if (typeof obj != "undefined" && typeof obj == "object" && obj != null ) {
        return true;
    }

    return false;
}

/**
 * [getObject]
 * @param  {[object]} object
 * @param  {[bool]} secondTime
 * 
 */
const GetObject = (object) => {

    if( IsObject(object) ) {
        return object;
    }

    if( !HaveValue(object) ) {
        return {};
    }

    return {};
}

/**
 * @param  {[any]} obj 
 * @return {[bool]}
 */
const IsObjectHaveValue = (obj) => {

    if( typeof obj == "object" && obj != null && Object.keys(obj).length > 0 ) {
        return true;
    }

    return false;
}

/**
 * @param  {[number, string]} opt1
 * @param  {[number, string]} opt2
 * @return {[bool]} 
 */
const IsEqual = (opt1, opt2) => {

    return (opt1 == opt2);
}

/**
 * @param  {[bool]} bool
 * @param  {[bool]} returnNumeric
 * @return {[bool]}
 */
const IsTrue = (bool, returnNumeric) => {

    if (bool == true || bool == 'true' || bool == 1 || bool == '1') {
        return (returnNumeric == true) ? 1 : true;
    }

    return (returnNumeric == true) ? 0 : false;
}

/**
 * @param  {[agr]} any
 * @return {[bool]}
 */
const IsString = (agr) => {

    if( typeof agr === 'string' ) {
        return true;
    }

    return false;
}

/**
 * [description]
 * @param  {[any]}  text       
 * @param  {[bool]} nullOption
 * @return {[bool]}            
 */
const HaveValue = (text, nullOption, noneOption) => {

    if (typeof text == 'undefined') {
        return false;
    }

    if (IsTrue(nullOption) && (text == 'null' || text == null)) {
        return false;
    }

    if (IsTrue(noneOption) && text.toLowerCase() === 'none') {
        return false;
    }

    if (text === '0' || text === 0) {
        return true;
    }

    if (text != '' && text != null) {
        return true;
    }

    return false;
}

/**
 * [description]
 * @param  {[string]} email
 * @return {[bool]}
 */
const IsValidEmail = (email) => {

    if( !HaveValue(email) ) {return false;}

    email = email.toString();

    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}


/**
 * @param  {[object]} obj
 * @return {[copy of object]}
 */
const MakeCopy = (obj) => {

    if( !IsObject(obj) ) {
        return {};
    }

    // return Object.assign({}, obj);
    return { ...obj };
}

/**
 * @param  {[object]} obj
 * @return {[copy of object]}
 */
const FloatVal = (val) => {

    if( !HaveValue(val) ) {
        return 0.00;
    }

    return (isNaN(parseFloat(val)) ? 0.00 : parseFloat(val));
}

/**
 * @param  {[array]} arr
 * @return {[bool]}
 */
const IsArray = (arr) => {

    if (typeof arr != "undefined"
        && arr != null
        && Array.isArray(arr)) {

        return true;
    }

    return false;
}

/**
 * [copy array]
 * 
 */
const CopyArray = (arr) => {

    if( !IsArray(arr) ) return [];

    return JSON.parse(JSON.stringify([...arr]));
};

module.exports = {
    HaveValue,
    CopyArray,
    IsArray,
    FloatVal,
    MakeCopy,
    GetObject,
    IsObjectHaveValue,
    IsEqual,
    IsTrue,
    IsValidEmail,
    IsString
};