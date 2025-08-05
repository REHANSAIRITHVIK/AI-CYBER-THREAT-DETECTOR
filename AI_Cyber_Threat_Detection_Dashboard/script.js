document.addEventListener('DOMContentLoaded', function () {
    // Replace with your actual name or fetch from a backend
    const userName = "DASIKA R SAI RITHVIK";
    document.getElementById("userName").innerText = userName;

    // Handle menu clicks
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove active class from all
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            // Get target panel from data attribute
            const target = this.getAttribute('data-target');

            // Hide all panels
            const panels = document.querySelectorAll('.content-panel');
            panels.forEach(p => p.style.display = 'none');

            // Show the selected panel
            document.getElementById(target).style.display = 'block';
        });
    });

    // Default: show dashboard panel
    document.getElementById('dashboardPanel').style.display = 'block';
    document.querySelector('.menu-item[data-target="dashboardPanel"]').classList.add('active');

    // Sample data loading for Dashboard
    loadDashboardData();
    loadThreatLogs();
    loadThreats();
    loadAlerts();
});

function loadDashboardData() {
    const stats = {
        totalThreats: 452,
        activeThreats: 17,
        alertsSent: 328,
        systemsMonitored: 25
    };

    document.getElementById('totalThreats').innerText = stats.totalThreats;
    document.getElementById('activeThreats').innerText = stats.activeThreats;
    document.getElementById('alertsSent').innerText = stats.alertsSent;
    document.getElementById('systemsMonitored').innerText = stats.systemsMonitored;
}

function loadThreatLogs() {
    const logs = [
        { time: '2025-08-05 13:20', detail: 'Malware signature detected on endpoint 192.168.1.24' },
        { time: '2025-08-05 12:50', detail: 'Phishing email link clicked by user A' },
        { time: '2025-08-05 12:30', detail: 'Unusual login pattern from IP 203.0.113.5' },
    ];

    const table = document.getElementById('logsTable');
    table.innerHTML = '<tr><th>Timestamp</th><th>Log Detail</th></tr>';
    logs.forEach(log => {
        table.innerHTML += `<tr><td>${log.time}</td><td>${log.detail}</td></tr>`;
    });
}

function loadThreats() {
    const threats = [
        { id: 101, type: 'Trojan', level: 'High', detectedAt: '2025-08-05 11:30' },
        { id: 102, type: 'Ransomware', level: 'Critical', detectedAt: '2025-08-05 10:45' },
        { id: 103, type: 'SQL Injection', level: 'Medium', detectedAt: '2025-08-04 17:20' },
    ];

    const table = document.getElementById('threatsTable');
    table.innerHTML = '<tr><th>ID</th><th>Type</th><th>Severity</th><th>Detected At</th></tr>';
    threats.forEach(threat => {
        table.innerHTML += `<tr>
            <td>${threat.id}</td>
            <td>${threat.type}</td>
            <td>${threat.level}</td>
            <td>${threat.detectedAt}</td>
        </tr>`;
    });
}

function loadAlerts() {
    const alerts = [
        { id: 'A-9001', message: 'Unauthorized access detected in server 1', time: '2025-08-05 10:05' },
        { id: 'A-9002', message: 'Multiple failed login attempts from unknown IP', time: '2025-08-05 09:55' },
        { id: 'A-9003', message: 'New device connected to internal network', time: '2025-08-04 21:45' },
    ];

    const table = document.getElementById('alertsTable');
    table.innerHTML = '<tr><th>Alert ID</th><th>Message</th><th>Time</th></tr>';
    alerts.forEach(alert => {
        table.innerHTML += `<tr>
            <td>${alert.id}</td>
            <td>${alert.message}</td>
            <td>${alert.time}</td>
        </tr>`;
    });
}
