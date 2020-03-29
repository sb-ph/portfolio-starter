module.exports = {
  projectsByDate: function(collection) {
    const projects = collection.getFilteredByTag("projects");
    return projects.sort(function(a, b) {
      return b.data.dateEnd - a.data.dateEnd;
    });
  }
};
