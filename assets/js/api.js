/**
 * @license MIT
 * @copyright 2025 yasmimrbm25
 * @author yasmimrbm25 <yasmimrbm25@gmail.com>
 */

"use strict";

window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";
const /** {String} */ APP_ID = "f92fd3ac";
const /** {String} */ API_KEY = "bedb29c0d57bf011581ff55b8fa8bd8e";
const /** {String} */ TYPE = "public";
const /** {String} */ USER_ID = "yasmimrbm25";

/**
 * @param {Array} queries Query array
 * @param {Function} successCallback Success callback function
 */

export const fetchData = async function (queries = [], successCallback, url = null) {

    if (url) { 
        const /** {Object} */ response = await fetch(url, {
             headers: {
                 'Edamam-Account-User': USER_ID
             }
         });
         
        if(response.ok) {
            const data = await response.json();
            successCallback(data);
        }
        return; 
    }

    const /** {String} */ query = queries?.join("&")
    .replace(/,/g, "=")
    .replace(/ /g, "%20")
    .replace(/\+/g, "%2B");

    const /** {String} */ finalUrl = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}${query ? `&${query}` : ""}`;

    const /** {Object} */ response = await fetch(finalUrl, {
        headers: {
            'Edamam-Account-User': USER_ID
        }
    });

    if(response.ok) {
        const data = await response.json();
        successCallback(data);
    }
}