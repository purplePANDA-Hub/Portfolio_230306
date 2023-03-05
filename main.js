// *********************************************************
// 「TOPへ」ボタンの機能実装
// *********************************************************

// グローバル変数定義
const page_top_button = document.getElementById("page_top_button");

//表示と非表示
function page_top_button_show() {
    let currentY = window.pageYOffset;
    if (currentY > 80){
        page_top_button.style.opacity = 1;
    } else {
        page_top_button.style.opacity = 0;
    }
}

window.addEventListener("scroll", page_top_button_show);

//上に自動スクロール
function page_scroll_to_top() {
    window.scroll({top:0,behavior:"smooth"});
}

page_top_button.addEventListener("click", page_scroll_to_top);

// *********************************************************
// ハンバーガーメニュー
// *********************************************************

// グローバル変数定義
const hamberger = document.getElementById("hamberger");
const upper = document.getElementById("upper");
const center = document.getElementById("center");
const lower = document.getElementById("lower");
const hamberger_menu = document.getElementById("hamberger-menu");
const mobile_menu = document.getElementsByClassName("mobile-menu");

// ハンバーガーメニューホバー時の色変更
function change_color_to_black() {
    hamberger.style.borderColor = "#202020";
    upper.style.borderColor = "#202020";
    center.style.borderColor = "#202020";
    lower.style.borderColor = "#202020";
}

function change_color_to_white() {
    hamberger.style.borderColor = "#ffffff";
    upper.style.borderColor = "#ffffff";
    center.style.borderColor = "#ffffff";
    lower.style.borderColor = "#ffffff";
}

function mouseleave() {
    if (center.style.display === "none") {
        change_color_to_black();
    } else {
        change_color_to_white();
    }
}

hamberger.addEventListener("mouseover", change_color_to_black);
hamberger.addEventListener("mouseleave", mouseleave);

// ハンバガーメニュークリック時のボタン表示

function change_hamberger_to_x() {
    upper.style.transform = "rotate(45deg)";
    center.style.display = "none";
    lower.style.transform = "rotate(-45deg)";
    hamberger_menu.style.display = "block";
}

function change_hamberger_to_berger() {
    upper.style.transform = "translateY(-10px) rotate(0deg)";
    center.style.display = "block";
    lower.style.transform = "translateY(10px) rotate(0deg)";
    hamberger_menu.style.display = "none";
}

function change_hamberger() {
    if (center.style.display === "none") {
        change_hamberger_to_berger();
    } else {
        change_hamberger_to_x();
    }
}

hamberger.addEventListener("click", change_hamberger);

for (let i=0; i < mobile_menu.length; i++){
    mobile_menu[i].addEventListener("click", change_hamberger_to_berger);
}    
