<?php
// クッキー名を定義
$cookieName = "visitCount";

// クッキーがすでに存在する場合、訪問回数を取得
if(isset($_COOKIE[$cookieName])) {
    $visitCount = $_COOKIE[$cookieName];
} else {
    // クッキーが存在しない場合、訪問回数を初期化
    $visitCount = 0;
}

// 訪問回数を増やす
$visitCount++;

// クッキーに訪問回数を保存 (有効期限を設定)
setcookie($cookieName, $visitCount, time() + 3600 * 24 * 30); // 現状は30日間有効のコードだが、変更可能

$imageFileA = "./assets/images/mv/mv_01.jpg";
$imageFileB = "./assets/images/mv/mv_02.jpg";
$imageFileSpA = "./assets/images/mv/mv_01_sp.jpg";
$imageFileSpB = "./assets/images/mv/mv_02_sp.jpg";


if ($visitCount % 2 === 0) {
    // $visitCountが偶数の場合
    $path = $imageFileA;
    $pathSp = $imageFileSpA;
} else {
    // $visitCountが奇数の場合
    $path = $imageFileB;
    $pathSp = $imageFileSpB;
}

?>