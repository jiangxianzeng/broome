import fetch from '../config/fetch'

/*
* 获取发现的文章
*/

export const findDiscover = () => fetch('/discover');