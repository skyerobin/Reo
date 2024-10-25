const Searching = Search.prototype;

function Search(){
    this.keyword = document.querySelector('input[name="search"]');
    this.engine = document.querySelector('.SelectSearch');
    this.button = document.querySelector('.img-button');
    this.form = document.querySelector('.search');

    this.Engine();
}

Search.prototype.Engine = function(){
    this.form.addEventListener('submit', e => {
        e.preventDefault();

        let engine = this.engine.value;
        let keyword = this.keyword.value;
        if(engine === 'google'){
            location.href = 'https://www.google.co.kr/search?q=' + keyword;
        }else if(engine === 'naver'){
            location.href = 'https://search.naver.com/search.naver?query=' + keyword;
        }else if(engine === 'youtube'){
            location.href = 'https://www.youtube.com/results?search_query=' + keyword;
        }else if(engine === 'x'){
            location.href = 'https://twitter.com/search?q=' + keyword;
        } else{
            location.href = 'https://music.youtube.com/search?q=' + keyword;
        }
    });
}

new Search();
