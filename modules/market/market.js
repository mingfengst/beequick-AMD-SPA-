// 使用 text 和 css 可以解析 html 内容和 css 内容
// 语法是 text! + 路径       这个导出的是 xxx.html 文件的内容
// $css! + 路径，这个不需要导出，自动会渲染到当前引入的当前页面中
define(["text!./market.html", "../header/header", "$css!./market.css"], function (html, Header) {
    
    return {
        // 渲染页面的方法
        render : function () {
            $("#container").html(html);
            
            // 导入公共 header
            Header.render("#market_header");
        }
    }
})