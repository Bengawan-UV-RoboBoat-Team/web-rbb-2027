---
title: "[LOGBOOK] Electrical Diagram of Mandakini Raiden"
date: "11 January 2026"
author: "Rafi Adhitya"
description: "An overview of the electrical system architecture of Mandakini Raiden, covering power distribution, control, communication, propulsion, and safety subsystems for autonomous operation."
image: "/images/research/electric-mechanic/electrical-diagram.webp"
tags: ["Electrical Diagram"]
---

## Introduction

The electrical system of Mandakini Raiden is designed with a centralized and modular architecture to ensure stable, safe, and efficient power distribution. The system utilizes a power distribution box equipped with a main terminal block and DC-to-DC converters to regulate and distribute voltage to various subsystems in the Control Box, including Pixhawk, Jetson, telemetry modules, and the emergency system.

In addition, the electrical system supports the operation of relays and Electronic Speed Controllers (ESCs) used in water operation and rescue delivery missions, allowing actuators to be controlled precisely according to mission requirements. To maintain propulsion system reliability, motor power sources are separated and use dedicated Li-Po batteries, preventing overload on the control and sensor systems.

As part of the monitoring system, Mandakini Raiden is equipped with a battery voltage sensor that monitors remaining battery capacity in real time. This sensor is connected to an Arduino, which then transmits battery voltage data to Pixhawk for display and use as a reference for decision making during vessel operation.

---

## Electrical Diagram

![Electrical Diagram of Mandakini Raiden](/images/research/electric-mechanic/electrical-diagram.webp)

---

## Component Breakdown

### 1. Power System (Sistem Daya)

- Li-Po Battery 14.8V 5200 mAh (2 units)  
- Li-Po Battery 14.8V 10000 mAh (Emergency Battery)

### 2. Voltage Regulator

- Step Down Converter 12V  
- Step Down Converter 5V  
- Step Up Converter 24V

### 3. Control System

- Pixhawk  
- Jetson Nano  
- Arduino

### 4. Communication System 

- LAN Network  
- Ubiquity Radio  
- Telemetry Module  
- Remote Receiver (RX)

### 5. Computer and Vision

- Logitech C920 Camera  
- LiDAR Sensor  
- GPS Module

### 6. Propulsion System 

- T200 Thruster  
- Basic ESC  
- Servo Motor (2 units)  
- Steering Servo

### 7. Actuator System 

- Waterblast System  
- Water Pump  
- Servo X  
- ESC  
- BLDC Motor

### 8. Emergency System 

- 12V Relay  
- 12V LED  
- Physical Switch  
- Emergency Control Module

---

## 3D Design Electrical Diagram

![Control Box Layout](/images/research/electric-mechanic/control-box.webp)

![Power Distribution Box Layout](/images/research/electric-mechanic/power-distribution-box.webp)

---
