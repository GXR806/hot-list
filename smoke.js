document.addEventListener("DOMContentLoaded", function () {
  var smoke = document.createElement("div");
  smoke.className = "smoke";
  document.body.appendChild(smoke);

  var colors = ["white","pink","red","orange","yellow","cyan","blue","purple"];
  var currentColorIndex = 0;

  document.addEventListener("click", function () {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
  });

  document.addEventListener("mousemove", function (e) {
    createSmoke(e.clientX, e.clientY);
  });

  function createSmoke(x, y) {
    var smokeParticle = document.createElement("div");
    smokeParticle.className = "smoke-particle";
    smokeParticle.style.left = x + "px";
    smokeParticle.style.top = y + "px";
    smokeParticle.style.backgroundColor = colors[currentColorIndex];
  
    // 新增以下四行
    smokeParticle.style.opacity = Math.random() * 0.5 + 0.3;
    smokeParticle.style.width = smokeParticle.style.height = (Math.random() * 20 + 5) + "px"; // 增大随机粒子大小范围
    smokeParticle.style.borderWidth = smokeParticle.style.boxShadowSpreadRadius = (Math.random() * 3 + 2) + "px"; // 增大边框宽度和阴影扩散范围
    smokeParticle.style.animationDuration = (Math.random() * 0.4 + 0.4) + "s"; // 增大动画时间范围
  
    smoke.appendChild(smokeParticle);
  
    setTimeout(function () {
        smokeParticle.remove();
    }, 800);
  }
  
});
