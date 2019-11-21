
let https = require('https');
const bbCore = require('sdk');

function sanitize_for_excel(text)
{
    if (text[0] == '=')
        return text.replace(/[=]+/, '');
    return text;
}


// funcation to do server side validation of the captcha with Google

exports.before_public_create_client = (data, callback) => {

    // get the passed in params
    const params = data.params;

    // sanitize each string value
    Object.keys(params).forEach(key => {
        let value = params[key];    
        if (typeof(value) === 'string')
            params[key] = sanitize_for_excel(value);
    });

    callback(null, {status: "success", params: params});

};

