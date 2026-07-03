/**************************************************
 * MKOnlinePlayer v2.32
 * 播放列表配置模块
 * 编写：mengkun(http://mkblog.cn)
 * 时间：2017-9-15
 *************************************************/
// 建议修改前先备份一下
// 获取 歌曲的网易云音乐ID 或 网易云歌单ID 的方法：
// 先在 js/player.js 中开启调试模式，然后按 F12 打开浏览器的控制台。播放歌曲或点开歌单即可看到相应信息

var musicList = [
    // 以下三个系统预留列表请勿更改，否则可能导致程序无法正常运行！
    // 预留列表：搜索结果
    {
        name: "搜索结果", // 播放列表名字
        cover: " ", // 播放列表封面
        creatorName: " ", // 列表创建者名字
        creatorAvatar: " ", // 列表创建者头像
        item: []
    },
    // 预留列表：正在播放
    {
        name: "正在播放", // 播放列表名字
        cover: " ", // 播放列表封面
        creatorName: " ", // 列表创建者名字
        creatorAvatar: " ", // 列表创建者头像
        item: []
    },
    // 预留列表：播放历史
    {
        name: "播放历史", // 播放列表名字
        cover: "images/history.png", // 播放列表封面
        creatorName: " ", // 列表创建者名字
        creatorAvatar: " ", // 列表创建者头像
        item: []
    },
    // 以上三个系统预留列表请勿更改，否则可能导致程序无法正常运行！
    //*********************************************
    // 自定义列表开始，您可以自由添加您的自定义列表




    // 自定义列表教程开始！
    // 方式一：手动创建列表并添加歌曲信息
    // 温馨提示：各大音乐平台获取到的外链有效期均较短，因此 url 值应该设置为空，以让程序临时抓取
    {
        name: "本地列表", // 播放列表名字
        cover: "https://p3.music.126.net/qg3MkYPvU8A22Aqg451-AQ==/109951165714848195.jpg?param=300y300", // 播放列表封面图像
        creatorName: " ", // 列表创建者名字(暂时没用到，可空)
        creatorAvatar: " ", // 列表创建者头像(暂时没用到，可空)
        item: [ // 这里面放歌曲
            {
                id: "357462", // 音乐ID
                name: "123木头人", // 音乐名字
                artist: "黑Girl", // 艺术家名字
                album: "", // 专辑名字
                source: "netease", // 音乐来源
                url_id: "357462", // 链接ID
                pic_id: "", // 封面ID
                lyric_id: "357462", // 歌词ID
                pic: "https://p3.music.126.net/qg3MkYPvU8A22Aqg451-AQ==/109951165714848195.jpg?param=300y300", // 专辑图片
                url: "/music/123木头人 -黑Girl.mp3" // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            }, {
                id: "1217823",
                name: "B What U Wanna B",
                artist: "Darin",
                album: "",
                source: "",
                url_id: "1217823",
                pic_id: "109951165994365993",
                lyric_id: "1217823",
                pic: "",
                url: "/music/B What U Wanna B-Darin.mp3"
            }, {
                id: "31384245",
                name: "Boom Clap",
                artist: "Charli XCX",
                album: "",
                source: "",
                url_id: "31384245",
                pic_id: "2895014116201169",
                lyric_id: "31384245",
                pic: "",
                url: "/music/Boom Clap-Charli XCX.mp3"
            }, {
                id: "4164331",
                name: "Bye Bye Bye",
                artist: "Lovestoned",
                album: "",
                source: "",
                url_id: "4164331",
                pic_id: "1695446930044953",
                lyric_id: "4164331",
                pic: "",
                url: "/music/Bye Bye Bye-Lovestoned.mp3"
            }, {
                id: "16432803",
                name: "Chancenlos",
                artist: "Annett Louisan",
                album: "",
                source: "netease",
                url_id: "16432803",
                pic_id: "694891348761475",
                lyric_id: "16432803",
                pic: "null",
                url: "/music/Chancenlos-Annett Louisan.mp3"
            }, {
                id: "22494632",
                name: "Danke",
                artist: "LaFee",
                album: "",
                source: "",
                url_id: "22494632",
                pic_id: "109951168041060065",
                lyric_id: "22494632",
                pic: "",
                url: "/music/Danke-LaFee.mp3"
            }, {
                id: "16432790",
                name: "Die DingeAnnett Louisan",
                artist: "Annett Louisan",
                album: "",
                source: "",
                url_id: "16432790",
                pic_id: "597034813889354",
                lyric_id: "16432790",
                pic: "",
                url: "/music/Die Dinge-Annett Louisan.mp3"
            }, {
                id: "28256265",
                name: "Du fehlst mir so",
                artist: "Annett Louisan",
                album: "",
                source: "",
                url_id: "28256265",
                pic_id: "109951165969123610",
                lyric_id: "28256265",
                pic: "",
                url: "/music/Du fehlst mir so-Annett Louisan.mp3"
            }, {
                id: "3880911",
                name: "Es Ist Ein Schnee Gefallen",
                artist: "Adaro",
                album: "",
                source: "",
                url_id: "3880911",
                pic_id: "1699844976549492",
                lyric_id: "3880911",
                pic: "",
                url: "/music/Es Ist Ein Schnee Gefallen-Adaro.mp3"
            }, {
                id: "36990266",
                name: "Faded",
                artist: "Alan Walker",
                album: "",
                source: "",
                url_id: "36990266",
                pic_id: "109951165976856263",
                lyric_id: "36990266",
                pic: "",
                url: "/music/Faded-Alan Walker.mp3"
            }, {
                id: "2700760",
                name: "Free To Be Me",
                artist: "Haroula Rose",
                album: "",
                source: "",
                url_id: "2700760",
                pic_id: "109951164854956267",
                lyric_id: "2700760",
                pic: "",
                url: "/music/Free To Be Me-Haroula Rose.mp3"
            }, {
                id: "17635351",
                name: "Für immer",
                artist: "Eisblume",
                album: "",
                source: "",
                url_id: "17635351",
                pic_id: "755364488290776",
                lyric_id: "17635351",
                pic: "",
                url: "/music/Für immer-Eisblume.mp3"
            }, {
                id: "2919622",
                name: "I Am You",
                artist: "Kim Taylor",
                album: "",
                source: "",
                url_id: "2919622",
                pic_id: "109951163073357482",
                lyric_id: "2919622",
                pic: "",
                url: "/music/I Am You-Kim Taylor.mp3"
            }, {
                id: "3026583",
                name: "I Remember",
                artist: "MOCCA",
                album: "",
                source: "",
                url_id: "3026583",
                pic_id: "109951163436732617",
                lyric_id: "3026583",
                pic: "",
                url: "/music/I Remember-MOCCA.mp3"
            }, {
                id: "26348081",
                name: "Morning",
                artist: "卫兰",
                album: "",
                source: "",
                url_id: "26348081",
                pic_id: "109951163402005652",
                lyric_id: "26348081",
                pic: "",
                url: "/music/Morning-卫兰.mp3"
            }, {
                id: "22735051",
                name: "Oh!",
                artist: "少女时代",
                album: "",
                source: "",
                url_id: "22735051",
                pic_id: "18502581673986786",
                lyric_id: "22735051",
                pic: "",
                url: "/music/Oh!-少女时代.mp3"
            }, {
                id: "18449193",
                name: "Say Hello",
                artist: "Rosie Thomas;Sufjan Stevens",
                album: "",
                source: "",
                url_id: "18449193",
                pic_id: "109951166683572040",
                lyric_id: "18449193",
                pic: "",
                url: "/music/Say Hello-Rosie Thomas;Sufjan Stevens.mp3"
            }, {
                id: "20036333",
                name: "Schlaflied",
                artist: "Kate & Ben",
                album: "",
                source: "",
                url_id: "20036333",
                pic_id: "2538772349663439",
                lyric_id: "20036333",
                pic: "",
                url: "/music/Schlaflied-Kate & Ben.mp3"
            }, {
                id: "468882985",
                name: "Shape of You",
                artist: "J.Fla",
                album: "Shape of You",
                source: "",
                url_id: "468882985",
                pic_id: "109951163032775841",
                lyric_id: "468882985",
                pic: "",
                url: "/music/Shape of You-J.Fla.mp3"
            }, {
                id: "19292842",
                name: "Speak Now",
                artist: "Taylor Swift",
                album: "",
                source: "",
                url_id: "19292842",
                pic_id: "109951166119330991",
                lyric_id: "19292842",
                pic: "",
                url: "/music/Speak Now-Taylor Swift.mp3"
            }, {
                id: "18836961",
                name: "Stay Here Forever",
                artist: "Jewel",
                album: "",
                source: "",
                url_id: "18836961",
                pic_id: "19027048718874686",
                lyric_id: "18836961",
                pic: "",
                url: "/music/Stay Here Forever-Jewel.mp3"
            }, {
                id: "28593339",
                name: "Sunshine Girl",
                artist: "moumoon",
                album: "ICE CANDY",
                source: "",
                url_id: "28593339",
                pic_id: "18591642115850247",
                lyric_id: "28593339",
                pic: "",
                url: "/music/Sunshine Girl-moumoon.mp3"
            }, {
                id: "2010944468",
                name: "Symphonie",
                artist: "Silbermond",
                album: "",
                source: "",
                url_id: "2010944468",
                pic_id: "109951168198554891",
                lyric_id: "2010944468",
                pic: "",
                url: "/music/Symphonie-Silbermond.mp3"
            }, {
                id: "22294416",
                name: "The Girl With the Northern Soul CollectionClub 8",
                artist: "",
                album: "",
                source: "",
                url_id: "22294416",
                pic_id: "109951167580317195",
                lyric_id: "22294416",
                pic: "",
                url: "/music/The Girl With the Northern Soul Collection-Club 8.mp3"
            }, {
                id: "32272264",
                name: "Wie geht glücklich",
                artist: "Sarah Connor",
                album: "",
                source: "",
                url_id: "32272264",
                pic_id: "2910407280165696",
                lyric_id: "32272264",
                pic: "",
                url: "/music/Wie geht glücklich-Sarah Connor.mp3"
            }, {
                id: "3880988",
                name: "Wigen Wagen",
                artist: "Adaro",
                album: "Minnenspiel",
                source: "",
                url_id: "3880988",
                pic_id: "109951166239927364",
                lyric_id: "3880988",
                pic: "",
                url: "/music/Wigen Wagen-Adaro.mp3"
            }, {
                id: "560399448",
                name: "极乐净土",
                artist: "",
                album: "",
                source: "",
                url_id: "560399448",
                pic_id: "109951163295861375",
                lyric_id: "560399448",
                pic: "",
                url: "/music/《极乐净土》官方中文版_哔哩哔哩 (゜-゜)つロ 干杯~-bilibili_2.mp3"
            }, {
                id: "547901127",
                name: "阿刁",
                artist: "【祖娅纳惜·FRE】",
                album: "",
                source: "",
                url_id: "547901127",
                pic_id: "109951163137882968",
                lyric_id: "547901127",
                pic: "",
                url: "/music/【祖娅纳惜·FRE】阿刁_哔哩哔哩 (゜-゜)つロ 干杯~-bilibili.mp3"
            }, {
                id: "229336",
                name: "一个像夏天一个像秋天",
                artist: "范玮琪",
                album: "",
                source: "",
                url_id: "229336",
                pic_id: "109951168750873662",
                lyric_id: "229336",
                pic: "",
                url: "/music/一个像夏天一个像秋天-范玮琪.mp3"
            }, {
                id: "326990",
                name: "亲爱的,那不是爱情",
                artist: "张韶涵",
                album: "",
                source: "",
                url_id: "326990",
                pic_id: "109951167379860467",
                lyric_id: "326990",
                pic: "",
                url: "/music/亲爱的,那不是爱情-张韶涵.mp3"
            }, {
                id: "394537",
                name: "低着头",
                artist: "自然卷",
                album: "C'est La Vie 2.5 资源回收",
                source: "",
                url_id: "394537",
                pic_id: "638816255750145",
                lyric_id: "394537",
                pic: "",
                url: "/music/低着头-自然卷.mp3"
            }, {
                id: "368813",
                name: "初恋粉色系 ",
                artist: "南拳妈妈",
                album: "",
                source: "",
                url_id: "368813",
                pic_id: "109951163244870797",
                lyric_id: "368813",
                pic: "",
                url: "/music/初恋粉色系 -南拳妈妈.mp3"
            }, {
                id: "254485",
                name: "勇气",
                artist: "梁静茹",
                album: "",
                source: "",
                url_id: "254485",
                pic_id: "109951163240604120",
                lyric_id: "254485",
                pic: "",
                url: "/music/勇气-梁静茹.mp3"
            }, {
                id: "1409152181",
                name: "卓别林",
                artist: "龚芝怡",
                album: "",
                source: "",
                url_id: "1409152181",
                pic_id: "109951164544592419",
                lyric_id: "1409152181",
                pic: "",
                url: "/music/卓别林-龚芝怡.mp3"
            }, {
                id: "92305",
                name: "单车恋人",
                artist: "后弦",
                album: "",
                source: "",
                url_id: "92305",
                pic_id: "666304046444415",
                lyric_id: "92305",
                pic: "",
                url: "/music/单车恋人-后弦.mp3"
            }, {
                id: "326719",
                name: "喜欢",
                artist: "张悬",
                album: "",
                source: "",
                url_id: "326719",
                pic_id: "109951168632695603",
                lyric_id: "326719",
                pic: "",
                url: "/music/喜欢-张悬.mp3"
            }, {
                id: "28949444",
                name: "喜欢你G.E.M.",
                artist: "邓紫棋",
                album: "",
                source: "",
                url_id: "28949444",
                pic_id: "8896148580676276",
                lyric_id: "28949444",
                pic: "",
                url: "/music/喜欢你-G.E.M.邓紫棋.mp3"
            }, {
                id: "394653",
                name: "坐在巷口的那对男女",
                artist: "自然卷",
                album: "",
                source: "",
                url_id: "394653",
                pic_id: "78065325584894",
                lyric_id: "394653",
                pic: "",
                url: "/music/坐在巷口的那对男女-自然卷.mp3"
            }, {
                id: "326738",
                name: "宝贝",
                artist: "张悬",
                album: "",
                source: "",
                url_id: "326738",
                pic_id: "109951167872578215",
                lyric_id: "326738",
                pic: "",
                url: "/music/宝贝-张悬.mp3"
            }, {
                id: "421423806",
                name: "小半",
                artist: "陈粒",
                album: "",
                source: "",
                url_id: "421423806",
                pic_id: "1371091013186741",
                lyric_id: "421423806",
                pic: "",
                url: "/music/小半-陈粒.mp3"
            }, {
                id: "254146",
                name: "小手拉大手",
                artist: "梁静茹",
                album: "",
                source: "",
                url_id: "254146",
                pic_id: "109951168144462962",
                lyric_id: "254146",
                pic: "",
                url: "/music/小手拉大手-梁静茹.mp3"
            }, {
                id: "1381755293",
                name: "山楂树之恋",
                artist: "程佳佳",
                album: "",
                source: "",
                url_id: "1381755293",
                pic_id: "109951164260611202",
                lyric_id: "1381755293",
                pic: "",
                url: "/music/山楂树之恋-程佳佳.mp3"
            }, {
                id: "553543175",
                name: "平凡之路",
                artist: "朴树",
                album: "",
                source: "",
                url_id: "553543175",
                pic_id: "109951163252275728",
                lyric_id: "553543175",
                pic: "",
                url: "/music/平凡之路-朴树.mp3"
            }, {
                id: "461011",
                name: "恋愛サーキュレーション",
                artist: "花澤香菜",
                album: "",
                source: "",
                url_id: "461011",
                pic_id: "109951166198077552",
                lyric_id: "461011",
                pic: "",
                url: "/music/恋愛サーキュレーション-花澤香菜.mp3"
            }, {
                id: "254059",
                name: "情歌",
                artist: "梁静茹",
                album: "",
                source: "",
                url_id: "254059",
                pic_id: "109951168163257789",
                lyric_id: "254059",
                pic: "",
                url: "/music/情歌-梁静茹.mp3"
            }, {
                id: "409654891",
                name: "故梦",
                artist: "双笙",
                album: "",
                source: "",
                url_id: "409654891",
                pic_id: "109951168638984216",
                lyric_id: "409654891",
                pic: "",
                url: "/music/故梦-双笙.mp3"
            }, {
                id: "165340",
                name: "有点甜",
                artist: "汪苏泷;By2",
                album: "",
                source: "",
                url_id: "165340",
                pic_id: "109951164176658680",
                lyric_id: "165340",
                pic: "",
                url: "/music/有点甜-汪苏泷;By2.mp3"
            }, {
                id: "327736",
                name: "梁山伯与茱丽叶",
                artist: "卓文萱;曹格",
                album: "",
                source: "",
                url_id: "327736",
                pic_id: "109951163423040944",
                lyric_id: "327736",
                pic: "",
                url: "/music/梁山伯与茱丽叶-卓文萱;曹格.mp3"
            }, {
                id: "1851295915",
                name: "爱久见人心",
                artist: "梁静茹",
                album: "",
                source: "",
                url_id: "1851295915",
                pic_id: "109951166753798796",
                lyric_id: "1851295915",
                pic: "",
                url: "/music/爱久见人心-梁静茹.mp3"
            }, {
                id: "233926",
                name: "狠狠哭",
                artist: "郭采洁",
                album: "",
                source: "",
                url_id: "233926",
                pic_id: "109951164081870241",
                lyric_id: "233926",
                pic: "",
                url: "/music/狠狠哭-郭采洁.mp3"
            }, {
                id: "413829859",
                name: "童话镇",
                artist: "陈一发儿",
                album: "",
                source: "",
                url_id: "413829859",
                pic_id: "18345351510075909",
                lyric_id: "413829859",
                pic: "",
                url: "/music/童话镇-陈一发儿.mp3"
            }, {
                id: "2054719988",
                name: "说好了不见面",
                artist: "小贱（谭冰尧）",
                album: "",
                source: "",
                url_id: "2054719988",
                pic_id: "109951168489987234",
                lyric_id: "2054719988",
                pic: "",
                url: "/music/说好了不见面-小贱（谭冰尧）.mp3"
            }, {
                id: "355992",
                name: "追梦赤子心",
                artist: "Gala",
                album: "",
                source: "",
                url_id: "355992",
                pic_id: "19061133579343591",
                lyric_id: "355992",
                pic: "",
                url: "/music/追梦赤子心-Gala.mp3"
            }, {
                id: "454828887",
                name: "遇见",
                artist: "孙燕姿",
                album: "",
                source: "",
                url_id: "454828887",
                pic_id: "17687843556430013",
                lyric_id: "454828887",
                pic: "",
                url: "/music/遇见-孙燕姿.mp3"
            }, {
                id: "327235",
                name: "遗失的美好",
                artist: "张韶涵",
                album: "",
                source: "",
                url_id: "327235",
                pic_id: "109951167440837785",
                lyric_id: "327235",
                pic: "",
                url: "/music/遗失的美好-张韶涵.mp3"
            }, {
                id: "2a24dea6c74884195fe5b9732fd95ca8",
                name: "小幸运",
                artist: "金玟岐",
                album: "金玟岐翻唱作品集",
                source: "kugou", // 酷狗 
                url_id: "2a24dea6c74884195fe5b9732fd95ca8",
                pic_id: "2a24dea6c74884195fe5b9732fd95ca8",
                lyric_id: "2a24dea6c74884195fe5b9732fd95ca8",
                pic: "http://singerimg.kugou.com/uploadpic/softhead/400/20161226/20161226105135733.jpg",
                url: "" // 酷狗的外链有效期较短，插入时 url[必须]设置空值，播放时再临时抓取
            }
        ]
        // 列表中最后一首歌大括号后面不要加逗号]
    }, {
        name: "老歌", // 播放列表名字 
        cover: "https://p3.music.126.net/0543F-ln2Apdiopez_jbsA==/109951163244853571.jpg?param=300y300", // 播放列表封面图像 
        creatorName: " ", // 列表创建者名字(暂时没用到，可空) 
        creatorAvatar: " ", // 列表创建者头像(暂时没用到，可空) 
        item: [{
                id: "150361",
                name: "三国恋",
                artist: "Tank",
                album: "Fighting!生存之道",
                source: "netease",
                url_id: "150361",
                pic_id: "109951163244853571",
                lyric_id: "150361",
                pic: "https://p3.music.126.net/0543F-ln2Apdiopez_jbsA==/109951163244853571.jpg?param=300y300",
                url: " /老歌/三国恋 - Tank.mp3"
            }, {
                id: "69827",
                name: "太多",
                artist: "陈冠蒲",
                album: "就让你走",
                source: "netease",
                url_id: "69827",
                pic_id: "109951165293600860",
                lyric_id: "69827",
                pic: "null",
                url: " /老歌/太多 - 陈冠蒲.mp3"
            }, {
                id: "239942",
                name: "不要用我的爱来伤害我",
                artist: "韩晶",
                album: "不要用我的爱来伤害我",
                source: "netease",
                url_id: "239942",
                pic_id: "60473139533535",
                lyric_id: "239942",
                pic: "null",
                url: " /老歌/不要用我的爱来伤害我 - 韩晶.mp3"
            }, {
                id: "2061825547",
                name: "一直很安静（FarAty Bootleg）",
                artist: "FarAty",
                album: "阿桑",
                source: "netease",
                url_id: "2061825547",
                pic_id: "109951168720979969",
                lyric_id: "2061825547",
                pic: "null",
                url: " /老歌/一直很安静 - 阿桑.mp3"
            }, {
                id: "239188",
                name: "没那么简单",
                artist: "黄小琥",
                album: "简单/不简单",
                source: "netease",
                url_id: "239188",
                pic_id: "109951163695427333",
                lyric_id: "239188",
                pic: "null",
                url: " /老歌/没那么简单 - 黄小琥.mp3"
            }, {
                id: "178142",
                name: "擦肩而过",
                artist: "宇桐非",
                album: "为爱而声",
                source: "netease",
                url_id: "178142",
                pic_id: "109951164447827758",
                lyric_id: "178142",
                pic: "null",
                url: " /老歌/擦肩而过 - 宇桐非.mp3"
            }, {
                id: "176430",
                name: "爱上你是一个错",
                artist: "杨培安",
                album: "午夜两点半的我",
                source: "netease",
                url_id: "176430",
                pic_id: "109951168602506322",
                lyric_id: "176430",
                pic: "https://p3.music.126.net/_mMnOkzFFCdHzegUWrVwyQ==/109951168602506322.jpg?param=300y300",
                url: " /老歌/爱上你是一个错 - 杨培安.mp3"
            }, {
                id: "307081",
                name: "表白",
                artist: "萧亚轩",
                album: "1087",
                source: "netease",
                url_id: "307081",
                pic_id: "109951165623500611",
                lyric_id: "307081",
                pic: "null",
                url: " /老歌/表白 - 萧亚轩.mp3"
            }, {
                id: "85621",
                name: "第一次",
                artist: "光良",
                album: "第1次个人创作专辑",
                source: "netease",
                url_id: "85621",
                pic_id: "109951163287267754",
                lyric_id: "85621",
                pic: "https://p3.music.126.net/NlfftxU92TkoloqyecgwPw==/109951163287267754.jpg?param=300y300",
                url: "/老歌/第一次 - 光良.mp3"
            }, {
                id: "66525",
                name: "有没有人告诉你",
                artist: "陈楚生",
                album: "原来我一直都不孤单",
                source: "netease",
                url_id: "66525",
                pic_id: "53876069773370",
                lyric_id: "66525",
                pic: "null",
                url: " /老歌/有没有人告诉你 - 陈楚生.mp3"
            }, {
                id: "1476410303",
                name: "预谋",
                artist: "王琬茜",
                album: "一生一世一对一",
                source: "netease",
                url_id: "1476410303",
                pic_id: "109951165293167945",
                lyric_id: "1476410303",
                pic: "null",
                url: " /老歌/预谋 - 许佳慧.mp3"
            }, {
                id: "369173",
                name: "外滩十八号",
                artist: "男才女貌",
                album: "男才女貌",
                source: "netease",
                url_id: "369173",
                pic_id: "54975581401145",
                lyric_id: "369173",
                pic: "null",
                url: " /老歌/外滩十八号 - 袁成杰、戚薇.mp3"
            }, {
                id: "8ee2d830c68e9081c827ab3eb4cf952f",
                name: "老人与海",
                artist: "海鸣威",
                album: "Dance Dance Dance",
                source: "kugou",
                url_id: "8ee2d830c68e9081c827ab3eb4cf952f",
                pic_id: "8ee2d830c68e9081c827ab3eb4cf952f",
                lyric_id: "8ee2d830c68e9081c827ab3eb4cf952f",
                pic: "null",
                url: " /老歌/老人与海 - 海鸣威、吴琼.mp3"
            }, {
                id: "259a8c30da12364c588ca148e47ac135",
                name: "太早",
                artist: "刘允乐",
                album: "允乐",
                source: "kugou",
                url_id: "259a8c30da12364c588ca148e47ac135",
                pic_id: "259a8c30da12364c588ca148e47ac135",
                lyric_id: "259a8c30da12364c588ca148e47ac135",
                pic: "null",
                url: " /老歌/太早 - 刘允乐.mp3"
            }, {
                id: "5257437",
                name: "当你孤单你会想起谁",
                artist: "张栋梁",
                album: "Forever Love 34首动人国语精选情歌",
                source: "netease",
                url_id: "5257437",
                pic_id: "71468255823115",
                lyric_id: "5257437",
                pic: "null",
                url: " /老歌/当你孤单你会想起谁 - 张栋梁.mp3"
            }, {
                id: "3e2057a44e12b065c19073a9ce30b2c9",
                name: "被伤过的心还可以爱谁",
                artist: "六哲",
                album: "被伤过的心还可以爱谁",
                source: "kugou",
                url_id: "3e2057a44e12b065c19073a9ce30b2c9",
                pic_id: "3e2057a44e12b065c19073a9ce30b2c9",
                lyric_id: "3e2057a44e12b065c19073a9ce30b2c9",
                pic: "null",
                url: " /老歌/被伤过的心还可以爱谁 - 六哲.mp3"
            }, {
                id: "dfd5b81295325e474d0d3c979e172127",
                name: "生日礼物",
                artist: "江涛",
                album: "等到花没开",
                source: "kugou",
                url_id: "dfd5b81295325e474d0d3c979e172127",
                pic_id: "dfd5b81295325e474d0d3c979e172127",
                lyric_id: "dfd5b81295325e474d0d3c979e172127",
                pic: "null",
                url: " /老歌/生日礼物 - 江涛.mp3"
            }, {
                id: "20859cd14a9cbf023f4f100a714b2bd0",
                name: "花香",
                artist: "许绍洋",
                album: "薰衣草 电视剧原声带",
                source: "kugou",
                url_id: "20859cd14a9cbf023f4f100a714b2bd0",
                pic_id: "20859cd14a9cbf023f4f100a714b2bd0",
                lyric_id: "20859cd14a9cbf023f4f100a714b2bd0",
                pic: "null",
                url: " /老歌/花香 - 许绍洋.mp3"
            }, {
                id: "a3d1859a44a77135960be8c0a32dc624",
                name: "蝴蝶泉边",
                artist: "黄雅莉",
                album: "崽崽",
                source: "kugou",
                url_id: "a3d1859a44a77135960be8c0a32dc624",
                pic_id: "a3d1859a44a77135960be8c0a32dc624",
                lyric_id: "a3d1859a44a77135960be8c0a32dc624",
                pic: "null",
                url: " /老歌/蝴蝶泉边(Live) - 黄雅莉.mp3"
            }, {
                id: "ba4bf6853219717be2e1cbf3388aef86",
                name: "十一年",
                artist: "邱永传",
                album: "十一年",
                source: "kugou",
                url_id: "ba4bf6853219717be2e1cbf3388aef86",
                pic_id: "ba4bf6853219717be2e1cbf3388aef86",
                lyric_id: "ba4bf6853219717be2e1cbf3388aef86",
                pic: "null",
                url: " /老歌/十一年 - 邱永传.mp3"
            }, {
                id: "1472877668",
                name: "爱死了昨天 (live)",
                artist: "李慧珍",
                album: "流淌的歌声 第二季  第9期",
                source: "netease",
                url_id: "1472877668",
                pic_id: "109951165256207165",
                lyric_id: "1472877668",
                pic: "null",
                url: " /老歌/爱死了昨天 - 李慧珍.mp3"
            }, {
                id: "301464",
                name: "飞舞",
                artist: "王冰洋",
                album: "冰雪飞洋",
                source: "netease",
                url_id: "301464",
                pic_id: "31885837222351",
                lyric_id: "301464",
                pic: "null",
                url: " /老歌/飞舞 - 王冰洋.mp3"
            }, {
                id: "135362",
                name: "该死的温柔",
                artist: "马天宇",
                album: "自言自宇",
                source: "netease",
                url_id: "135362",
                pic_id: "109951165698169768",
                lyric_id: "135362",
                pic: "null",
                url: " /老歌/该死的温柔 - 马天宇.mp3"
            }, {
                id: "66525",
                name: "有没有人告诉你",
                artist: "陈楚生",
                album: "原来我一直都不孤单",
                source: "netease",
                url_id: "66525",
                pic_id: "53876069773370",
                lyric_id: "66525",
                pic: "https://p3.music.126.net/cuzFVNWVo3JwhWBITdSlfw==/53876069773370.jpg?param=300y300",
                url: "/老歌/有没有人告诉你 - 陈楚生.mp3"
            }, {
                id: "138793",
                name: "孤单北半球",
                artist: "欧得洋",
                album: "北半球有欧得洋",
                source: "netease",
                url_id: "138793",
                pic_id: "109951165422696727",
                lyric_id: "138793",
                pic: "null",
                url: " /老歌/孤单北半球 - 欧得洋.mp3"
            }, {
                id: "92305",
                name: "单车恋人",
                artist: "后弦",
                album: "9公主",
                source: "netease",
                url_id: "92305",
                pic_id: "666304046444415",
                lyric_id: "92305",
                pic: "null",
                url: "/老歌/单车恋人 - 后弦.mp3"
            }, {
                id: "2058621399",
                name: "别说我的眼泪你无所谓",
                artist: "东来东往",
                album: "别说我的眼泪你无所谓",
                source: "netease",
                url_id: "2058621399",
                pic_id: "109951168698042092",
                lyric_id: "2058621399",
                pic: "null",
                url: " /老歌/别说我的眼泪你无所谓 - 东来东往.mp3"
            }, {
                id: "360832",
                name: "杀破狼(Through The Fire Remix)",
                artist: "JS",
                album: "Somewhere",
                source: "netease",
                url_id: "360832",
                pic_id: "109951166117573535",
                lyric_id: "360832",
                pic: "null",
                url: "/老歌/杀破狼 - JS.mp3"
            }, {
                id: "c6cca2a224d7f6d75ed7ac5e1cdb22ec",
                name: "那么骄傲 (重遇版)",
                artist: "金海心",
                album: "那么骄傲 (重遇版)",
                source: "kugou",
                url_id: "c6cca2a224d7f6d75ed7ac5e1cdb22ec",
                pic_id: "c6cca2a224d7f6d75ed7ac5e1cdb22ec",
                lyric_id: "c6cca2a224d7f6d75ed7ac5e1cdb22ec",
                pic: "null",
                url: " /老歌/那么骄傲(重遇版) - 金海心.mp3"
            }, {
                id: "33431ba8c2fb438ed064ae5deeb2985f",
                name: "夏天的风",
                artist: "温岚",
                album: "温式效应",
                source: "kugou",
                url_id: "33431ba8c2fb438ed064ae5deeb2985f",
                pic_id: "33431ba8c2fb438ed064ae5deeb2985f",
                lyric_id: "33431ba8c2fb438ed064ae5deeb2985f",
                pic: "null",
                url: " /老歌/夏天的风 - 温岚.mp3"
            }, {
                id: "16df15ce32dee918c64cc2a98327f4b9",
                name: "想太多",
                artist: "李玖哲",
                album: "想太多",
                source: "kugou",
                url_id: "16df15ce32dee918c64cc2a98327f4b9",
                pic_id: "16df15ce32dee918c64cc2a98327f4b9",
                lyric_id: "16df15ce32dee918c64cc2a98327f4b9",
                pic: "null",
                url: "/老歌/想太多 - 李玖哲.mp3"
            }, {
                id: "712eb54370ad2067081c72b5f74b4b2e",
                name: "死心塌地",
                artist: "夹子道",
                album: "死心塌地",
                source: "kugou",
                url_id: "712eb54370ad2067081c72b5f74b4b2e",
                pic_id: "712eb54370ad2067081c72b5f74b4b2e",
                lyric_id: "712eb54370ad2067081c72b5f74b4b2e",
                pic: "null",
                url: " /老歌/死心塌地 - 夹子道.mp3"
            }, {
                id: "8ace2d4510e26fbdc4736055c5ae4b03",
                name: "有一种爱叫做放手",
                artist: "阿木",
                album: "有一种爱叫做放手",
                source: "kugou",
                url_id: "8ace2d4510e26fbdc4736055c5ae4b03",
                pic_id: "8ace2d4510e26fbdc4736055c5ae4b03",
                lyric_id: "8ace2d4510e26fbdc4736055c5ae4b03",
                pic: "null",
                url: " /老歌/有一种爱叫做放手 - 阿木.mp3"
            }, {
                id: "7b76de855eb7d5af18abc31e13cad93b",
                name: "最后一次的温柔",
                artist: "兰雨",
                album: "最后一次的温柔",
                source: "kugou",
                url_id: "7b76de855eb7d5af18abc31e13cad93b",
                pic_id: "7b76de855eb7d5af18abc31e13cad93b",
                lyric_id: "7b76de855eb7d5af18abc31e13cad93b",
                pic: "null",
                url: " /老歌/最后一次的温柔 - 兰雨.mp3"
            }, {
                id: "66c760662799f3ab7a59d53cb7631cf0",
                name: "下辈子如果我还记得你",
                artist: "马郁",
                album: "恋人絮语",
                source: "kugou",
                url_id: "66c760662799f3ab7a59d53cb7631cf0",
                pic_id: "66c760662799f3ab7a59d53cb7631cf0",
                lyric_id: "66c760662799f3ab7a59d53cb7631cf0",
                pic: "null",
                url: " /老歌/下辈子如果我还记得你 - 马郁.mp3"
            }, {
                id: "d1c38d4557f5842a44492c1992c3a79b",
                name: "天使的翅膀",
                artist: "安琥",
                album: "天使的翅膀",
                source: "kugou",
                url_id: "d1c38d4557f5842a44492c1992c3a79b",
                pic_id: "d1c38d4557f5842a44492c1992c3a79b",
                lyric_id: "d1c38d4557f5842a44492c1992c3a79b",
                pic: "null",
                url: " /老歌/天使的翅膀 - 安琥.mp3"
            }, {
                id: "a49e9cf2a435138df8b4df55c149fc44",
                name: "分手在那个秋天",
                artist: "浩瀚",
                album: "很想问你是否爱过我",
                source: "kugou",
                url_id: "a49e9cf2a435138df8b4df55c149fc44",
                pic_id: "a49e9cf2a435138df8b4df55c149fc44",
                lyric_id: "a49e9cf2a435138df8b4df55c149fc44",
                pic: "null",
                url: " /老歌/分手在那个秋天 - 浩瀚.mp3"
            }, {
                id: "1d687296864d97f63a3729dff785295d",
                name: "心痛2009",
                artist: "欢子",
                album: "其实很寂寞",
                source: "kugou",
                url_id: "1d687296864d97f63a3729dff785295d",
                pic_id: "1d687296864d97f63a3729dff785295d",
                lyric_id: "1d687296864d97f63a3729dff785295d",
                pic: "null",
                url: " /老歌/心痛2009 - 欢子.mp3"
            }, {
                id: "c60817bf6672fc113764c9c08d971c4d",
                name: "等一分钟",
                artist: "徐誉滕",
                album: "滕.爱",
                source: "kugou",
                url_id: "c60817bf6672fc113764c9c08d971c4d",
                pic_id: "c60817bf6672fc113764c9c08d971c4d",
                lyric_id: "c60817bf6672fc113764c9c08d971c4d",
                pic: "null",
                url: " /老歌/等一分钟 - 徐誉滕.mp3"
            }, {
                id: "1383381667",
                name: "犯错",
                artist: "顾峰",
                album: "犯错",
                source: "netease",
                url_id: "1383381667",
                pic_id: "109951164281883574",
                lyric_id: "1383381667",
                pic: "null",
                url: " /老歌/犯错 - 顾峰、斯琴高丽.mp3"
            }, {
                id: "5839b999eadfebe5fef286a00a3ee3d7",
                name: "求佛",
                artist: "誓言",
                album: "我的誓言",
                source: "kugou",
                url_id: "5839b999eadfebe5fef286a00a3ee3d7",
                pic_id: "5839b999eadfebe5fef286a00a3ee3d7",
                lyric_id: "5839b999eadfebe5fef286a00a3ee3d7",
                pic: "null",
                url: " /老歌/求佛 - 誓言.mp3"
            }, {
                id: "506fd1f0fce8d0c0ee11ee272c1d9636",
                name: "秋天不回来",
                artist: "王强",
                album: "我们的主打歌",
                source: "kugou",
                url_id: "506fd1f0fce8d0c0ee11ee272c1d9636",
                pic_id: "506fd1f0fce8d0c0ee11ee272c1d9636",
                lyric_id: "506fd1f0fce8d0c0ee11ee272c1d9636",
                pic: "null",
                url: " /老歌/秋天不回来 - 王强.mp3"
            }, {
                id: "fc2fbae20f74c10e3326e2f5dc823678",
                name: "你到底爱谁",
                artist: "刘嘉亮",
                album: "你到底爱谁（台湾版）",
                source: "kugou",
                url_id: "fc2fbae20f74c10e3326e2f5dc823678",
                pic_id: "fc2fbae20f74c10e3326e2f5dc823678",
                lyric_id: "fc2fbae20f74c10e3326e2f5dc823678",
                pic: "null",
                url: " /老歌/你到底爱谁 - 刘嘉亮.mp3"
            }, {
                id: "a47947fdf6aaac2f86577362ab3c38f1",
                name: "今生最爱",
                artist: "王程明",
                album: "龙乐文化2月单曲",
                source: "kugou",
                url_id: "a47947fdf6aaac2f86577362ab3c38f1",
                pic_id: "a47947fdf6aaac2f86577362ab3c38f1",
                lyric_id: "a47947fdf6aaac2f86577362ab3c38f1",
                pic: "null",
                url: " /老歌/今生最爱 - 王程明.mp3"
            }, {
                id: "780a8a5b22c5dcc484d7b8defc9d2f71",
                name: "做你的爱人",
                artist: "饶天亮",
                album: "做你的爱人",
                source: "kugou",
                url_id: "780a8a5b22c5dcc484d7b8defc9d2f71",
                pic_id: "780a8a5b22c5dcc484d7b8defc9d2f71",
                lyric_id: "780a8a5b22c5dcc484d7b8defc9d2f71",
                pic: "null",
                url: " /老歌/做你的爱人 - 饶天亮.mp3"
            }, {
                id: "7944fc9a656c8bb2078d323300f701ac",
                name: "回来我的爱",
                artist: "阳一",
                album: "回来我的爱",
                source: "kugou",
                url_id: "7944fc9a656c8bb2078d323300f701ac",
                pic_id: "7944fc9a656c8bb2078d323300f701ac",
                lyric_id: "7944fc9a656c8bb2078d323300f701ac",
                pic: "null",
                url: " /老歌/回来我的爱 - 阳一.mp3"
            }, {
                id: "50fecc8d5e39b12992cf56520de4aae2",
                name: "一个人的寂寞两个人的错",
                artist: "贺一航",
                album: "情伤",
                source: "kugou",
                url_id: "50fecc8d5e39b12992cf56520de4aae2",
                pic_id: "50fecc8d5e39b12992cf56520de4aae2",
                lyric_id: "50fecc8d5e39b12992cf56520de4aae2",
                pic: "null",
                url: " /老歌/一个人的寂寞两个人的错 - 贺一航.mp3"
            }, {
                id: "61bb8560d7fb979eb70ec5050990db95",
                name: "丁香花",
                artist: "唐磊",
                album: "丁香花",
                source: "kugou",
                url_id: "61bb8560d7fb979eb70ec5050990db95",
                pic_id: "61bb8560d7fb979eb70ec5050990db95",
                lyric_id: "61bb8560d7fb979eb70ec5050990db95",
                pic: "null",
                url: " /老歌/丁香花 - 唐磊.mp3"
            }, {
                id: "2a38df2e6fd85ccbb84c006c16ec8adc",
                name: "那一夜",
                artist: "谢军",
                album: "那一夜",
                source: "kugou",
                url_id: "2a38df2e6fd85ccbb84c006c16ec8adc",
                pic_id: "2a38df2e6fd85ccbb84c006c16ec8adc",
                lyric_id: "2a38df2e6fd85ccbb84c006c16ec8adc",
                pic: "null",
                url: " /老歌/那一夜 - 谢军.mp3"
            }, {
                id: "299470",
                name: "我不是黄蓉",
                artist: "王蓉",
                album: "我不是黄蓉",
                source: "netease",
                url_id: "299470",
                pic_id: "109951165625508031",
                lyric_id: "299470",
                pic: "null",
                url: " /老歌/我不是黄蓉 - 王蓉.mp3"
            }, {
                id: "cbe20c359509d697bf1a2f375553d5ce",
                name: "爱情错觉",
                artist: "王娅",
                album: "爱情错觉",
                source: "kugou",
                url_id: "cbe20c359509d697bf1a2f375553d5ce",
                pic_id: "cbe20c359509d697bf1a2f375553d5ce",
                lyric_id: "cbe20c359509d697bf1a2f375553d5ce",
                pic: "null",
                url: " /老歌/爱情错觉 - 王娅.mp3"
            }, {
                id: "ff73ad3464036b37feaf5d9d940fdf3f",
                name: "独角戏",
                artist: "许茹芸",
                album: "如果云知道",
                source: "kugou",
                url_id: "ff73ad3464036b37feaf5d9d940fdf3f",
                pic_id: "ff73ad3464036b37feaf5d9d940fdf3f",
                lyric_id: "ff73ad3464036b37feaf5d9d940fdf3f",
                pic: "null",
                url: " /老歌/独角戏(Live) - 许茹芸.mp3"
            }, {
                id: "cbd9a8cfaad5912915cec3fca5d3b8b9",
                name: "黄昏",
                artist: "周传雄",
                album: "transfer",
                source: "kugou",
                url_id: "cbd9a8cfaad5912915cec3fca5d3b8b9",
                pic_id: "cbd9a8cfaad5912915cec3fca5d3b8b9",
                lyric_id: "cbd9a8cfaad5912915cec3fca5d3b8b9",
                pic: "null",
                url: " /老歌/黄昏 - 周传雄.mp3"
            }
        ]
    }, {
        name: "90", // 播放列表名字
        cover: "https://singerimg.kugou.com/uploadpic/softhead/400/20260324/20260324203006202058.jpg", // 播放列表封面图像
        creatorName: " ", // 列表创建者名字(暂时没用到，可空)
        creatorAvatar: " ", // 列表创建者头像(暂时没用到，可空)
        item: [ // 这里面放歌曲
            {
                id: "76096c059b26ebaa16b482f921a07be0", // 音乐ID
                name: "晴天", // 音乐名字
                artist: "周杰伦", // 艺术家名字
                album: "叶惠美", // 专辑名字
                source: "kugou", // 音乐来源
                url_id: "76096c059b26ebaa16b482f921a07be0", // 链接ID
                pic_id: "76096c059b26ebaa16b482f921a07be0", // 封面ID
                lyric_id: "76096c059b26ebaa16b482f921a07be0", // 歌词ID
                pic: "", // 专辑图片
                url: "/90/晴天.m4a" // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            }, {
                id: "167876",
                name: "有何不可",
                artist: "许嵩",
                album: "许嵩",
                source: "netease",
                url_id: "167876",
                pic_id: "109951172899966259",
                lyric_id: "167876",
                pic: "",
                url: "/90/有何不可.m4a"
            }, {
                id: "1807891673",
                name: "死一样的痛过",
                artist: "XIKINIE",
                album: "",
                source: "netease",
                url_id: "1807891673",
                pic_id: "109951168492797397",
                lyric_id: "",
                pic: "",
                url: "/90/死一样的痛过.m4a"
            }, {
                id: "299513",
                name: "流年",
                artist: "王菲",
                album: "王菲",
                source: "netease",
                url_id: "299513",
                pic_id: "109951169790166248",
                lyric_id: "299513",
                pic: "",
                url: "/90/流年.m4a"
            }, {
                id: "f8c79adccb0d303dca03838f40c75ee6",
                name: "甜狗",
                artist: "小潘潘（潘柚彤）",
                album: "甜狗",
                source: "kugou",
                url_id: "f8c79adccb0d303dca03838f40c75ee6",
                pic_id: "f8c79adccb0d303dca03838f40c75ee6",
                lyric_id: "f8c79adccb0d303dca03838f40c75ee6",
                pic: "",
                url: "/90/甜狗.m4a"
            }, {
                id: "93b5ac720e924da9e88f332d7b853731",
                name: "留不住的风",
                artist: "小阿枫",
                album: "留不住的风",
                source: "kugou",
                url_id: "93b5ac720e924da9e88f332d7b853731",
                pic_id: "93b5ac720e924da9e88f332d7b853731",
                lyric_id: "93b5ac720e924da9e88f332d7b853731",
                pic: "",
                url: "/90/留不住的风.m4a"
            }, {
                id: "9df81c2a0a128c612a8c86c736495c20",
                name: "相思漫漫",
                artist: "魏新雨",
                album: "相思漫漫",
                source: "kugou",
                url_id: "9df81c2a0a128c612a8c86c736495c20",
                pic_id: "9df81c2a0a128c612a8c86c736495c20",
                lyric_id: "9df81c2a0a128c612a8c86c736495c20",
                pic: "",
                url: "/90/相思漫漫.m4a"
            }, {
                id: "04ffafeed8852066e7ae4865b8d5a3a8",
                name: "等你拥抱我",
                artist: "小蓝背心",
                album: "等你拥抱我",
                source: "kugou",
                url_id: "04ffafeed8852066e7ae4865b8d5a3a8",
                pic_id: "04ffafeed8852066e7ae4865b8d5a3a8",
                lyric_id: "04ffafeed8852066e7ae4865b8d5a3a8",
                pic: "",
                url: "/90/等你拥抱我.m4a"
            }, {
                id: "e174ac8d62c260c126e8087825499220",
                name: "等春色的雪",
                artist: "阿禹ayy",
                album: "等春色的雪",
                source: "kugou",
                url_id: "e174ac8d62c260c126e8087825499220",
                pic_id: "e174ac8d62c260c126e8087825499220",
                lyric_id: "e174ac8d62c260c126e8087825499220",
                pic: "",
                url: "/90/等春色的雪.m4a"
            }, {
                id: "5e72e7408ba5546a3bdf85815bf3b50d",
                name: "等着我回来",
                artist: "戴羽彤",
                album: "等着我回来",
                source: "kugou",
                url_id: "5e72e7408ba5546a3bdf85815bf3b50d",
                pic_id: "5e72e7408ba5546a3bdf85815bf3b50d",
                lyric_id: "5e72e7408ba5546a3bdf85815bf3b50d",
                pic: "",
                url: "/90/等着我回来.m4a"
            }, {
                id: "1959667345",
                name: "给你一瓶魔法药水",
                artist: "告五人",
                album: "玫瑰凭证",
                source: "netease",
                url_id: "1959667345",
                pic_id: "109951169169063268",
                lyric_id: "1959667345",
                pic: "",
                url: "/90/给你一瓶魔法药水.m4a"
            }, {
                id: "403012582",
                name: "Always",
                artist: "尹美莱",
                album: "태양의 후예 OST Part.1",
                source: "netease",
                url_id: "403012582",
                pic_id: "109951168652284160",
                lyric_id: "403012582",
                pic: "",
                url: "/90/Always.m4a"
            }, {
                id: "1698391",
                name: "Beat_It",
                artist: "Michael Jackson",
                album: "HIStory: Past, Present and Future, Book I",
                source: "netease",
                url_id: "1698391",
                pic_id: "109951165994661423",
                lyric_id: "1698391",
                pic: "",
                url: "/90/Beat_It.m4a"
            }, {
                id: "2011585688",
                name: "Gonna_Be_Alrigh",
                artist: "VIXX",
                album: "",
                source: "netease",
                url_id: "2011585688",
                pic_id: "109951173223730148",
                lyric_id: "2011585688",
                pic: "",
                url: "/90/Gonna_Be_Alrigh.m4a"
            }, {
                id: "22262561",
                name: "How Do You Do!",
                artist: "Roxette",
                album: "Tourism",
                source: "netease",
                url_id: "22262561",
                pic_id: "109951172847363969",
                lyric_id: "22262561",
                pic: "",
                url: "/90/HowDoYouDo_.m4a"
            }, {
                id: "0",
                name: "It_Is_Ok",
                artist: "Maxwell Rivera",
                album: "",
                source: "",
                url_id: "",
                pic_id: "",
                lyric_id: "",
                pic: "",
                url: "/90/It_Is_Ok.m4a"
            }, {
                id: "450041045",
                name: "Lay_Low",
                artist: "Josh Turner",
                album: "",
                source: "",
                url_id: "",
                pic_id: "",
                lyric_id: "",
                pic: "",
                url: "/90/Lay_Low.m4a"
            }, {
                id: "2008987400",
                name: "Oh_My",
                artist: "虞书欣",
                album: "Esther",
                source: "netease",
                url_id: "2008987400",
                pic_id: "109951168171119394",
                lyric_id: "2008987400",
                pic: "",
                url: "/90/Oh_My.m4a"
            }, {
                id: "28639182",
                name: "Try",
                artist: "Colbie Caillat",
                album: "",
                source: "netease",
                url_id: "28639182",
                pic_id: "109951166050067547",
                lyric_id: "28639182",
                pic: "",
                url: "/90/Try.m4a"
            }, {
                id: "1967407573",
                name: "万物起舞",
                artist: "梁倩雨",
                album: "",
                source: "netease",
                url_id: "2007326277",
                pic_id: "109951168152550954",
                lyric_id: "2007326277",
                pic: "",
                url: "/90/万物起舞.m4a"
            }, {
                id: "1404885266",
                name: "下山",
                artist: "徐泽（要不要买菜）",
                album: "",
                source: "netease",
                url_id: "1404885266",
                pic_id: "109951164499744148",
                lyric_id: "1404885266",
                pic: "",
                url: "/90/下山.m4a"
            }, {
                id: "1967771294",
                name: "不做情人",
                artist: "云汐",
                album: "",
                source: "netease",
                url_id: "1967771294",
                pic_id: "109951167725041110",
                lyric_id: "1967771294",
                pic: "",
                url: "/90/不做情人.m4a"
            }, {
                id: "0",
                name: "不经意的风",
                artist: "玖柒（小桑）",
                album: "",
                source: "netease",
                url_id: "2013481271",
                pic_id: "109951168224819485",
                lyric_id: "2013481271",
                pic: "",
                url: "/90/不经意的风.m4a"
            }, {
                id: "0",
                name: "不见孤山",
                artist: "橙翼",
                album: "",
                source: "kugou",
                url_id: "4a5ca00ee10b6b9bcf8a9db6ae634ddd",
                pic_id: "4a5ca00ee10b6b9bcf8a9db6ae634ddd",
                lyric_id: "4a5ca00ee10b6b9bcf8a9db6ae634ddd",
                pic: "",
                url: "/90/不见孤山.m4a"
            }, {
                id: "156698",
                name: "与你到永久",
                artist: "伍佰 & China Blue",
                album: "",
                source: "netease",
                url_id: "156698",
                pic_id: "109951172477524514",
                lyric_id: "156698",
                pic: "",
                url: "/90/与你到永久.m4a"
            }, {
                id: "6cbe23463a643b5de920e6db51c49d72",
                name: "与天齐",
                artist: "倪浩毅",
                album: "",
                source: "kugou",
                url_id: "6cbe23463a643b5de920e6db51c49d72",
                pic_id: "6cbe23463a643b5de920e6db51c49d72",
                lyric_id: "6cbe23463a643b5de920e6db51c49d72",
                pic: "",
                url: "/90/与天齐.m4a"
            }, {
                id: "b2a0d0283a6127d57350962564baf200",
                name: "云与海",
                artist: "阿YueYue",
                album: "",
                source: "kugou",
                url_id: "b2a0d0283a6127d57350962564baf200",
                pic_id: "b2a0d0283a6127d57350962564baf200",
                lyric_id: "b2a0d0283a6127d57350962564baf200",
                pic: "",
                url: "/90/云与海.m4a"
            }, {
                id: "05c9b451349872c078d6243f9837364d",
                name: "人世间",
                artist: "雷佳",
                album: "",
                source: "kugou",
                url_id: "05c9b451349872c078d6243f9837364d",
                pic_id: "05c9b451349872c078d6243f9837364d",
                lyric_id: "05c9b451349872c078d6243f9837364d",
                pic: "",
                url: "/90/人世间.m4a"
            }, {
                id: "1915291185",
                name: "从前说",
                artist: "小阿七",
                album: "",
                source: "netease",
                url_id: "1915291185",
                pic_id: "109951166983050895",
                lyric_id: "1915291185",
                pic: "",
                url: "/90/从前说.m4a"
            }, {
                id: "60251",
                name: "你就像个小孩",
                artist: "阿杜",
                album: "",
                source: "netease",
                url_id: "60251",
                pic_id: "109951163076917479",
                lyric_id: "60251",
                pic: "",
                url: "/90/你就像个小孩.m4a"
            }, {
                id: "2013985811",
                name: "信念演绎",
                artist: "徐艺洋（徐杨）",
                album: "",
                source: "netease",
                url_id: "2013985811",
                pic_id: "109951168229340976",
                lyric_id: "2013985811",
                pic: "",
                url: "/90/信念演绎.m4a"
            }, {
                id: "449818741",
                name: "光年之外",
                artist: "G.E.M.邓紫棋",
                album: "",
                source: "netease",
                url_id: "449818741",
                pic_id: "18587244069235039",
                lyric_id: "449818741",
                pic: "",
                url: "/90/光年之外.m4a"
            }, {
                id: "2637490612",
                name: "化蝶恋花",
                artist: "南一",
                album: "",
                source: "netease",
                url_id: "2637490612",
                pic_id: "109951170051022872",
                lyric_id: "2637490612",
                pic: "",
                url: "/90/化蝶恋花.m4a"
            }, {
                id: "163285",
                name: "午夜DJ",
                artist: "王绎龙",
                album: "",
                source: "netease",
                url_id: "163285",
                pic_id: "115448720922619",
                lyric_id: "163285",
                pic: "",
                url: "/90/午夜DJ.m4a"
            }, {
                id: "2148822016",
                name: "半岛铁盒",
                artist: "周杰伦",
                album: "",
                source: "netease",
                url_id: "2148822016",
                pic_id: "109951169525621128",
                lyric_id: "2148822016",
                pic: "",
                url: "/90/半岛铁盒.m4a"
            }, {
                id: "1877996649",
                name: "危险派对",
                artist: "王以太",
                album: "",
                source: "netease",
                url_id: "1877996649",
                pic_id: "109951170480087921",
                lyric_id: "1877996649",
                pic: "",
                url: "/90/危险派对.m4a"
            }, {
                id: "2010823851",
                name: "同心向未来",
                artist: "单依纯",
                album: "",
                source: "netease",
                url_id: "2010823851",
                pic_id: "109951168196568053",
                lyric_id: "2010823851",
                pic: "",
                url: "/90/同心向未来.m4a"
            }, {
                id: "e497b099126154e07879d7305df991d8",
                name: "后来我们的爱",
                artist: "陆杰awr",
                album: "",
                source: "kugou",
                url_id: "e497b099126154e07879d7305df991d8",
                pic_id: "e497b099126154e07879d7305df991d8",
                lyric_id: "e497b099126154e07879d7305df991d8",
                pic: "",
                url: "/90/后来我们的爱.m4a"
            }, {
                id: "d74845df9e5eb016bfc5fc86f639ca49",
                name: "听说你",
                artist: "于冬然",
                album: "",
                source: "kugou",
                url_id: "d74845df9e5eb016bfc5fc86f639ca49",
                pic_id: "d74845df9e5eb016bfc5fc86f639ca49",
                lyric_id: "d74845df9e5eb016bfc5fc86f639ca49",
                pic: "",
                url: "/90/听说你.m4a"
            }, {
                id: "69611",
                name: "哥只是个传说",
                artist: "陈旭",
                album: "",
                source: "netease",
                url_id: "69611",
                pic_id: "27487790706531",
                lyric_id: "69611",
                pic: "",
                url: "/90/哥只是个传说.m4a"
            }, {
                id: "1372552573",
                name: "圈住你",
                artist: "一口甜",
                album: "",
                source: "",
                url_id: "1372552573",
                pic_id: "109951164156398679",
                lyric_id: "1372552573",
                pic: "",
                url: "/90/圈住你.m4a"
            }, {
                id: "64392",
                name: "壮志在我胸",
                artist: "成龙",
                album: "",
                source: "netease",
                url_id: "64392",
                pic_id: "109951172002797487",
                lyric_id: "64392",
                pic: "",
                url: "/90/壮志在我胸.m4a"
            }, {
                id: "2736586911",
                name: "多年以后的你还好吗",
                artist: "安儿陈",
                album: "",
                source: "netease",
                url_id: "2736586911",
                pic_id: "109951171872686683",
                lyric_id: "2736586911",
                pic: "",
                url: "/90/多年以后的你还好吗.m4a"
            }, {
                id: "3396657990",
                name: "夜曲",
                artist: "周杰伦",
                album: "",
                source: "netease",
                url_id: "3396657990",
                pic_id: "109951173439900755",
                lyric_id: "3396657990",
                pic: "",
                url: "/90/夜曲.m4a"
            }, {
                id: "2010282457",
                name: "大雪落下来",
                artist: "皮卡丘多多(尹子桐)",
                album: "",
                source: "netease",
                url_id: "2010282457",
                pic_id: "109951168189276388",
                lyric_id: "2010282457",
                pic: "",
                url: "/90/大雪落下来.m4a"
            }, {
                id: "188647",
                name: "她来听我的演唱会",
                artist: "张学友",
                album: "",
                source: "netease",
                url_id: "188647",
                pic_id: "109951171993687237",
                lyric_id: "188647",
                pic: "",
                url: "/90/她来听我的演唱会.m4a"
            }, {
                id: "2132193789",
                name: "寂寞烟火",
                artist: "蓝心羽",
                album: "",
                source: "netease",
                url_id: "2132193789",
                pic_id: "109951169385759820",
                lyric_id: "2132193789",
                pic: "",
                url: "/90/寂寞烟火.m4a"
            }, {
                id: "2012396157",
                name: "对流",
                artist: "金志文",
                album: "",
                source: "netease",
                url_id: "2012396157",
                pic_id: "109951168213253893",
                lyric_id: "2012396157",
                pic: "",
                url: "/90/对流.m4a"
            }, {
                id: "2127549c3c5a2cfc2c45e4a21cf6b3d0",
                name: "寻屿",
                artist: "阿YueYue",
                album: "",
                source: "kugou",
                url_id: "2127549c3c5a2cfc2c45e4a21cf6b3d0",
                pic_id: "2127549c3c5a2cfc2c45e4a21cf6b3d0",
                lyric_id: "2127549c3c5a2cfc2c45e4a21cf6b3d0",
                pic: "",
                url: "/90/寻屿.m4a"
            }, {
                id: "66823",
                name: "岁月如歌",
                artist: "陈奕迅",
                album: "",
                source: "netease",
                url_id: "66823",
                pic_id: "18956679974612526",
                lyric_id: "66823",
                pic: "",
                url: "/90/岁月如歌.m4a"
            }, {
                id: "1410647903",
                name: "带我去找夜生活",
                artist: "告五人",
                album: "",
                source: "netease",
                url_id: "1410647903",
                pic_id: "109951164567402626",
                lyric_id: "1410647903",
                pic: "",
                url: "/90/带我去找夜生活.m4a"
            }, {
                id: "492c538adcd18eabc70927b43ee57adf",
                name: "待雪",
                artist: "pro",
                album: "",
                source: "kugou",
                url_id: "492c538adcd18eabc70927b43ee57adf",
                pic_id: "492c538adcd18eabc70927b43ee57adf",
                lyric_id: "492c538adcd18eabc70927b43ee57adf",
                pic: "",
                url: "/90/待雪.m4a"
            }, {
                id: "ad3743dc62672f8a294c7000c0c21ee3",
                name: "思念是一片海",
                artist: "穆哲熙",
                album: "",
                source: "kugou",
                url_id: "ad3743dc62672f8a294c7000c0c21ee3",
                pic_id: "ad3743dc62672f8a294c7000c0c21ee3",
                lyric_id: "ad3743dc62672f8a294c7000c0c21ee3",
                pic: "",
                url: "/90/思念是一片海.m4a"
            }, {
                id: "176999",
                name: "情非得已",
                artist: "庾澄庆",
                album: "",
                source: "netease",
                url_id: "176999",
                pic_id: "109951169040243386",
                lyric_id: "176999",
                pic: "",
                url: "/90/情非得已.m4a"
            }, {
                id: "2628258266",
                name: "慢慢习惯",
                artist: "小桉Crazy",
                album: "",
                source: "netease",
                url_id: "2628258266",
                pic_id: "109951169970824812",
                lyric_id: "2628258266",
                pic: "",
                url: "/90/慢慢习惯.m4a"
            }, {
                id: "0",
                name: "我们的爱",
                artist: "",
                album: "",
                source: "",
                url_id: "",
                pic_id: "",
                lyric_id: "",
                pic: "",
                url: "/90/我们的爱.m4a"
            }, {
                id: "354593",
                name: "我喜欢你",
                artist: "F.I.R",
                album: "",
                source: "netease",
                url_id: "354593",
                pic_id: "109951167320242838",
                lyric_id: "354593",
                pic: "",
                url: "/90/我喜欢你.m4a"
            }, {
                id: "5244822",
                name: "我愿意",
                artist: "王菲",
                album: "",
                source: "netease",
                url_id: "5244822",
                pic_id: "109951163592976362",
                lyric_id: "5244822",
                pic: "",
                url: "/90/我愿意.m4a"
            }, {
                id: "78ab5e9f036966f019b9d7a3522418b8",
                name: "我的一切无人问起",
                artist: "陈雅森",
                album: "",
                source: "kugou",
                url_id: "78ab5e9f036966f019b9d7a3522418b8",
                pic_id: "78ab5e9f036966f019b9d7a3522418b8",
                lyric_id: "78ab5e9f036966f019b9d7a3522418b8",
                pic: "",
                url: "/90/我的一切无人问起.m4a"
            }, {
                id: "34a80bc48c7263c614e11b378f23a23d",
                name: "我的眼泪你的战利品",
                artist: "于冬然",
                album: "",
                source: "kugou",
                url_id: "34a80bc48c7263c614e11b378f23a23d",
                pic_id: "34a80bc48c7263c614e11b378f23a23d",
                lyric_id: "34a80bc48c7263c614e11b378f23a23d",
                pic: "",
                url: "/90/我的眼泪你的战利品.m4a"
            }, {
                id: "b88485ea90ed1ed42e65f9eaa3391764",
                name: "摇篮谣",
                artist: "斯斯与帆",
                album: "",
                source: "kugou",
                url_id: "b88485ea90ed1ed42e65f9eaa3391764",
                pic_id: "b88485ea90ed1ed42e65f9eaa3391764",
                lyric_id: "b88485ea90ed1ed42e65f9eaa3391764",
                pic: "",
                url: "/90/摇篮谣.m4a"
            }, {
                id: "f3288bc3dfeffdbf432d5562566f628e",
                name: "早安隆回",
                artist: "袁树雄",
                album: "",
                source: "kugou",
                url_id: "f3288bc3dfeffdbf432d5562566f628e",
                pic_id: "f3288bc3dfeffdbf432d5562566f628e",
                lyric_id: "f3288bc3dfeffdbf432d5562566f628e",
                pic: "",
                url: "/90/早安隆回.m4a"
            }, {
                id: "978b0165ccab743fa02f21f96955194f",
                name: "星火不燎原",
                artist: "郭昕雨芮",
                album: "",
                source: "kugou",
                url_id: "978b0165ccab743fa02f21f96955194f",
                pic_id: "978b0165ccab743fa02f21f96955194f",
                lyric_id: "978b0165ccab743fa02f21f96955194f",
                pic: "",
                url: "/90/星火不燎原.m4a"
            }, {
                id: "2012451003",
                name: "鲸与风",
                artist: "李斯丹妮",
                album: "",
                source: "netease",
                url_id: "2012451003",
                pic_id: "109951168213933838",
                lyric_id: "2012451003",
                pic: "",
                url: "/90/鲸与风.m4a"
            }
        ]
    }, {
        name: "非主流时代", // 播放列表名字
        cover: "https://p2.music.126.net/j2a6HL6hMKwamDQmIVgCwg==/109951162933404679.jpg?param=300y300", // 播放列表封面图像
        creatorName: " ", // 列表创建者名字(暂时没用到，可空)
        creatorAvatar: " ", // 列表创建者头像(暂时没用到，可空)
        item: [{
                id: "26503707",
                name: "7년간의 사랑",
                artist: "金贤政",
                album: "",
                source: "netease",
                url_id: "26503707",
                pic_id: "6644348766761626",
                lyric_id: "26503707",
                pic: "",
                url: "/fzl/7년간의 사랑 - 金贤政.mp3"
            }, {
                id: "1217823",
                name: "Be What You Wanna Be",
                artist: "Darin",
                album: "",
                source: "netease",
                url_id: "1217823",
                pic_id: "109951165994365993",
                lyric_id: "1217823",
                pic: "",
                url: "/fzl/Be What You Wanna Be - Darin.mp3"
            }, {
                id: "542672671",
                name: "i miss you",
                artist: "青春美少女、罗百吉",
                album: "",
                source: "netease",
                url_id: "542672671",
                pic_id: "109951162933404679",
                lyric_id: "542672671",
                pic: "",
                url: "/fzl/i miss you - 青春美少女、罗百吉.mp3"
            }, {
                id: "21274655",
                name: "Lonely",
                artist: "Nana",
                album: "",
                source: "netease",
                url_id: "21274655",
                pic_id: "778454232476457",
                lyric_id: "21274655",
                pic: "",
                url: "/fzl/Lonely - Nana.mp3"
            }, {
                id: "26598816",
                name: "เจอกับตัวเอง...ถึงรู้",
                artist: "Nusara",
                album: "",
                source: "netease",
                url_id: "26598816",
                pic_id: "1365593465697993",
                lyric_id: "26598816",
                pic: "",
                url: "/fzl/เจอกับตัวเอง...ถึงรู้ - Sara Nusara Poongprasert"
            }, {
                id: "33579324",
                name: "一个深爱的女孩",
                artist: "本兮",
                album: "",
                source: "netease",
                url_id: "33579324",
                pic_id: "109951166361218466",
                lyric_id: "33579324",
                pic: "",
                url: "/fzl/一个深爱的女孩 - 本兮.mp3"
            }, {
                id: "26145112",
                name: "七秒钟的记忆",
                artist: "徐良、孙羽幽",
                album: "",
                source: "netease",
                url_id: "26145112",
                pic_id: "109951172050975516",
                lyric_id: "26145112",
                pic: "",
                url: "/fzl/七秒钟的记忆 - 徐良、孙羽幽.mp3"
            }, {
                id: "306138",
                name: "三妻四妾",
                artist: "王媛渊",
                album: "",
                source: "netease",
                url_id: "306138",
                pic_id: "39582418616721",
                lyric_id: "306138",
                pic: "",
                url: "/fzl/三妻四妾 - 王媛渊.mp3"
            }, {
                id: "366577",
                name: "不值得",
                artist: "梦飞船",
                album: "",
                source: "netease",
                url_id: "366577",
                pic_id: "109951169019415217",
                lyric_id: "366577",
                pic: "",
                url: "/fzl/不值得 - 梦飞船.mp3"
            }, {
                id: "33941112",
                name: "不再联系",
                artist: "夏天Alex",
                album: "",
                source: "netease",
                url_id: "33941112",
                pic_id: "2049489674204150",
                lyric_id: "33941112",
                pic: "",
                url: "/fzl/不再联系 - 夏天Alex.mp3"
            }, {
                id: "165361",
                name: "不分手的恋爱",
                artist: "汪苏泷",
                album: "",
                source: "netease",
                url_id: "165361",
                pic_id: "18537766044710327",
                lyric_id: "165361",
                pic: "",
                url: "/fzl/不分手的恋爱 - 汪苏泷.mp3"
            }, {
                id: "139764",
                name: "不得不爱",
                artist: "潘玮柏、弦子",
                album: "",
                source: "netease",
                url_id: "139764",
                pic_id: "109951169280802195",
                lyric_id: "139764",
                pic: "",
                url: "/fzl/不得不爱 - 潘玮柏、弦子.mp3"
            }, {
                id: "1482674779",
                name: "不见",
                artist: "诗藏旧梦深",
                album: "",
                source: "netease",
                url_id: "1482674779",
                pic_id: "109951165348042408",
                lyric_id: "1482674779",
                pic: "",
                url: "/fzl/不见 - 诗藏旧梦深.mp3"
            }, {
                id: "2726674828",
                name: "会呼吸的鸭嘴兽",
                artist: "麦乐迪小子、元",
                album: "",
                source: "netease",
                url_id: "2726674828",
                pic_id: "109951171473382720",
                lyric_id: "2726674828",
                pic: "",
                url: "/fzl/会呼吸的鸭嘴兽 - 麦乐迪小子、元.mp3"
            }, {
                id: "94284",
                name: "你怎么舍得我难过",
                artist: "黄品源",
                album: "",
                source: "netease",
                url_id: "94284",
                pic_id: "109951163025044992",
                lyric_id: "94284",
                pic: "",
                url: "/fzl/你怎么舍得我难过 - 黄品源.mp3"
            }, {
                id: "167929",
                name: "你若成风",
                artist: "许嵩、莫诗旎",
                album: "",
                source: "netease",
                url_id: "167929",
                pic_id: "109951172188951978",
                lyric_id: "167929",
                pic: "",
                url: "/fzl/你若成风 - 许嵩、莫诗旎.mp3"
            }, {
                id: "254485",
                name: "勇气",
                artist: "梁静茹",
                album: "",
                source: "netease",
                url_id: "254485",
                pic_id: "109951163240604120",
                lyric_id: "254485",
                pic: "",
                url: "/fzl/勇气 - 梁静茹.mp3"
            }, {
                id: "1899407948",
                name: "北极星的眼泪",
                artist: "张栋梁",
                album: "",
                source: "netease",
                url_id: "1899407948",
                pic_id: "109951168142512570",
                lyric_id: "1899407948",
                pic: "",
                url: "/fzl/北极星的眼泪 - 张栋梁.mp3"
            }, {
                id: "167744",
                name: "半城烟沙",
                artist: "许嵩",
                album: "",
                source: "netease",
                url_id: "167744",
                pic_id: "109951166118678136",
                lyric_id: "167744",
                pic: "",
                url: "/fzl/半城烟沙 - 许嵩.mp3"
            }, {
                id: "174944",
                name: "后会无期 (Remix)",
                artist: "汪苏泷、徐良",
                album: "",
                source: "netease",
                url_id: "174944",
                pic_id: "109951172050962571",
                lyric_id: "174944",
                pic: "",
                url: "/fzl/后会无期 (Remix) - 汪苏泷、徐良.mp3"
            }, {
                id: "174944",
                name: "后会无期",
                artist: "徐良、汪苏泷",
                album: "",
                source: "netease",
                url_id: "174944",
                pic_id: "109951172050962571",
                lyric_id: "174944",
                pic: "",
                url: "/fzl/后会无期 - 徐良、汪苏泷.mp3"
            }, {
                id: "5249178",
                name: "吻得太逼真",
                artist: "张敬轩",
                album: "",
                source: "netease",
                url_id: "5249178",
                pic_id: "109951163368468453",
                lyric_id: "5249178",
                pic: "",
                url: "/fzl/吻得太逼真 - 张敬轩.mp3"
            }, {
                id: "174962",
                name: "和平分手",
                artist: "徐良、Britneylee小暖",
                album: "",
                source: "netease",
                url_id: "174962",
                pic_id: "28587302323242",
                lyric_id: "174962",
                pic: "",
                url: "/fzl/和平分手 - 徐良、Britneylee小暖.mp3"
            }, {
                id: "69611",
                name: "哥 只是个传说",
                artist: "陈旭",
                album: "",
                source: "netease",
                url_id: "69611",
                pic_id: "27487790706531",
                lyric_id: "69611",
                pic: "",
                url: "/fzl/哥 只是个传说 - 陈旭.mp3"
            }, {
                id: "174956",
                name: "坏女孩",
                artist: "徐良、小凌",
                album: "",
                source: "netease",
                url_id: "174956",
                pic_id: "109951172050962571",
                lyric_id: "174956",
                pic: "",
                url: "/fzl/坏女孩 - 徐良、小凌.mp3"
            }, {
                id: "165380",
                name: "埋葬冬天",
                artist: "汪苏泷、阿悄",
                album: "",
                source: "netease",
                url_id: "165380",
                pic_id: "109951165348042408",
                lyric_id: "165380",
                pic: "",
                url: "/fzl/埋葬冬天 - 汪苏泷、阿悄.mp3"
            }, {
                id: "369173",
                name: "外滩十八号",
                artist: "男才女貌",
                album: "",
                source: "netease",
                url_id: "369173",
                pic_id: "54975581401145",
                lyric_id: "369173",
                pic: "",
                url: "/fzl/外滩十八号 - 男才女貌.mp3"
            }, {
                id: "167873",
                name: "多余的解释",
                artist: "许嵩",
                album: "",
                source: "netease",
                url_id: "167873",
                pic_id: "109951172899966259",
                lyric_id: "167873",
                pic: "",
                url: "/fzl/多余的解释 - 许嵩.mp3"
            }, {
                id: "60102",
                name: "天使的翅膀",
                artist: "安琥",
                album: "",
                source: "netease",
                url_id: "60102",
                pic_id: "109951166562831996",
                lyric_id: "60102",
                pic: "",
                url: "/fzl/天使的翅膀 - 安琥.mp3"
            }, {
                id: "2716892264",
                name: "如果很痛那就放手吧",
                artist: "44Luv.、Miya、48000hz",
                album: "",
                source: "netease",
                url_id: "2716892264",
                pic_id: "109951171327968496",
                lyric_id: "2716892264",
                pic: "",
                url: "/fzl/如果很痛那就放手吧 - 44Luv.、Miya、48000hz.mp3"
            }, {
                id: "174963",
                name: "客官不可以",
                artist: "徐良、小凌",
                album: "",
                source: "netease",
                url_id: "174963",
                pic_id: "28587302323242",
                lyric_id: "174963",
                pic: "",
                url: "/fzl/客官不可以 - 徐良、小凌.mp3"
            }, {
                id: "165379",
                name: "小星星",
                artist: "汪苏泷",
                album: "",
                source: "netease",
                url_id: "165379",
                pic_id: "109951172128596445",
                lyric_id: "165379",
                pic: "",
                url: "/fzl/小星星 - 汪苏泷.mp3"
            }, {
                id: "32897777",
                name: "年轮",
                artist: "汪苏泷",
                album: "",
                source: "netease",
                url_id: "32897777",
                pic_id: "2899412164997218",
                lyric_id: "32897777",
                pic: "",
                url: "/fzl/年轮 - 汪苏泷.mp3"
            }, {
                id: "191660",
                name: "当你孤单你会想起谁",
                artist: "张栋梁",
                album: "",
                source: "netease",
                url_id: "191660",
                pic_id: "19110611602668709",
                lyric_id: "191660",
                pic: "",
                url: "/fzl/当你孤单你会想起谁 - 张栋梁.mp3"
            }, {
                id: "2055215325",
                name: "怎么会",
                artist: "YKEY",
                album: "",
                source: "netease",
                url_id: "2055215325",
                pic_id: "109951168675543929",
                lyric_id: "2055215325",
                pic: "",
                url: "/fzl/怎么会 - YKEY.mp3"
            }, {
                id: "0",
                name: "我们的纪念",
                artist: "李雅微",
                album: "",
                source: "netease",
                url_id: "37853789",
                pic_id: "3298534889073761",
                lyric_id: "37853789",
                pic: "",
                url: "/fzl/我们的纪念 - 李雅微.mp3"
            }, {
                id: "297587",
                name: "我们都是好孩子",
                artist: "王筝",
                album: "",
                source: "netease",
                url_id: "297587",
                pic_id: "73667279078627",
                lyric_id: "297587",
                pic: "",
                url: "/fzl/我们都是好孩子 - 王筝.mp3"
            }, {
                id: "27646693",
                name: "断桥残雪",
                artist: "许嵩",
                album: "",
                source: "netease",
                url_id: "27646693",
                pic_id: "109951172188951978",
                lyric_id: "27646693",
                pic: "",
                url: "/fzl/断桥残雪 - 许嵩.mp3"
            }, {
                id: "209643",
                name: "日不落",
                artist: "蔡依林",
                album: "",
                source: "netease",
                url_id: "209643",
                pic_id: "109951163200168756",
                lyric_id: "209643",
                pic: "",
                url: "/fzl/日不落 - 蔡依林.mp3"
            }, {
                id: "419827614",
                name: "月光",
                artist: "徐良、阿悄",
                album: "",
                source: "netease",
                url_id: "419827614",
                pic_id: "109951164016069144",
                lyric_id: "419827614",
                pic: "",
                url: "/fzl/月光 - 徐良、阿悄.mp3"
            }, {
                id: "60394",
                name: "有一种爱叫做放手",
                artist: "阿木",
                album: "",
                source: "netease",
                url_id: "60394",
                pic_id: "109951163067908206",
                lyric_id: "60394",
                pic: "",
                url: "/fzl/有一种爱叫做放手 - 阿木.mp3"
            }, {
                id: "167876",
                name: "有何不可",
                artist: "许嵩",
                album: "",
                source: "netease",
                url_id: "167876",
                pic_id: "109951172899966259",
                lyric_id: "167876",
                pic: "",
                url: "/fzl/有何不可 - 许嵩.mp3"
            }, {
                id: "66525",
                name: "有没有人告诉你",
                artist: "陈楚生",
                album: "",
                source: "netease",
                url_id: "66525",
                pic_id: "53876069773370",
                lyric_id: "66525",
                pic: "",
                url: "/fzl/有没有人告诉你 - 陈楚生.mp3"
            }, {
                id: "165340",
                name: "有点甜",
                artist: "汪苏泷、By2",
                album: "",
                source: "netease",
                url_id: "165340",
                pic_id: "109951164176658680",
                lyric_id: "165340",
                pic: "",
                url: "/fzl/有点甜 - 汪苏泷、By2.mp3"
            }, {
                id: "394748",
                name: "棉花糖",
                artist: "至上励合",
                album: "",
                source: "netease",
                url_id: "394748",
                pic_id: "109951163077752483",
                lyric_id: "394748",
                pic: "",
                url: "/fzl/棉花糖 - 至上励合.mp3"
            }, {
                id: "1807891673",
                name: "死一样的痛过（XIKINIE BOOTLEG）",
                artist: "XIKINIE",
                album: "",
                source: "netease",
                url_id: "1807891673",
                pic_id: "109951168492797397",
                lyric_id: "1807891673",
                pic: "",
                url: "/fzl/死一样的痛过（XIKINIE BOOTLEG） - XIKINIE.mp3"
            }, {
                id: "167844",
                name: "灰色头像",
                artist: "许嵩",
                album: "",
                source: "netease",
                url_id: "167844",
                pic_id: "109951172202579057",
                lyric_id: "167844",
                pic: "",
                url: "/fzl/灰色头像 - 许嵩.mp3"
            }, {
                id: "2715088071",
                name: "爱上瘾",
                artist: "Ausxlll海川、冰加一、玻璃心",
                album: "",
                source: "netease",
                url_id: "2715088071",
                pic_id: "109951171301340531",
                lyric_id: "2715088071",
                pic: "",
                url: "/fzl/爱上瘾 - Ausxlll海川、冰加一、玻璃心.mp3"
            }, {
                id: "163635",
                name: "爱我就跟我走",
                artist: "王鹤铮",
                album: "",
                source: "netease",
                url_id: "163635",
                pic_id: "131941395351050",
                lyric_id: "163635",
                pic: "",
                url: "/fzl/爱我就跟我走 - 王鹤铮.mp3"
            }, {
                id: "174960",
                name: "犯贱",
                artist: "徐良、阿悄",
                album: "",
                source: "netease",
                url_id: "174960",
                pic_id: "28587302323242",
                lyric_id: "174960",
                pic: "",
                url: "/fzl/犯贱 - 徐良、阿悄.mp3"
            }, {
                id: "27646687",
                name: "玫瑰花的葬礼",
                artist: "许嵩",
                album: "",
                source: "netease",
                url_id: "27646687",
                pic_id: "109951172188951978",
                lyric_id: "27646687",
                pic: "",
                url: "/fzl/玫瑰花的葬礼 - 许嵩.mp3"
            }, {
                id: "26599019",
                name: "秋天不回来",
                artist: "王强",
                album: "",
                source: "netease",
                url_id: "26599019",
                pic_id: "109951163288670556",
                lyric_id: "26599019",
                pic: "",
                url: "/fzl/秋天不回来 - 王强.mp3"
            }, {
                id: "167827",
                name: "素颜",
                artist: "许嵩、何曼婷",
                album: "",
                source: "netease",
                url_id: "167827",
                pic_id: "109951169829246225",
                lyric_id: "167827",
                pic: "",
                url: "/fzl/素颜 - 许嵩、何曼婷.mp3"
            }, {
                id: "174961",
                name: "红装",
                artist: "徐良、阿悄",
                album: "",
                source: "netease",
                url_id: "174961",
                pic_id: "28587302323242",
                lyric_id: "174961",
                pic: "",
                url: "/fzl/红装 - 徐良、阿悄.mp3"
            }, {
                id: "2724465845",
                name: "要我怎么想",
                artist: "陈奕楠",
                album: "",
                source: "netease",
                url_id: "2724465845",
                pic_id: "109951171439406741",
                lyric_id: "2724465845",
                pic: "",
                url: "/fzl/要我怎么想 - 陈奕楠.mp3"
            }, {
                id: "2725649828",
                name: "讨借口",
                artist: " 苏效音",
                album: "",
                source: "netease",
                url_id: "2725649828",
                pic_id: "109951171439406741",
                lyric_id: "2725649828",
                pic: "",
                url: "/fzl/讨借口 - 苏效音.mp3"
            }, {
                id: "135394",
                name: "该死的温柔",
                artist: "马天宇",
                album: "",
                source: "netease",
                url_id: "135394",
                pic_id: "109951167482694502",
                lyric_id: "135394",
                pic: "",
                url: "/fzl/该死的温柔 - 马天宇.mp3"
            }, {
                id: "2661929568",
                name: "说永远太遥远",
                artist: "诗藏旧梦深",
                album: "",
                source: "netease",
                url_id: "2661929568",
                pic_id: "109951170337361619",
                lyric_id: "2661929568",
                pic: "",
                url: "/fzl/说永远太遥远 - 诗藏旧梦深.mp3"
            }, {
                id: "314773",
                name: "贝多芬的悲伤",
                artist: "萧风",
                album: "",
                source: "netease",
                url_id: "314773",
                pic_id: "104453604654317",
                lyric_id: "314773",
                pic: "",
                url: "/fzl/贝多芬的悲伤 - 萧风.mp3"
            }, {
                id: "2644504495",
                name: "还没有听到",
                artist: "诗藏旧梦深",
                album: "",
                source: "netease",
                url_id: "2644504495",
                pic_id: "109951170132294979",
                lyric_id: "2644504495",
                pic: "",
                url: "/fzl/还没有听到 - 诗藏旧梦深.mp3"
            }, {
                id: "353066",
                name: "迷人的危险",
                artist: "Flow",
                album: "",
                source: "netease",
                url_id: "353066",
                pic_id: "109951172341273360",
                lyric_id: "353066",
                pic: "",
                url: "/fzl/迷人的危险 - Dance Flow.mp3"
            }, {
                id: "1890724195",
                name: "遥不可及",
                artist: "何雨溪",
                album: "",
                source: "netease",
                url_id: "1890724195",
                pic_id: "109951166567254649",
                lyric_id: "1890724195",
                pic: "",
                url: "/fzl/遥不可及 - 何雨溪.mp3"
            }, {
                id: "92939",
                name: "那女孩对我说",
                artist: "黄义达",
                album: "",
                source: "netease",
                url_id: "92939",
                pic_id: "109951167283458273",
                lyric_id: "92939",
                pic: "",
                url: "/fzl/那女孩对我说 - 黄义达.mp3"
            }, {
                id: "1816107082",
                name: "闹够了没有",
                artist: "孙灵乔",
                album: "",
                source: "netease",
                url_id: "1816107082",
                pic_id: "109951167629202216",
                lyric_id: "1816107082",
                pic: "",
                url: "/fzl/闹够了没有 - 孙灵乔.mp3"
            }, {
                id: "411214279",
                name: "雅俗共赏",
                artist: "许嵩",
                album: "",
                source: "netease",
                url_id: "411214279",
                pic_id: "3431575794705764",
                lyric_id: "411214279",
                pic: "",
                url: "/fzl/雅俗共赏 - 许嵩.mp3"
            }, {
                id: "2079378195",
                name: "非主流",
                artist: "康熙、MISTERK",
                album: "",
                source: "netease",
                url_id: "2079378195",
                pic_id: "109951168892771427",
                lyric_id: "2079378195",
                pic: "",
                url: "/fzl/非主流 - 康熙、MISTERK.mp3"
            }, {
                id: "165347",
                name: "风度",
                artist: "汪苏泷",
                album: "",
                source: "netease",
                url_id: "165347",
                pic_id: "109951164176658680",
                lyric_id: "165347",
                pic: "",
                url: "/fzl/风度 - 汪苏泷.mp3"
            }, {
                id: "5376679",
                name: "불꽃",
                artist: "코요태(KYT)",
                album: "",
                source: "netease",
                url_id: "5376679",
                pic_id: "109951171367220068",
                lyric_id: "5376679",
                pic: "",
                url: "/fzl/불꽃 - 코요태(KYT).mp3"
            }, {
                id: "2060301521",
                name: "운명",
                artist: "Why",
                album: "",
                source: "netease",
                url_id: "2060301521",
                pic_id: "109951168709603549",
                lyric_id: "2060301521",
                pic: "",
                url: "/fzl/운명 - Why.mp3"
            }, {
                id: "5400327",
                name: "죽을 만큼 아파서",
                artist: "MC 몽、Mellow",
                album: "",
                source: "netease",
                url_id: "5400327",
                pic_id: "109951170230338269",
                lyric_id: "5400327",
                pic: "",
                url: "/fzl/죽을 만큼 아파서 - MC 몽、Mellow.mp3"
            }
        ] // 列表中最后一首歌大括号后面不要加逗号]
    },
    
    // 方式二：直接提供网易云歌单ID
    {
        id: 8246775932 //实时热度榜
    }, {
        id: 6723173524 // 网络热歌榜
    }, {
        id: 9224510341 //重回非主流时代热歌
    }, {
        id: 9098534619 //当年火遍大街小巷‖90后青春非主流回忆杀
    }, {
        id: 8218650747 //非主流 | 90后网络歌曲回忆杀 合集
    }, {
        id: 21845217 //KTV唛榜
    }, {
        id: 3061593465 //深度睡眠专用音乐
    }, {
        id: 2829733864 //睡眠伴侣
    }, {
        id: 26467411 //那些你熟悉却又不知道名字的轻音乐
    }, {
        id: 8113289667 //分手快乐
    }, {
        id: 7725920397 //徒步必听
    }, {
        id: 6732051320 //俄语榜
    }, {
        id: 2653868848 //【德语】莱茵河畔之风拂过心田
    }, {
        id: 7489682204 //BPM 160 | 节奏有点猛 注意安全哦！
    }
    // 播放列表的最后一项大括号后面不要加逗号
];