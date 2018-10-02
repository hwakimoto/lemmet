/**

Lemmet記法

div#page
  div.logo
  ul#navigation
    li*5>a

対応するEmmet記法
div#page>div.logo+ul#navigation>li*5>a
 
HTML
<div id="page">
	<div class="logo"></div>
	<ul id="navigation">
		<li><a href=""></a></li>
		<li><a href=""></a></li>
		<li><a href=""></a></li>
		<li><a href=""></a></li>
		<li><a href=""></a></li>
	</ul>
</div>

 */

/**
 * lemmet2emmet
 * @param {string} str 
 */
function lemmet2emmet(str) {
    str = str.replace(/　/g, "\t")
    str = str.replace(/  /g, "\t")
    let strArray = str.split("\n")
    let last_indent_count = 0
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
        else
            delimiter = "^"
        emmetstr += delimiter + strArray[i].replace(/\t+/g,"")
        last_indent_count = indent_count

    }
    return emmetstr
}

/**
 * emmet2heml
 * 
 * WIP
 * 
 * Call external function?
 * 
 * @param {string} str 
 */
function emmet2html(str) {
    return str;
}