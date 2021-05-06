const sub1= 'https://www.reddit.com/r/javascript/'
const sub2='https://www.reddit.com/r/aww/'


function obtenerSubreddit (url){
    return (url.slice(25,-1));
}

console.log (obtenerSubreddit (sub1));
console.log (obtenerSubreddit (sub2));
