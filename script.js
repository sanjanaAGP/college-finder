document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    const location = document.getElementById('location').value.toLowerCase();
    const course = document.getElementById('course').value.toLowerCase();
    const maxFees = document.getElementById('fees').value;
  
    // Sample data (in real applications, this would come from a database)
    const colleges = [
      { name: "ABC College", location: "New York", course: "Computer Science", fees: 20000 },
      { name: "XYZ University", location: "California", course: "Business Administration", fees: 25000 },
      { name: "PQR College", location: "Texas", course: "Engineering", fees: 15000 },
      // Add more colleges as needed
    ];
  
    // Filter colleges based on search criteria
    const filteredColleges = colleges.filter(college => {
      return (
        (location === '' || college.location.toLowerCase().includes(location)) &&
        (course === '' || college.course.toLowerCase().includes(course)) &&
        (maxFees === '' || college.fees <= maxFees)
      );
    });
  
    // Display results
    const resultsContainer = document.getElementById('college-list');
    resultsContainer.innerHTML = ''; // Clear previous results
  
    if (filteredColleges.length > 0) {
      filteredColleges.forEach(college => {
        const collegeItem = document.createElement('div');
        collegeItem.classList.add('college-item');
        collegeItem.innerHTML = `
          <h3>${college.name}</h3>
          <p>Location: ${college.location}</p>
          <p>Course: ${college.course}</p>
          <p>Fees: $${college.fees}</p>
        `;
        resultsContainer.appendChild(collegeItem);
      });
    } else {
      resultsContainer.innerHTML = '<p>No colleges found matching your criteria.</p>';
    }
  });
  