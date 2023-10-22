function showAnnouncement() {
    document.getElementById("announcement-overlay").style.display = "block";
  }
  
  function closeAnnouncement() {
    const announcementOverlay = document.getElementById("announcement-overlay");
    announcementOverlay.style.animation = "slideOut 0.5s forwards";
    setTimeout(() => {
      announcementOverlay.style.display = "none";
      announcementOverlay.style.animation = "slideIn 0.5s forwards"; // 重置动画以便下次弹出时使用
    }, 500); // 等待0.5秒（动画时长）后隐藏公告
  }
  