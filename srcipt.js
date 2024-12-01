document.addEventListener('DOMContentLoaded', () => {
    const hackathons = [
      { name: 'Hackathon 1', date: 'January 2025', location: 'Bangalore' },
      { name: 'Hackathon 2', date: 'February 2025', location: 'Global' },
      { name: 'Hackathon 3', date: 'March 2025', location: 'Bangalore' },
    ];
  
    const hackathonList = document.getElementById('hackathon-list');
    
    hackathons.forEach(hackathon => {
      const div = document.createElement('div');
      div.classList.add('hackathon-item');
      div.innerHTML = `
        <h3>${hackathon.name}</h3>
        <p><strong>Date:</strong> ${hackathon.date}</p>
        <p><strong>Location:</strong> ${hackathon.location}</p>
      `;
      hackathonList.appendChild(div);
    });
  
    const feedbackForm = document.getElementById('feedback-form');
    feedbackForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const feedback = document.getElementById('feedback').value;
      const feedbackList = document.getElementById('feedback-list');
      const feedbackDiv = document.createElement('div');
      feedbackDiv.classList.add('feedback-item');
      feedbackDiv.innerHTML = `<h4>${name}</h4><p>${feedback}</p>`;
      feedbackList.appendChild(feedbackDiv);
      feedbackForm.reset();
    });
  });
  