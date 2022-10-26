var content = "2. Cố gắng chưa bao giờ là đủ nhưng không" +
    "có thành công nào mà thiếu đi sự cố gắng" +
    "Không quan trọng bạn phạm bao nhiêu sai lầm," +
    " hoặc bạn bước đi chậm chạp đến đâu, bạn vẫn " +
    "chiến thắng những kẻ không bao giờ biết đến hai từ " +
    " “cố gắng” và mang một bộ óc “tự phụ”. Đừng quên cuối " +
    " cùng rùa vẫn là người về đích trước thỏ nhé!";

function changeContext() {
    document.getElementById("sript_demo").innerHTML = content;
}
function changeItem(sw) {
    var img = "https://ecdn.game4v.com/g4v-content/uploads/2017/08/character_24035.png";
    if (sw == 0) {
        img = "https://e1.pngegg.com/pngimages/724/564/png-clipart-doraemon-doraemon.png"
    } else {
        img = "https://i.pinimg.com/originals/18/7a/e8/187ae8c6c3354d5d0687e24f24d0defb.jpg"
    }
    document.getElementById("img").src = img
}