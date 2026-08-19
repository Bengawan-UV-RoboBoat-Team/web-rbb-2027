---
title: "[LOGBOOK] GPS Testing and Analysis"
date: "11 January 2026"
author: "Rafi Adhitya"
description: "Designing a battery management system to maintain power efficiency for up to 45 minutes during competition."
image: "/images/research/electric-mechanic/rtk.webp"
tags: [GPS, RTK, Navigation]
---

## Introduction

The Mandakini Raiden navigation system utilizes a GPS module as the primary component for determining the real-time position of the unmanned surface vessel. The reliability and accuracy of the navigation system are critical to mission success, particularly for operations that require high positional precision such as waypoint tracking and precise maneuvering.

To enhance positional accuracy, the GPS system was evaluated under several positioning solution modes, namely 3D Fix, RTK Float, and RTK Fixed. This testing aims to analyze the performance of each mode and to quantify the accuracy improvements achieved through the integration of RTK technology.

---

## Challenges

The main challenges encountered during GPS testing include variations in GNSS signal quality due to environmental conditions, multipath effects caused by surrounding structures, and convergence time required for RTK solutions to stabilize. These factors can influence the consistency and reliability of the positional data collected during testing.

---

## Main Component

- RTK-enabled GPS Module  
- Pixhawk Flight Controller  
- RTK Base Station  
- Telemetry Radio  
- Power Distribution System  

---

## Testing Metodhs

GPS testing was conducted by measuring vertical and horizontal position accuracy at several predefined waypoints. Each waypoint was tested three times for each GPS positioning mode: 3D Fix, RTK Float, and RTK Fixed.

The total positional error, referred to as overshoot, was calculated using the Euclidean distance approach:

Overshoot = sqrt((Vertical Accuracy)^2 + (Horizontal Accuracy)^2)

This calculation provides a single metric representing the overall positional deviation from the target waypoint in meters.

---

## Implementation

The testing procedure was carried out by positioning the vessel at predefined waypoints and recording vertical and horizontal accuracy data directly from the navigation system. All tests were performed under identical hardware configurations and similar environmental conditions to ensure consistency and fair performance comparison among the GPS modes.

---

## Result and Analysis

The results of the GPS testing are summarized in **Table 1**, **Table 2**, and **Table 3**, which respectively present the positioning accuracy results for the 3D Fix, RTK Float, and RTK Fixed modes.

Analysis of the results indicates that the 3D Fix mode exhibits the largest positional error, reflecting the limitations of standalone GNSS positioning. The RTK Float mode demonstrates a significant reduction in overshoot, indicating improved accuracy through differential corrections, although some variability between measurements remains.

The RTK Fixed mode provides the best performance, achieving the lowest and most consistent overshoot values across all waypoints. This confirms that the navigation system is capable of centimeter-level positioning accuracy when RTK ambiguity resolution is fully fixed.

## Table 1. GPS Accuracy Test Results Using 3D Fix Mode

| Waypoint | Test | Vertical Accuracy (m) | Horizontal Accuracy (m) | Overshoot (m) | GPS Status |
|---------:|-----:|----------------------:|------------------------:|--------------:|------------|
| 1 | 1 | 2.22 | 1.18 | 2.52 | 3D Fix |
|   | 2 | 2.32 | 1.17 | 2.60 | 3D Fix |
|   | 3 | 2.26 | 1.22 | 2.57 | 3D Fix |
| 2 | 1 | 2.21 | 1.10 | 2.47 | 3D Fix |
|   | 2 | 2.26 | 1.13 | 2.53 | 3D Fix |
|   | 3 | 2.30 | 1.16 | 2.58 | 3D Fix |
| 3 | 1 | 2.13 | 1.09 | 2.39 | 3D Fix |
|   | 2 | 2.10 | 1.10 | 2.37 | 3D Fix |
|   | 3 | 2.14 | 1.11 | 2.41 | 3D Fix |
| 4 | 1 | 2.20 | 1.16 | 2.49 | 3D Fix |
|   | 2 | 2.21 | 1.15 | 2.49 | 3D Fix |
|   | 3 | 2.20 | 1.16 | 2.48 | 3D Fix |

## Table 2. GPS Accuracy Test Results Using RTK Float Mode

| Waypoint | Test | Vertical Accuracy (m) | Horizontal Accuracy (m) | Overshoot (m) | GPS Status |
|---------:|-----:|----------------------:|------------------------:|--------------:|------------|
| 1 | 1 | 0.22 | 0.13 | 0.26 | RTK Float |
|   | 2 | 0.17 | 0.10 | 0.20 | RTK Float |
|   | 3 | 0.15 | 0.10 | 0.18 | RTK Float |
| 2 | 1 | 0.17 | 0.10 | 0.20 | RTK Float |
|   | 2 | 0.13 | 0.10 | 0.16 | RTK Float |
|   | 3 | 0.12 | 0.09 | 0.15 | RTK Float |
| 3 | 1 | 0.12 | 0.10 | 0.16 | RTK Float |
|   | 2 | 0.13 | 0.12 | 0.18 | RTK Float |
|   | 3 | 0.23 | 0.15 | 0.27 | RTK Float |
| 4 | 1 | 0.20 | 0.16 | 0.26 | RTK Float |
|   | 2 | 0.17 | 0.15 | 0.23 | RTK Float |
|   | 3 | 0.15 | 0.12 | 0.19 | RTK Float |

## Table 3. GPS Accuracy Test Results Using RTK Fixed Mode

| Waypoint | Test | Vertical Accuracy (m) | Horizontal Accuracy (m) | Overshoot (m) | GPS Status |
|---------:|-----:|----------------------:|------------------------:|--------------:|------------|
| 1 | 1 | 0.03 | 0.02 | 0.04 | RTK Fixed |
|   | 2 | 0.02 | 0.02 | 0.03 | RTK Fixed |
|   | 3 | 0.05 | 0.03 | 0.06 | RTK Fixed |
| 2 | 1 | 0.03 | 0.02 | 0.04 | RTK Fixed |
|   | 2 | 0.02 | 0.01 | 0.02 | RTK Fixed |
|   | 3 | 0.03 | 0.01 | 0.04 | RTK Fixed |
| 3 | 1 | 0.04 | 0.02 | 0.05 | RTK Fixed |
|   | 2 | 0.05 | 0.02 | 0.02 | RTK Fixed |
|   | 3 | 0.02 | 0.01 | 0.02 | RTK Fixed |
| 4 | 1 | 0.02 | 0.01 | 0.02 | RTK Fixed |
|   | 2 | 0.03 | 0.02 | 0.04 | RTK Fixed |
|   | 3 | 0.02 | 0.01 | 0.02 | RTK Fixed |


---

## Conclusion

Based on the GPS testing results, it can be concluded that the integration of RTK technology significantly enhances the accuracy and stability of the Mandakini Raiden navigation system. While the 3D Fix mode is sufficient for basic navigation tasks, RTK Float and RTK Fixed modes offer substantial improvements in positioning precision. In particular, the RTK Fixed mode is highly recommended for missions requiring high-accuracy and reliable autonomous navigation.

---
