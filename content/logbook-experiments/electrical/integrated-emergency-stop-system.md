---
title: "[LOGBOOK] Integrated Emergency Stop System Design for Autonomous Vessels"
date: "8 January 2026"
author: "M. Faridz"
description: "Designing a battery management system to maintain power efficiency for up to 45 minutes during competition."
image: "/images/research/electric-mechanic/schematic.webp"
tags: ["Emergency System", "ASV"]
---

## Introduction

In the development of autonomous vessels, operational safety is as critical as navigation accuracy and control performance. Unlike manually operated platforms, autonomous systems must be capable of responding to critical failures without human intervention while maintaining predictable and verifiable behavior.

To address this requirement, a dedicated **Emergency Stop System (ESS)** was designed as an integrated safety layer that ensures immediate, reliable, and fail-safe shutdown of propulsion and control outputs under emergency conditions.

---

## 1. Why an Integrated Emergency Stop System?

Conventional emergency stop implementations often rely solely on direct power cut-off mechanisms. While simple, this approach can result in uncontrolled shutdown behavior, loss of system awareness, and limited diagnostic capability.

For autonomous vessels, such limitations are unacceptable. An integrated Emergency Stop System provides:

- Deterministic and repeatable shutdown behavior  
- System-level awareness of emergency conditions  
- Controlled transition into a safe operational state  
- Protection against software faults and communication failures  

This approach enhances safety without compromising system observability or post-event analysis.

---

## 2. System Design Overview

The Emergency Stop System is implemented as an independent safety module positioned between the autopilot and the propulsion subsystem. Its primary objective is to enforce predictable, hardware-level safety behavior regardless of the state of the autonomy software.

Key design characteristics include:

- Hardware-based power isolation using relay mechanisms  
- Independent emergency logic with minimal software dependency  
- Redundant emergency trigger paths  
- Fail-safe default behavior during power or signal loss  

This architecture ensures that emergency stop functionality remains operational even under partial system failure.

---

### 2.1 Emergency Stop System Schematic

The following schematic illustrates the hardware implementation of the Emergency Stop System. It represents the physical realization of the system architecture described above, detailing how power, emergency inputs, isolation elements, and indicators interact to enforce safe operation.

![Emergency Stop System Schematic](/images/research/electric-mechanic/schematic.webp)

Key schematic elements include:

- **X1 – Power Input:**  
  Serves as the main power entry point for the Emergency Stop System, supplying energy to control logic, relay drivers, and status indicators.

- **X2 – Emergency Stop Button:**  
  Connected as a normally-closed (NC) input to ensure fail-safe behavior. Any button activation or wiring failure immediately triggers the emergency state.

- **Relay Isolation Stage:**  
  Physically disconnects propulsion and actuator power lines when an emergency condition is detected, providing hardware-level enforcement.

- **LSP – Status Indicator Lamps:**  
  Red and green indicators provide immediate visual feedback, distinguishing between normal operation and active emergency states.

This schematic ensures that emergency response remains deterministic, observable, and independent of higher-level autonomy functions.

---

## 3. Emergency Trigger Conditions

To maximize fault tolerance, the system continuously monitors multiple independent emergency trigger sources, including:

- Manual emergency stop activation  
- Loss of control or communication signals  
- Electrical anomalies or power instability  
- Autopilot-generated failsafe events  
- Internal watchdog timeout conditions  

By combining both manual and automatic triggers, the system avoids single points of failure and ensures robust emergency detection.

---

## 4. Shutdown and Isolation Strategy

Upon detection of an emergency condition, the system executes a structured and deterministic shutdown sequence:

- Immediate relay-based isolation of propulsion power  
- Termination of actuator control signals  
- Latching of the emergency state to prevent unintended restart  

This multi-layered isolation strategy guarantees that the vessel transitions into a stable and predictable safe state.

---

## 5. Autonomous Abort Logic

When operating conditions permit, the Emergency Stop System supports an autonomous abort mechanism rather than an abrupt power removal. This behavior includes:

- Cancellation of ongoing autonomous tasks  
- Transition into a predefined safe or idle mode  
- Preservation of system state data for diagnostics  

This approach improves transparency, safety validation, and post-mission analysis.

---

## 6. System Feedback and Monitoring

Emergency status information is transmitted to the monitoring system in real time, enabling:

- Clear identification of emergency causes  
- Improved situational awareness for operators  
- Comprehensive logging for diagnostics and validation  

All emergency events are recorded to support continuous system improvement and reliability assessment.

---

## 7. Reliability and Safety Considerations

The Emergency Stop System is designed for reliable operation in demanding environments. Emphasis is placed on hardware-level fail-safe mechanisms to ensure consistent behavior under electrical noise, partial failures, or unexpected system states.

This design philosophy prioritizes safety, predictability, and long-term operational robustness.

---

## Conclusion

The integrated Emergency Stop System forms a critical safety foundation for autonomous vessel operations. By combining independent hardware isolation, structured emergency logic, and clear system feedback, the design ensures reliable shutdown behavior, fault tolerance, and enhanced operational safety.
