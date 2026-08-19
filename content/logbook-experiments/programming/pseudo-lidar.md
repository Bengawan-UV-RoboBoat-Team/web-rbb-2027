---
title: "[EXPERIMENT] Pseudo 3D LiDAR Using a 2D RPLiDAR-A2M12"
date: "2 January 2026"
author: "Elsya Bekti N."
description: "Implementation of a tilting 2D LiDAR mechanism for 3D point cloud generation, including coordinate transformation analysis and performance evaluation for RoboBoat 2026."
image: "/images/research/programming/lidar.webp"
tags: ["LiDAR", "Pseudo 3D", "ROS Melodic", "Point Cloud", "Robotics", "Jetson Nano"]
---

# Pseudo 3D LiDAR Development and Evaluation

In autonomous navigation, 2D LiDAR systems have inherent limitations when detecting objects with vertical variation, such as dock structures or overhanging obstacles. This experiment documents the development of a **Pseudo 3D LiDAR** by combining an **RPLiDAR-A2M12** sensor with a mechanical tilting mechanism.

---

## 1. Motion Mechanism and Actuation

To obtain the third dimension ($Z$), the 2D LiDAR is mounted on a vertically actuated tilting platform.

- **Motion Scheme:** Continuous *oscillating* motion.  
- **Actuator:** PowerHD 180° servo motor.  
- **Design Rationale:** This approach was selected for its mechanical simplicity during early prototyping, as opposed to *continuous rotation* systems that require a slip ring.

### Angle Synchronization

Synchronization between LiDAR range data and the servo elevation angle is achieved through PWM calibration:

- **$0^{\circ}$ (Default Angle):** Defined at PWM 1500.  
- **Minimum Angle:** Measured at PWM 2600.  
- **Maximum Angle:** Measured at PWM 700.  

---

## 2. Coordinate Transformation (ROS Laser Assembler)

The RPLiDAR outputs 2D polar measurements ($d, \theta$). To construct a 3D point cloud, these measurements must be transformed using the servo elevation angle ($\phi$). This experiment employs the **laser_assembler** package under **ROS Melodic**.

Mathematically, the conversion to 3D Cartesian coordinates follows:

$$x = d \cdot \cos(\theta) \cdot \cos(\phi)$$  
$$y = d \cdot \sin(\theta) \cdot \cos(\phi)$$  
$$z = d \cdot \sin(\phi)$$

(refresh browser if equation does not appear)

Within the ROS ecosystem, this process is automated via the `tf` (Transform Tree), linking the vehicle’s `base_link` to the `laser_frame` through an intermediate `servo_link`.

---

## 3. Experimental Results and Performance Metrics

All experiments were conducted using an NVIDIA Jetson Nano for data processing and point cloud visualization.

### Table 1. Technical Specifications and Performance of the Pseudo 3D LiDAR

| Parameter | Experimental Result |
| :--- | :--- |
| **Field of View (FOV)** | Horizontal 360°, Vertical 180° (−90° to 90°) |
| **Update Rate (Scan Cycle)** | **7 seconds per frame** |
| **CPU Load (Jetson Nano)** | Relatively low (light point cloud processing) |
| **Primary Sensor** | RPLiDAR-A2M12 (Triangulation-based) |
| **Test Environment** | Indoor & Outdoor |

---

## 4. Evaluation and Implementation Challenges

Although the system successfully produced a 3D representation of obstacles—particularly beneficial for detecting structures during *docking* maneuvers that are difficult to capture with pure 2D scans—several critical limitations were identified:

1. **High Latency:** A 7-second scan cycle is far too slow for dynamic ASV (*Autonomous Surface Vehicle*) navigation, significantly increasing collision risk at higher vessel speeds.  
2. **Data Stability:** Without IMU integration to compensate for *pitch* and *roll* induced by wave motion, the reconstructed point cloud exhibits noticeable distortion and drift.  
3. **Sensor Limitations:** The RPLiDAR-A2M12 relies on triangulation, whose performance degrades severely under direct sunlight, making it unsuitable for outdoor RoboBoat competition conditions.

---

## 5. Conclusions and Design Decision

This Pseudo 3D LiDAR experiment provides a valuable proof of concept, highlighting the importance of multi-dimensional *spatial awareness* in autonomous navigation. However, based on the evaluation results:

- **The system was not adopted** for the main competition due to its insufficient update rate.  
- The team decided to await the deployment of *native* 3D LiDAR solutions (such as solid-state or multibeam LiDARs) offering significantly higher refresh rates.  
- Current development efforts have shifted toward vision-based sensing (YOLOv4-Tiny) to improve detection of objects that are poorly perceived by 2D LiDAR alone.

---