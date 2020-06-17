  //<![CDATA[

  if (document.querySelectorAll(".home").length > 0) {
    setTimeout(function() {
      var ids = document.querySelectorAll(".slick-active .card .desktop .card-figcaption-button");
      // console.log(ids);
      var array_ids = [];
      for (var j = 0; j < (ids.length)*2+2; j++) {
        var id = document.querySelectorAll(".card-figcaption-button")[j].attributes[3].nodeValue;
        if (id == '0') {
          var furl = document.querySelectorAll(".card-figcaption-button")[j].href;
          var idnum = furl.search("id");
          idnum = idnum+3;
          var id = furl.substring(idnum);
        }
        array_ids.push(id);
        j++;
        // console.log(array_ids);
      }
      var items = document.querySelectorAll(".productCarousel-slide");
      for (var i = 0; i < items.length; i++) {
          // console.log('product id', array_ids[i]);
          var div = document.createElement("div");
          div.setAttribute('class', 'yotpo bottomLine');
          div.setAttribute('data-product-id', array_ids[i]);
          div.style.display = "inline-block";
          if (document.querySelectorAll('.card-title').length > 0) {
            document.querySelectorAll('.productCarousel-slide')[i].appendChild(div);
          }
      } yotpo.refreshWidgets();
    }, 3000);
  }

  //]]>
