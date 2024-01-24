document.addEventListener("DOMContentLoaded", function() {
    // Chọn tất cả các flash messages
    var flashMessages = document.querySelectorAll('.alert');

    // Đặt thời gian tự động đóng message (ví dụ: 5000 milliseconds = 5 giây)
    var closeDelay = 3500;

    // Hàm đóng flash message
    function closeFlashMessage(message) {
        message.style.display = 'none';
    }

    // Duyệt qua từng flash message và đặt timeout để đóng nó
    flashMessages.forEach(function(message) {
        setTimeout(function() {
            closeFlashMessage(message);
        }, closeDelay);
    });
});