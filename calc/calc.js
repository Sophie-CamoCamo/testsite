let value = "";
let operator = "";
let isPushOpe = false;

//ディスプレイ更新
let update = (value) => {
    $(".display").val(value);
}

//ディスプレイの値取得
function get_value() {
    return $(".display").val();
}

//計算.eval以外の方法が思いつかないので保留
function calc() {
    update(eval(value + operator + get_value()));
}

//グローバル変数初期化
function initialize() {
    value = "";
    operator = "";
    isPushOpe = true;
}

//
$(document).ready(function () {

    $(".number").on("click", function () {

        if (isPushOpe) {
            //演算記号押されていたら画面初期化
            update("");
            isPushOpe = false;
        }

        update(get_value() + $(this).val());
    })

    $(".operator").on("click", function () {

        if (!isPushOpe) {
            //直前に演算記号が押されていなければ計算
            calc();
        }
        value = get_value();
        operator = $(this).val();
        isPushOpe = true;
        if (!$(this).hasClass("active")) {
            $(".operator").removeClass("active");
            $(this).addClass("active");
        } 

    }
    )

    $(".equal").on("click", function () {

        calc();
        $(".operator").removeClass("active");
        initialize();

    })

    $(".clear").on("click", function () {
        initialize();
        $(".operator").removeClass("active");
        update("");
    })

})