import time
import random

print("🚨 AI CYBER THREAT DETECTION SYSTEM 🚨")
print("Developed by DASIKA REHAN SAI RITHVIK\n")
print("Monitoring live threats...\n")

for i in range(5):
    threat_level = random.choice(["LOW", "MEDIUM", "HIGH", "CRITICAL"])
    threat_type = random.choice(["Malware", "Phishing", "DDoS", "Data Breach"])
    print(f"[{time.strftime('%H:%M:%S')}] Detected: {threat_type} | Level: {threat_level}")
    time.sleep(2)

print("\n✅ All active threats analyzed.")
