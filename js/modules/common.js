/*
	Скрипты, необходимые на каждой странице.
*/


/* заглушка для консоли */
if (typeof(console) == "undefined")
{
	console = {};
	console.log = console.error = console.warn = function(){};
}

console.log("loaded: common.js");





$(function()
{




	/* старикам здесь не место */
	(function RejectUnsupportedBrowsers()
	{
		yepnope({
			load: [window.ROOT + "js/modules/jquery.reject.min.js",
				   window.ROOT + "css/modules/jquery.reject.css"],
			complete: function()
			{
				$.reject(
				{
					
					imagePath: window.ROOT + "img/jreject/",
					header: "Знаете ли Вы, что используете устаревший браузер?",
					paragraph1: "Он может некорректно отображать страницы и содержать уязвимости.",
					paragraph2: "Рекомендуется установить один из современных браузеров:",
					closeLink: "Закрыть",
					closeMessage: "Вы можете продолжить просмотр, но работоспособность сайта не гарантируется.",
					closeCookie: true,
					display: ['firefox','chrome','opera','safari','msie'],
					browserInfo:
					{
						msie: { text: "Internet Explorer 10" },
						opera: { text: "Opera" },
						safari: { text: "Safari" }
					},
					reject:
					{
						msie5: true,
						msie6: true,
						msie7: true,
						firefox1: true,
						firefox2: true,
						firefox3: true,
						opera7: true,
						opera8: true,
						opera9: true,
						opera10: true,
						safari2: true,
						safari3: true
			        }  
				});

				console.log("finished: RejectUnsupportedBrowsers");
			}
		});
	})();




});


