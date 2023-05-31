function scrollToSection(id: string) {
  const element = document.getElementById(id);
  const container = document.querySelector(".main-div");
  if (element && container) {
    container.scrollTop = element.offsetTop;
  }
}

export default scrollToSection;
