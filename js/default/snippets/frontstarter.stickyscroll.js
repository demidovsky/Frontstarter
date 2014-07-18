function snapToScreen($this, event, from)
        {
            var wy = Math.round($window.scrollTop()); // Window Y
            var wh = Math.round($window.height());    // Window Height
            var sy = Math.round($this.offset().top);  // Section Y
            var sh = Math.round($this.height());      // Section Height

            if (event.deltaY > 0) // прокрутка вверх
            {
                // console.log('scroll up', sy+sh, wy);

                if (sy + sh + 200 > wy && sy < wy)
                {
                    if ($this.hasClass('useful-and-tasty'))
                    {
                        sy = Math.round($this.prev().offset().top);
                        console.log($this.prev())
                    }

                    $htmlbody.stop(true, false).animate({scrollTop:sy}, 500, 'easeOutQuad');
                    
                    if (!$this.hasClass('first-slider') && !$this.hasClass('second-slider'))
                    { $('.slider-wrap').jcarousel('scroll', 0); }

                    if ($this.hasClass('you-sleep-main'))
                    {
                        console.log("Y: " + sy);
                        isWheelBlocked = true;
                        timerWheelBlock = setTimeout(function(){isWheelBlocked=false},2000);
                    }

                    event.preventDefault();
                    return true;
                }
            }
            else // прокрутка вниз
            {
                // console.log('scroll down', sy, wy+wh);

                if (sy < wy + wh + 200 && sy > wy)
                {
                    if ($this.hasClass('useful-and-tasty'))
                    {
                        sy = Math.round($this.next().offset().top);
                    }

                    $htmlbody.stop(true, false).animate({scrollTop:sy}, 500, 'easeOutQuad');
                    
                    if (!$this.hasClass('first-slider') && !$this.hasClass('second-slider'))
                    { $('.slider-wrap').jcarousel('scroll', 0); }

                    event.preventDefault();
                    return true;
                }
            }

            return false;
        }








(function CheckForSnapToScreen()
        {
            $window.on("mousewheel", function(event)
            {
                if (isWheelBlocked)
                {
                    event.preventDefault();
                    event.stopPropagation();
                    return;
                }

                $(
                    [
                        // к каким блокам приклеиваемся (порядок не важен):
                        $first,
                        $second,
                        $('.bed'),
                        $('.you-sleep-main'),
                        $('.you-sleep-car'),
                        $('.useful-and-tasty').eq(0),
                        $('.useful-and-tasty').eq(1),
                        $('.useful-and-tasty').eq(2),
                        $('.useful-and-tasty').eq(3),
                        $('.footer')
                    ]
                )
                .each(
                    function(index, $this)
                    {
                        snapToScreen($this, event, 'window');
                    })
            });
        })();



