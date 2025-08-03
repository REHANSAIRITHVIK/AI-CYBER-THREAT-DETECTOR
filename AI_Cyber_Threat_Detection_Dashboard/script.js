fetch("data.json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("detected").textContent = data.threats_detected;
    document.getElementById("mitigated").textContent = data.threats_mitigated;
    document.getElementById("accuracy").textContent = data.system_accuracy;
    document.getElementById("scanned").textContent = data.systems_scanned;

    const ctx1 = document.getElementById('threatChart').getContext('2d');
    const threatChart = new Chart(ctx1, {
      type: 'line',
      data: {
        labels: data.timeline.labels,
        datasets: [{
          label: 'Threat Detection',
          data: data.timeline.values,
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 2,
          fill: true
        }]
      }
    });

    const ctx2 = document.getElementById('trafficChart').getContext('2d');
    const trafficChart = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: data.traffic.labels,
        datasets: [{
          label: 'Normal Traffic',
          data: data.traffic.normal,
          backgroundColor: 'green'
        }, {
          label: 'Suspicious Traffic',
          data: data.traffic.suspicious,
          backgroundColor: 'orange'
        }, {
          label: 'Malicious Traffic',
          data: data.traffic.malicious,
          backgroundColor: 'red'
        }]
      }
    });
  });
