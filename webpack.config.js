var path = require("path");

module.exports = {

	/**
	 * 要打包的文件
	 */
	entry: 
	{
		'src/index/js/index': './src/index/js/index.js',
		'src/login/js/login': './src/login/js/login.js'
	},
	

	/**
	 * 导出
	 */
	output: 
	{
		path    : path.join(__dirname, './'),
		filename: '[name].min.js'
	},
	
	
//	/**
//	 * 排除打包,
//	 * require(jquery)将指向window.$
//	 * <script src="/libs/jquery.js"></script>需要在之前加载jquery
//	 */
	externals: 
	{
      	'jquery':'window.$'
    }
}