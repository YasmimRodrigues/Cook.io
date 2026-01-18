/**
 * @license MIT
 * @copyright 2025 yasmimrbm25
 * @author yasmimrbm25 <yasmimrbm25@gmail.com>
 */

"use strict";

window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";
const APP_ID = import.meta.env.VITE_EDAMAM_APP_ID;
const API_KEY = import.meta.env.VITE_EDAMAM_API_KEY;
const TYPE = import.meta.env.VITE_EDAMAM_TYPE;
const USER_ID = import.meta.env.VITE_EDAMAM_USER_ID;

/**
 * @param {Array} queries Query array
 * @param {Function} successCallback Success callback function
 */

export const fetchData = async function (queries = [], successCallback, url = null) {

    let finalUrl = "";

    if (url) {

        finalUrl = url.includes("app_id") ? url : `${url}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}`;
         
    } else {
        const query = queries?.join("&")
        .replace(/,/g, "=")
        .replace(/ /g, "%20")
        .replace(/\+/g, "%2B");

        finalUrl = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}${query ? `&${query}` : ""}`;
    }

    try {
        const response = await fetch(finalUrl, {
            headers: {
                'Edamam-Account-User': USER_ID
            }
        });

        if(response.ok) {
            const data = await response.json();
            successCallback(data);
        }else {
            const errorText = await response.text();
            console.error("API Error:", errorText);
        }

    } catch (err) {
        console.error("Network Error:", err);
    }
}