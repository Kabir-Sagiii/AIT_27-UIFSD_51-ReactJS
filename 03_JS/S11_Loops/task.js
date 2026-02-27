function findDesignation(experience) {
  if (experience >= 0 && experience <= 2) {
    console.log("Junior Developer");
  } else if (experience > 2 && experience <= 5) {
    console.log("Senior Developer");
  } else if (experience > 5 && experience <= 8) {
    console.log("Team Lead");
  } else if (experience > 8 && experience <= 11) {
    console.log("Project Manager");
  } else if (experience > 11) {
    console.log("SA");
  } else {
    console.log("Invalid Data");
  }
}

findDesignation("vkkvndkf");
