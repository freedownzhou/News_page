var search=location.search;
if (search.substring(6)==1){
    a=1;
} else if (search.substring(6)==2) {
    a=2;
}else if (search.substring(6)==3) {
    a=3;
}else if (search.substring(6)==4) {
    a=4;
}
var ss=[{title:4,text1:"中菲区块链技术应用与创新高峰论坛",
    text2:"2019-1-19 13:22",
    text3:"中菲两国的文化源远流长，随着习主席今年11月对菲律宾首府马尼拉的国事访问，两国的友谊更是如繁花盛开。2019年1月19日，在中国长沙多部位及菲律宾卡加延经济特区的支持下，由妙链科技携手湘链汇一同主办的“中菲区块链技术应用与创新高峰论坛” 圆满结束。",
    img1:"http://miaolian-webapp.oss-cn-beijing.aliyuncs.com/images/news/news4.png",
    text4:"全体合影",
    text5:"此次高峰论坛将聚集中菲两国在区块链领域的技术发展与应用新现状；详谈一年多来两国对于区块链领域的关注支持与未来趋势，分享区块链行业人物背后的故事点滴，探讨大环境下区块链技术所能带来的颠覆与革新。"
},{title:3,text1:"重新定义未来 | 妙链CEO钟新兵受邀于2019年全球区块链产业年鉴",
    text2:"2018-12-5 15:22",
    text3:"自2008年比特币诞生以来，区块链技术得到了全球各个国家的关注和重视，很多国家都把区块链发展作为国家战略参与全球竞争。2016年10月，中华人民共和国工业和信息化部发布了《中国区块链技术和应用发展白皮书（2016）》，区块链首次被确定为战略性前沿技术，被写入到2016年12月中华人民共和国国务院发布的《国务院关于印发“十三五”国家信息化规划的通知》。规划明确提出需加强区块链等新技术的创新、试验和应用，以实现抢占新一代信息技术主导权。",
    img1:"http://miaolian-webapp.oss-cn-beijing.aliyuncs.com/images/news/news.png",
    text4:"妙链信息科技CEO钟新兵发言",
    text5:"2018年12月6日，由自链学院、梧桐智库主办的《2019全球区块链产业年鉴》新闻发布会在长沙圆满举行。湖南区块链中投董事长刘佛灵；梧桐智库创新人才研究院院长、《创见未来》作者唐誉泽；自链学院创始人简金秋；湖南妙链信息科技CEO钟新兵；湘链技术社区创始人唐斌奇；绿电能源区块链CEO付健；区块链学堂创始人刘俊文等众多区块链行业专家、学者、企业家出席了此次发布会，并纷纷为《2019全球区块链产业年鉴》发声代言。",
    text6:"2019全球区块链产业年鉴》以构建良好的产业生态，推动区块链产业健康发展为核心，邀请包括政府领导、行业专家学者等在内，共同把脉中国区块链技术创新和产业发展，凝聚多方共识，打造了一个全球区块链产业发展、交流、合作的重要平台，探讨创新时期运用区块链技术赋能实体经济，解决行业痛点的变革之道。",
    text7:"年鉴的出版将会为区块链产业的健康发展做出重要贡献，同时也让区块链爱好者、从业者一起见证了区块链产业的培育与崛起。并凝聚产业力量，打造区块链共识联盟，加强知识普及和宣传，引导社会各界正确应用区块链、使用区块链。也为全球区块链产业营造健康的发展环境，为各地政府在加强区块链核心技术能力建设、推动区块链相关产业研究、技术研发和应用推广等工作方面提供了相当完善的数据支撑和帮助。"

},{title:2,text1:"与ETC官方达成合作协议",
    text2:"2018-11-23 13:22",
    text3:"ETC（以太经典）亚太区运营总监胥康团队到访指导湖南ETC社区落地运营，此次ETC亚太社区成员相聚主要就ETC国内生态建设重点布局展开议题。",
    img1:"http://miaolian-webapp.oss-cn-beijing.aliyuncs.com/images/news/news2.png",
    text4:"与ETC亚太区运营总监胥康合影"
},{title:1,text1:"妙链科技CEO钟新兵与CEC版权交易链首席战略顾问谢智勇达成深度战略合作",
    text2:"2018-10-19 13:22",
    text3:"妙链科技与Vboom达成技术支持与市场战略合作。Vboom是全球首款区块链视频DApp，是首个基于CEC版权交易链的DApp应用。妙链科技将助力Vboom的愿景是打造一个开放的视频内容发布、观看、互动分发的视频生态，让每一个视频内容都能够实现全球零成本同步发行。",
    img1:"http://miaolian-webapp.oss-cn-beijing.aliyuncs.com/images/news/news3.png",
    text4:"妙链信息科技CEO钟新兵与CEC版权交易链首席战略顾问谢智勇"
}]
function getNameBytitle(title) {
    for (var i = 0; i < ss.length; i++)
        if (ss[i].title == title){
            // console.log(ss[i].text1)
//      	    $("p").append("Some appended text.");
            $(".text1").append(ss[i].text1);
            $(".text2").append(ss[i].text2);
            $(".text3").append(ss[i].text3);
            $(".img1").attr('src', ss[i].img1);
            $(".text4").append(ss[i].text4);
            $(".text5").append(ss[i].text5);
            $(".text6").append(ss[i].text6);
            $(".text7").append(ss[i].text7);
            return ss[i].text;
        };

}
getNameBytitle(a);
