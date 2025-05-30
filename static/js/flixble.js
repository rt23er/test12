(function() {
    // 获取 main
    function updateFontSize() {
        var main = document.getElementById('main');
        // 重新计算并设置根元素字体大小
        var fontSize = main.offsetWidth / 1680 * 16; // 计算字体大小
        var minFontSize = 11.7; // 设置最小字体大小

        // 如果计算出来的字体大小小于最小字体大小，则设置为最小字体大小
        if (fontSize < minFontSize) {
            fontSize = minFontSize;
        }

        // 设置根元素的字体大小
        document.documentElement.style.fontSize = fontSize + 'px';
    }

    window.onload = function() {
        updateFontSize(); // 初始设置字体大小
        window.addEventListener('resize', updateFontSize); // 监听窗口大小变化
    }
})();
