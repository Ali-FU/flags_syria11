fetch('flags.json',  { type: 'json' })
  .then(res => res.json())
  .then(data => {
    const timeline = document.getElementById('timeline');
    const flagImage = document.getElementById('flagImage');
    const flagTitle = document.getElementById('flagTitle');
    const flagPeriod = document.getElementById('flagPeriod');
    const flagDescription = document.getElementById('flagDescription');
    
    data.forEach((flag, index) => {
      const button = document.createElement('button');
      button.textContent = flag.period;
      button.onclick = () => {
        flagImage.src = flag.image;
        flagTitle.textContent = flag.title;
        flagPeriod.textContent = flag.period;
        flagDescription.textContent = flag.description;
      };
      timeline.appendChild(button);

      if (index === 0) button.click();
    });
  });
