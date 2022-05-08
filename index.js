// Adds an image to the body element.
newImage = (source, position, left, bottom) => {
  let image = document.createElement("img");
  image.src = source;
  image.style.position = position;
  image.style.left = left;
  image.style.bottom = bottom;

  document.body.append(image);
  return image;
};

// New item function
newItem = (source, position, left, bottom) => {
  let item = newImage(source, position, left, bottom);

  item.addEventListener("dblclick", function () {
    item.remove();
  });
};

// Creating Images
newImage("assets/green-character.gif", "fixed", "100px", "100px");
newImage("assets/pine-tree.png", "fixed", "450px", "200px");
newImage("assets/tree.png", "fixed", "200px", "300px");
newImage("assets/pillar.png", "fixed", "350px", "100px");
newImage("assets/crate.png", "fixed", "150px", "200px");
newImage("assets/well.png", "fixed", "500px", "425px");

// Creating Items
newItem("assets/sword.png", "fixed", "500px", "405px");
newItem("assets/sheild.png", "fixed", "165px", "185px"); //Starter Code has shield spelled wrong under assets. Does not follow Activity in canvas.
newItem("assets/staff.png", "fixed", "600px", "100px");
