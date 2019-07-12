var n=0
$(".sidebar-toggle").click(()=>{
	n++;
	if(n%2==1){
		$(".logo").css("width","50px");
		$("sidebar").css("width","50px");
		$(".logo").html("<span>A</span>LT");
	}else {
		$(".logo").css("width","230px");
		$("sidebar").css("width","230px");
		$(".logo").html("<span>Admin</span>LET");
	}
	
})
//右边信息栏
$(".info").click(function(){
	var i=$(this).index();
	var $show=$($(".show")[i]);
	if($show.css("display")=="none") {
		$(".show").css("display","none");
		$show.css("display","block");
		$(".info").css("background","#3C8DBC")
		$(this).css("background","#367fa9");
	}else {
		$show.css("display","none");
		$(this).css("background","#3C8DBC");
	}
		
	
})
var i=0;
$(".user").click(()=>{
	i++
	if(i%2==1){
		$(".user-show").css("display","block");
	}else {
		$(".user-show").css("display","none");
	}

})
//右边设置
var k=0;
$(".set").click(function(){
	k++;

	if(k%2==1){
		$(".set-show").css("right","0px");
		$(this).css("background","#367fa9");
	}else {
		$(".set-show").css("right","-225px");
		$(this).css("background","#3C8DBC");
	}
})

$(".set-show>ul>li").click(function(){
	var index = $(this).index();
	$(this).addClass("active");
	$(this).siblings().removeClass("active")
	$($(".item-box")[index]).addClass("active");
	$($(".item-box")[index]).siblings().removeClass("active");
})


//统计图
var ctx1 = mc1.getContext("2d");
var ctx2 = mc2.getContext("2d");
var ctx3 = mc3.getContext("2d");
var ctx4 = mc4.getContext("2d");

var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
	    {
	    	label: "My First dataset",
	        fillColor: "#ddd",
	        strokeColor: "rgba(220,220,220,1)",
	        data: [65, 59, 80, 81, 56, 55, 40]
	    },
	    {
	        label: "My Second dataset",
	        fillColor: "#3c8Dbc",
	        strokeColor: "rgba(151,187,205,1)",
	        data: [28, 48, 40, 19, 86, 27, 90]
	    }
    ]
};

var data1 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
	    {
	    	label: "My First dataset",
	        fillColor: "transparent",
	        strokeColor: "rgba(220,220,220,1)",
	        data: [65, 59, 80, 81, 56, 55, 40]
	    },
	    {
	        label: "My Second dataset",
	        fillColor: "transparent",
	        strokeColor: "rgba(151,187,205,1)",
	        data: [28, 48, 40, 19, 86, 27, 90]
	    }
    ]
};

var data2 = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
]
var data3 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
	    {
	    	label: "My First dataset",
	        fillColor: "#ddd",
	        strokeColor: "rgba(220,220,220,1)",
	        data: [65, 59, 80, 81, 56, 55, 40]
	    },
	    {
	        label: "My Second dataset",
	        fillColor: "#00A65A",
	        strokeColor: "rgba(151,187,205,1)",
	        data: [28, 48, 40, 19, 86, 27, 90]
	    }
    ]
};        
var myLineChart1 = new Chart(ctx1).Line(data,{
	pointDot:false
});
var myLineChart2 = new Chart(ctx2).Line(data1,{
	pointDot:false
});
var myLineChart3 = new Chart(ctx3).Doughnut(data2);
var myLineChart4 = new Chart(ctx4).Bar(data3);

$(".del").click(function(){
	var $chart=$(this).parents(".chart");
	$chart.css("height","0px");
	
})
