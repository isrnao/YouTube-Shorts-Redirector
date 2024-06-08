// ページが読み込まれたときに現在のURLをチェックし、必要に応じてリダイレクト
window.addEventListener('load', function() {
    if (window.location.href.includes('youtube.com/shorts/')) {
        var newUrl = window.location.href.replace('youtube.com/shorts/', 'youtube.com/watch?v=');
        window.location.href = newUrl; // 新しいURLにリダイレクト
    }
});

document.addEventListener('click', function(event) {
    var target = event.target.closest('a');

    if (target && target.href.includes('youtube.com/shorts/')) {
        var newUrl = target.href.replace('youtube.com/shorts/', 'youtube.com/watch?v=');
        event.preventDefault(); // 元のリンクの動作をキャンセル
        window.location.href = newUrl; // 新しいURLにリダイレクト
    }
}, true);
