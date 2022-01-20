let searchParams = new URLSearchParams(window.location.search);
function isLocalNetwork(hostname = window.location.hostname) {
    return (
        (['localhost', '127.0.0.1', '', '::1'].includes(hostname))
        || (hostname.startsWith('192.168.'))
        || (hostname.startsWith('10.0.'))
        || (hostname.endsWith('.local'))
    )
}
const segments = new URL(window.location.href).pathname.split('/');
const page = segments.pop() || segments.pop();



let APP_DOMAIN
if (isLocalNetwork())
    APP_DOMAIN = '';
else
    APP_DOMAIN = 'https://app.ratina.io';


function url(path){
    return APP_DOMAIN+path
}

/**
 * @return {HTMLElement}
 */
function insertParam(key, value) {
    key = encodeURIComponent(key);
    value = encodeURIComponent(value);

    // kvp looks like ['key1=value1', 'key2=value2', ...]
    var kvp = document.location.search.substr(1).split('&');
    let i = 0;

    for (; i < kvp.length; i++) {
        if (kvp[i].startsWith(key + '=')) {
            let pair = kvp[i].split('=');
            pair[1] = value;
            kvp[i] = pair.join('=');
            break;
        }
    }

    if (i >= kvp.length) {
        kvp[kvp.length] = [key, value].join('=');
    }

    // can return this or...
    let params = kvp.join('&');

    // reload page with new params
    document.location.search = params;
}

function el(id) {
    return document.getElementById(id)
}

function value(id) {
    return document.getElementById(id).value
}

function content(id) {
    return document.getElementById(id)
}

function response_handler(data) {

    let res = {}
    if (data === 'ok')
        res.success = true
    else {
        data = JSON.parse(data);
        if (data.status)
            data.success = true
        res = data
        if ('action' in data)
            eval(data['action'])
        if ('message' in data)
            message(data['message']);
        if ('redirect' in data)
            redirect(data['redirect'])
    }
    
    return res
}
function changeInputType(oldObject, oType) {
    var newObject = document.createElement('input');
    newObject.type = oType;
    // if(oldObject.placeholder) newObject.placeholder = oldObject.placeholder;
    if(oldObject.name) newObject.name = oldObject.name;
    if(oldObject.id) newObject.id = oldObject.id;
    if(oldObject.className) newObject.className = oldObject.className;
    oldObject.parentNode.replaceChild(newObject,oldObject);
    return newObject;
}