$(function()
{
	var Countdown = 
	{
		date: new Date(2016,8-1,5,	23,59,59), // месяцы начинаются с нуля
		timer: null,
		values: { day:null, hour:null, min:null, sec:null },
		elem: {
			$day:  $('#countdown_day'),
			$hour: $('#countdown_hour'),
			$min:  $('#countdown_min'),
			$sec:  $('#countdown_sec'),
			$tick: $('#countdown_tick')
		},

		update: function()
		{
			var now = new Date(),
				total = Math.floor((this.date.getTime() - now.getTime()) / 1000), // всего осталось секунд
				sec = total % 60,
				min = Math.floor(total / 60) % 60,
				hour = Math.floor(total / 3600) % 24,
				day = Math.floor(total / 3600 / 24);

			// время вышло
			if (total < 0)
			{
				day = hour = min = sec = 0;
				this.stop();
			}

			if (this.values.day != day)   { this.values.day = day;   this.elem.$day.html(day);  }
			if (this.values.hour != hour) { this.values.hour = hour; this.elem.$hour.html(hour); }
			if (this.values.min != min)   { this.values.min = min;   this.elem.$min.html(this.padZero(min));  }
			if (this.values.sec != sec)   { this.values.sec = sec;   this.elem.$sec.html(this.padZero(sec));  }
		},

		start: function()
		{
			var self = this;

			clearInterval(this.timer);
			this.timer = setInterval(function(){ self.update(); }, 1000);
			this.update();

			this.elem.$tick.addClass('_tick');
		},

		stop: function()
		{
			clearInterval(this.timer);
			this.elem.$tick.removeClass('_tick');

			var self = this;
			setTimeout(function() { self.elem.$tick.removeClass('_tick'); }, 100);
		},

		padZero: function(value)
		{
			return (value > 9 ? value : '0' + value);
		}
	};

	Countdown.start();

})