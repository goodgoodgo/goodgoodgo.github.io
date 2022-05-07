$(document).ready(function(){
	$(".m-jpg").hide();
	$(".box").hide();
	$(".m-tb").hide();
	$("span:first()").hide();
	$("li").click(function () {
		$(".m-jpg").fadeIn(1000);
		$(".box").fadeIn(2000);
	});
	$(".m-jpg").click(function () {
		$(".m-jpg").fadeOut(1000);
		$(".box").fadeOut(1000);
	});
	$(".f1").click(function () {
		$("span:first()").hide(10);
		$(".m-tb").hide(10);
		$(".g-index").fadeIn(10);
	});
	$(".f2").click(function () {
		$("span:first()").fadeIn(10);
		$(".g-index").hide();
		$(".m-tb").hide(10);
	});
	$(".f3").click(function () {
		getId();
		$(".m-tb").fadeIn(10);
		$("span:first()").hide(10);
		$(".g-index").hide();
	});
	$(".t-del").click(function () {
		var self=$(this);
		self.parent().parent().remove();
		getId();
	});
	$(".add").click(function (){
		$("tr:last()").after("<tr class=\"relative\">\n" +
            "            <td class=\"t-id\"></td>\n" +
            "            <td>2</td>\n" +
            "            <td>3</td>\n" +
            "            <td>4</td>\n" +
            "            <td>4</td>\n" +
            "            <td>5</td>\n" +
            "            <td>\n" +
            "                <button class=\"t-del\" name=\"deleteEvent\">删除</button>\n" +
            "            </td>\n" +
            "        </tr>");
		getId();
		$(".t-del").click(function () {
		var self=$(this);
		self.parent().parent().remove();
		getId();
	});
	});
});
function getId(){
	var id=1;
		$("tr").each(function(){
  			var self=$(this);
  			self.children(":first").html(id++);
	});
}