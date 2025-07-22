(() => {
  const canvas = document.getElementById("starfield");
  const ctx    = canvas.getContext("2d");
  let w, h;
  const stars        = [];
  const shootingStars = [];
  const STAR_COUNT   = 200;
  let lastMouse      = {};

  function resize() {
    w = canvas.width  = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  // track mouse for “cursor-guided” shooting star
  document.addEventListener("mousemove", e => {
    lastMouse.x = e.clientX;
    lastMouse.y = e.clientY;
  });

  // initialize twinkling stars
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.2 + .3,
      alpha: Math.random(),
      dx: (Math.random() - .5) * .03,
      dy: (Math.random() - .5) * .03
    });
  }

  // create a shooting star that passes through the cursor (or random) every 3s
  function makeShootingStar() {
    const angle = Math.PI * (Math.random() * .1 + .3);
    const len   = Math.random() * 300 + 100;
    const speed = Math.random() * 8 + 4;
    let x0, y0;

    if (lastMouse.x !== undefined) {
      // spawn so its path will go through the cursor
      x0 = lastMouse.x - Math.cos(angle) * len;
      y0 = lastMouse.y - Math.sin(angle) * len;
    } else {
      // random spawn if mouse is off
      x0 = Math.random() * w;
      y0 = Math.random() * h;
    }

    shootingStars.push({ x: x0, y: y0, angle, len, speed, alpha: 1 });
  }
  setInterval(makeShootingStar, 2000);

  function animate() {
    ctx.clearRect(0, 0, w, h);

    // milky-way glow
    const grad = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, h * .75);
    grad.addColorStop(0, "rgba(5,20,50,0.2)");
    grad.addColorStop(1, "rgba(0,0,0,1)");
    ctx.fillStyle = grad;
    ctx.fillRect(0,0,w,h);

    // twinkle normal stars
    stars.forEach(s => {
      s.x += s.dx; s.y += s.dy;
      if (s.x < 0) s.x = w;
      if (s.x > w) s.x = 0;
      if (s.y < 0) s.y = h;
      if (s.y > h) s.y = 0;
      s.alpha += (Math.random() - .5) * .02;
      s.alpha = Math.max(0, Math.min(1, s.alpha));

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, 2*Math.PI);
      ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
      ctx.fill();
    });

    // draw & fade shooting stars
    shootingStars.forEach((shoot, i) => {
      shoot.x     += Math.cos(shoot.angle) * shoot.speed;
      shoot.y     += Math.sin(shoot.angle) * shoot.speed;
      shoot.alpha -= 0.01;
      if (shoot.alpha <= 0) {
        shootingStars.splice(i, 1);
        return;
      }
      ctx.save();
      ctx.globalAlpha = shoot.alpha;
      ctx.strokeStyle = `rgba(255,255,255,${shoot.alpha})`;
      ctx.lineWidth   = 2;
      ctx.beginPath();
      ctx.moveTo(shoot.x, shoot.y);
      ctx.lineTo(
        shoot.x - Math.cos(shoot.angle) * shoot.len,
        shoot.y - Math.sin(shoot.angle) * shoot.len
      );
      ctx.stroke();
      ctx.restore();
    });

    requestAnimationFrame(animate);
  }

  animate();
})();
