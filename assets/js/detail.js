/**
 * @license MIT
 * @copyright 2025 yasmimrbm25
 * @author yasmimrbm25 <yasmimrbm25@gmail.com>
 */

"use strict";

/**
 * Import
 */

import { fetchData } from "./api.js";
import { getTime } from "./module.js";

/**
 * Render data
 */

const /** {NodeElement} */ $detailContainer = document.querySelector("[data-detail-container]");

const /** {String} */ recipeId = window.location.search.slice(window.location.search.indexOf("=") + 1);
const /** {String} */ detailUrl = `${ACCESS_POINT}/${recipeId}`;

fetchData(null, data => {

    console.log(data);
    
    // Guard Clause
    
    if(!data || !data.recipe) return;

    const {
        images: { 
            LARGE = '', 
            REGULAR = '', 
            SMALL = '', 
            THUMBNAIL = ''
        } = {},
        label: title,
        source: author,
        ingredients = [],
        totalTime: cookingTime = 0,
        calories = 0,
        cuisineType = [],
        dietLabels = [],
        dishType = [],
        yield: servings = 0,
        ingredientLines = [],
        uri
    } = data.recipe;

}, detailUrl);