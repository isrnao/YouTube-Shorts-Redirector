document.addEventListener('click', function(event) {
    var target = event.target.closest('a');

    if (target && target.href.includes('youtube.com/shorts/')) {
        var newUrl = target.href.replace('youtube.com/shorts/', 'youtube.com/watch?v=');
        event.preventDefault(); // 元のリンクの動作をキャンセル
        window.location.href = newUrl; // 新しいURLにリダイレクト
    }
}, true);
