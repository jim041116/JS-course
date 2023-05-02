$(function () {
    // 取得所有按鈕
    var setFilter = $('#filterBtn');
    // 取得篩選按鈕中的a元素
    var filterBtn = setFilter.find('a');
    // 取得all按鈕
    var btnAll = $('.allItem');
    // 取得所有圖片中的元素
    var setList = $('.filterList');
    // 取得li元素
    var filterList = setList.find('li');
    // 取得篩選列表中的寬度
    var listWidth = filterList.outerWidth();

    // 處理篩選後的結果
    // 篩選按鈕被左鍵一下
    filterBtn.click(function () {
        // 檢查是否被點選狀態，不是的話才執行
        if (!($(this).hasClass('active'))) {
            //目前被點選的按鈕類別保存起來給變數 filterClass
            //attr()尋找到指定屬性的值
            var filterClass = $(this).attr('class');

            // 使用 each()方法，逐一取得對應類別的圖片
            filterList.each(function () {
                // 檢查li中是否有符合被篩選的類別
                if ($(this).hasClass(filterClass)) {
                    // 有找到
                    // 顯示圖片
                    // 1.調整寬度
                    $(this).css({ display: 'block' }).stop().animate({ width: listWidth }, 1500);
                    // 2.調整圖片透明度
                    //find('*')方法，將所有的li停下來
                    $(this).find('*').stop().animate({ opacity: '1' }, 1500);
                } else {
                    // 沒找到
                    //隱藏圖片(動畫效果)
                    $(this).find('*').stop().animate({ opacity: '0' }, 1000);
                    $(this).stop().animate({ width: '0' }, 1000, function(){
                        $(this).css({display:'none'});
                    });
                }
            });
            // 清除所有按鈕上的 active 類別
            filterBtn.removeClass('active');
            // 將目前的篩選按鈕加上 active 類別
            $(this).addClass('active');
        }
    });
    //全部顯示
    btnAll.click(function(){
        filterList.each(function(){
            $(this).css({display:'block'}).stop().animate({width: listWidth},1500);
            $(this).find('*').stop().animate({opacity:'1'}, 1500);
        });
    });
    //
    btnAll.click();
});