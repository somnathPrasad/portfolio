export default function metaScraper(url){
    var metaData = {};
    var data;
        fetch(url).then(res =>{
            data = res;
        })
        
    // var data = document.getElementsByTagName("meta");
    return data;
}