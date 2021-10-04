//import * as cheerio from "cheerio";
//import got from "got";

/*
const convertToValidSrc = (src) => {
    const host = 'https://themoviedb.org';
    const newSrc = host + (src.replace('_filter(blur)', ''));
    return newSrc;
}

const movieScrap = async (url) => {
    const response = await got(url);
    const $ = cheerio.load(response.body);

    const imgSrc = $('#original_header > div.poster_wrapper.false > div > div.image_content.backdrop > img').attr('src');
    const title = $('#original_header > div.header_poster_wrapper.false > section > div.title.ott_false > h2 > a');
    const tagline = $('#original_header > div.header_poster_wrapper.false > section > div.header_info > h3.tagline');
    const disc = $('#original_header > div.header_poster_wrapper.false > section > div.header_info > div > p');
    const genres = $('#original_header > div.header_poster_wrapper.false > section > div.title.ott_false > div > span.genres').text().trim();

    console.log('Image Src');
    console.log(imgSrc);

    console.log('Genres');
    console.log(genres);

    console.log('Title');
    console.log(title.text());
    
    console.log('tagline');
    console.log(tagline.text());
    
    console.log('Discription');
    console.log(disc.text());
}*/

const movieScrap = 'scrap';
export default movieScrap;