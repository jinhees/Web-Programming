
//어른 티켓
var sell_price;
var amount;

function init () {
  sell_price = document.form.sell_price.value;
  amount = document.form.amount.value;
  document.form.sum.value = sell_price;

  change();
}

function add () {
  hm = document.form.amount;
  sum = document.form.sum;
  hm.value ++ ;

  sum.value = parseInt(hm.value) * sell_price;
}


function del () {
  hm = document.form.amount;
  sum = document.form.sum;
    if (hm.value > 0) {
      hm.value -- ;
      sum.value = parseInt(hm.value) * sell_price;
    }
}

function change () {
  hm = document.form.amount;
  sum = document.form.sum;

    if (hm.value < 0) {
      hm.value = 0;
    }
  sum.value = parseInt(hm.value) * sell_price;
}

//어린이 티켓

var sell_price_k;
var amout_k;

function init_k () {
  sell_price_k = document.form_k.sell_price_k.value;
  amount_k = document.form_k.amount_k.value;
  document.form_k.sum_k.value = sell_price_k;

  change_k();
}
function add_k () {
  hm_k = document.form_k.amount_k;
  sum_k = document.form_k.sum_k;
  hm_k.value ++ ;

  sum_k.value = parseInt(hm_k.value) * sell_price_k;
}
function del_k () {
  hm_k = document.form_k.amount_k;
  sum_k = document.form_k.sum_k;
    if (hm_k.value > 0) {
      hm_k.value -- ;
      sum_k.value = parseInt(hm_k.value) * sell_price_k;
    }
}
function change_k () {
  hm_k = document.form_k.amount_k;
  sum_k = document.form_k.sum_k;

    if (hm_k.value < 0) {
      hm_k.value = 0;
    }
  sum_k.value = parseInt(hm_k.value) * sell_price_k;
}
