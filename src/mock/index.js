const Mock = require('mockjs');
//格式： Mock.mock( url, post/get , 返回的数据)；  下面的userInfo是指mock目录下的json目录下的userInfo.json文件
Mock.mock('/get/marketnavi2c', 'get', require('../../static/MarketNavi/2c.json'));
Mock.mock('/get/marketproductrecommend2c', 'get', require('../../static/MarketProductRecommend2C/items.json'));
Mock.mock(RegExp('/get/market2cdetail'+ ".*"), 'get', require('../../static/MarketProductRecommend2C/detail.json'));
Mock.mock('/get/marketnavi2b', 'get', require('../../static/MarketNavi/2b.json'));
Mock.mock('/get/market2bservices', 'get', require('../../static/Market2BServices/data.json'));
Mock.mock('/get/marketproductrecommend2b', 'get', require('../../static/MarketProductRecommend2B/items.json'));
Mock.mock('/get/culturalcreative', 'get', require('../../static/CulturalCreative/data.json'));