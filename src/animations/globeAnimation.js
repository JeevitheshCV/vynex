export function rotateGlobe(elementRef) {
  if (!elementRef) return;
  let deg = 0;
  function animate() {
    deg = (deg + 0.1) % 360;
    elementRef.style.transform = `rotateY(${deg}deg)`;
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}
