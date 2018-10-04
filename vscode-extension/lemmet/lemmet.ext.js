'use strict';

/**
 * Author: H.WAKIMOTO
 * Copyright © 2018 H.WAKIMOTO All right reserved
 * 
 * https://github.com/hwakimoto/lemmet
 * 
 * Contact (Mastodon) : @tomoki@vocalodon.net
 * 
 */ 

/**
 * lemmet2emmet
 * @param {string} str 
 */
exports.lemmet2emmet = function(str) {
    str = str.replace(/　/g, "\t")
    str = str.replace(/  /g, "\t")
    str = str.replace(/\r/g, "")
    let strArray = str.split("\n")
    let last_indent_count = 0
    let last_delimiter_count = 0
    const reg = strArray[0].match(/\t/g)
    if (reg!=null) {
        last_indent_count = reg.length
    }
    let emmetstr = strArray[0].replace(/\t+/g,"")
    for (let i = 1; i < strArray.length; i++) {
        if (strArray[i].trim() == "") {
            break;
        }
        let delimiter = ""
        let indent_count = 0
        const reg = strArray[i].match(/\t/g)
        if (reg!=null) {
            indent_count=reg.length
        }
        if (indent_count == last_indent_count)
            delimiter = "+"
        else if (indent_count > last_indent_count)
            delimiter = ">"
        else {
            let reverse_count = last_indent_count - indent_count + last_delimiter_count
            for (let i = 0; i <= reverse_count - 1; i++){
                delimiter += "^"
            }
        }
        emmetstr += delimiter + strArray[i].replace(/\t+/g,"")
        last_indent_count = indent_count
        const reg2 = strArray[i].match(/>/g)
        if (reg2!=null) {
            last_delimiter_count = reg2.length
        }
    }
    return emmetstr
}
