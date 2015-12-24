var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
		var lineChartData = {
			labels : ["1:00","2:00","3:00","4:00","5:00","6:00","7:00"],
			datasets : [
				{
					label: "My Second dataset",
					fillColor : "rgba(60,126,224,0.2)",
					strokeColor : "rgba(60,126,224,1)",
					pointColor : "rgba(60,126,224,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(60,126,224,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]

		}


		window.onload = function(){
			var ctx = document.getElementById("canvas").getContext("2d");
			window.myLine = new Chart(ctx).Line(lineChartData, {
				responsive: true
			});
		}