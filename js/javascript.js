        $(document).ready(function () {

            $("#getWeatherForcast").click(function () {

                var city = $("#city").val();
                var key = '4de3768c62b67fe359758977a3efc069';

                $.ajax({
                    url: 'http://api.openweathermap.org/data/2.5/weather',
                    dataType: 'json',
                    type: 'GET',
                    data: {
                        q: city,
                        appid: key,
                        units: 'imperial'
                    },

                    success: function (data) {
                        var wf = '';
                        $.each(data.weather, function (index, val) {

                            wf += '<p>It is ' + data.main.temp + '&deg;F ' +
                                ' in ' + data.name + "</p>"

                        });

                        $(".ShowWeatherForcast").html(wf);
                    }

                })

            });
        });