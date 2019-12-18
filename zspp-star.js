var cheerio = require("cheerio");
var server = require("./curl");

var url = "http://android.myapp.com/myapp/detail.htm?apkName=应用包名";
// http://open.163.com/special/opencourse/englishs1.html

server.download(url,function(data){
    // console.log("data=" + data);
    var items = [];
    if(data){
        var $ = cheerio.load(data);
        // $("div.com-blue-star-num").each(function(i,element){
        //     items.push({starNum:$(element).text()});// $(element).find('.com-blue-star-num').text()
        //     // $(element).attr("div.com-blue-star-num")
        //     console.log("starNum-----------------:" + JSON.stringify(items));
        // });

        $("div.det-ins-container").each(function(index,element){
            console.log("name:" + $("div.det-name-int").text());
            console.log("starNum:" + $("div.com-blue-star-num").text());
            console.log("downCount:" + $("div.det-ins-num").text());
            console.log("icon:" + $("div.det-icon").find("img").attr('src'));
            console.log("------------------------------------------------------------------");

            items.push({
                "name:" : $("div.det-name-int").text(),
                "starNum:" : $("div.com-blue-star-num").text(),
                "downCount:" : $("div.det-ins-num").text(),
                "icon:" : $("div.det-icon").find("img").attr('src')
            });
            console.log("items:" + JSON.stringify(items));
        });

        console.log("done");
    }else{
        console.log("error");
    }
}
    );