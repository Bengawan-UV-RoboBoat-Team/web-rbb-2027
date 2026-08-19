---
title: "[LOGBOOK] Middleware Selection Decision: ROS 1 vs ROS 2"
date: "5 January 2026"
author: "Firizqi Aditya"
description: "Documenting the technical considerations behind choosing ROS 1 over ROS 2 for the Mandakini autonomous surface vehicle platform."
image: "/images/research/programming/roscore.webp"
tags: ["ROS", "ROS 1", "ROS 2", "Jetson Nano", "Autonomous System"]
---

# Middleware Selection: Why ROS 1 Was Chosen Over ROS 2

Selecting the appropriate robotic middleware is a critical system-level decision that directly affects compatibility, stability, and development efficiency. During the development of the Mandakini autonomous surface vehicle, **ROS 1** was chosen instead of ROS 2 based on practical hardware and software constraints.

This logbook documents the rationale behind this decision.

---

## 1. Hardware and Operating System Constraints

The onboard computer used in this system is the **NVIDIA Jetson Nano (eMMC version)**, which introduces several limitations:

- **Ubuntu 18.04 (Bionic Beaver)** as the base operating system  
- **Python 3.6** as the default system Python version  
- Pre-installed **CUDA and NVIDIA JetPack** environment  

Upgrading the operating system or Python version on the **eMMC-based Jetson Nano** carries a high risk of:

- CUDA and driver incompatibility  
- JetPack dependency conflicts  
- Difficult recovery compared to SD card–based systems  

For this reason, the system environment was intentionally kept unchanged to maintain stability.

---

## 2. ROS 2 Availability on Ubuntu 18.04

While ROS 2 does have limited support on Ubuntu 18.04, the only officially compatible distribution is **ROS 2 Eloquent**.

However, this option presents a major limitation:

- **ROS 2 Eloquent does not provide stable MAVROS support**

Since MAVROS is a critical component for integrating:

- Pixhawk flight controller  
- GPS, IMU, and waypoint navigation  
- Autonomous mission execution  

the lack of MAVROS support makes ROS 2 Eloquent unsuitable for this platform.

---

## 3. ROS 1 Compatibility and System Stability

In contrast, **ROS 1 (Melodic)** offers:

- Full compatibility with Ubuntu 18.04  
- Stable and mature **MAVROS** integration  
- Proven reliability on Jetson Nano hardware  
- Broad community support and tooling  

Using ROS 1 allows the system to operate without forced upgrades that could compromise hardware stability or development timelines.

---

## Conclusion

Although ROS 2 provides architectural improvements and long-term benefits, **ROS 1 was selected as the most practical and reliable choice** for the Mandakini platform.

This decision prioritizes:

- System stability  
- Hardware compatibility  
- Reliable MAVROS integration  
- Reduced risk of CUDA and driver conflicts  

As a result, ROS 1 enables consistent autonomous operation within the constraints of the Jetson Nano eMMC-based environment.

---
