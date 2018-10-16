const $ = require('jquery');
import "./app.css";

$(document).ready(function() {
	$('#add-todo').on('click', function() {
		if (document.getElementById('title').value.length == 0) {
			document.getElementById('error').innerHTML = "Поле не должно быть пустым";
			console.log('no');
		} else {
			document.getElementById('error').innerHTML = "";
			var title = $('#title').val();
			$('#todos').append("<li>" + title + "<a class='up'/> <a class='down'/> </li>");
			document.getElementById('title').value = "";
			console.log('Добавлено:  ' + title);
		}
	});
	
	$(document).on('click','.up', function() {
		var parentIndex = $(this).parent().index();
		var indexint = parseInt(parentIndex);
		if (indexint != 0){
			console.log('up');
			var parent = $(this).parent();
			parent.insertBefore(parent.prev());
			
			$(parent).css({"box-shadow": "0 0 5px 5px grey"});
			var deleteShadow = function(){
				$(parent).css({"box-shadow": ''});
			};
			setTimeout(deleteShadow, 3000);
		} else {
			console.log("Невозможное перемещение вверх");
		}
		
		/* var par = $(this).parent().text();
		var pari = $(this).parent().index(); // работает норм
		console.log(par);
		console.log(pari);
		var indexint = parseInt(pari);
		var nextindex = indexint + 1;
		console.log(indexint + '. Следующий индекс: ' + nextindex);
		
		console.log($( "body" ).find( "li" ).eq(nextindex));
		var nextitem = ($("li").eq(nextindex));
		var textitemtext = nextitem.text();	
		
		//$("li").eq(nextindex).html(par); //здесь происходит обмен текстом между li
		//$("li").eq(indexint).html(textitemtext);
		
		console.log(nextitem.text());
		
		//Обрезка строки 
		console.log(par.substr(0, par.length - 8)); */
	});
	
	$(document).on('click','.down', function() {
		var size = $("#todos li").length;
		var parent = $(this).parent();
		var parentIndex = $(this).parent().index();
		var indexint = parseInt(parentIndex);
		if (indexint != size - 1) {
			console.log('down');
			parent.insertAfter(parent.next());
			
			$(parent).css({"box-shadow": "0 0 5px 5px grey"});
			var deleteShadow = function(){
				$(parent).css({"box-shadow": ''});
			};
			setTimeout(deleteShadow, 3000);
		} else {
			console.log("Невозможное перемещение вниз");
		}
		
	});
	
});
