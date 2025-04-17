export const clickLabelFunction = (item) => {
  item.addEventListener(
    "keydown",
    (event) => event.key === "Enter" && item.click()
  );
};

export const observeElements = (sectionElements) => {
  const options = {
    threshold: 0.3,
  };
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // enter viewport
        entry.target.classList.add("in-view");
      } else {
        // exit viewport
        entry.target.classList.remove("in-view");
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  sectionElements.forEach((element) => observer.observe(element));
};
