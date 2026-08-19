---
title: "[LOGBOOK] Object Detection Implementation Using YOLOv4-Tiny for Autonomous Surface Vehicles"
date: "13 December 2025"
author: "Firizqi Aditya"
description: "Documenting the implementation, training, optimization, and performance evaluation of YOLOv4-Tiny for real-time object detection on NVIDIA Jetson Nano during Roboboat 2026 development."
image: "/images/improvements/vision.webp"
tags: ["Object Detection", "YOLOv4-Tiny", "Computer Vision", "Jetson Nano", "Autonomous Surface Vehicle"]
---

# Object Detection Using YOLOv4-Tiny

Object detection is a core perception capability required for autonomous surface vehicles (ASVs) to safely navigate and execute competition tasks such as **Evacuation Route**, **Debris Clearance**, **Emergency Response Sprint**, and **Navigate the Marina**.

This logbook documents the implementation and evaluation of **YOLOv4-Tiny** as the primary object detection model deployed on the **NVIDIA Jetson Nano** for real-time autonomous operation.

---

## 1. Model Selection Rationale

During early development, both **YOLOv4** and **YOLOv4-Tiny** were evaluated to determine the most suitable architecture for real-time inference on embedded hardware.

Although YOLOv4 provides higher detection accuracy (mAP), experimental evaluation shows that it suffers from:

- Lower frame rates in complex scenes  
- Higher computational load  
- Less stable real-time performance on embedded platforms  

To ensure reliable perception during autonomous missions, **YOLOv4-Tiny was selected** due to its significantly higher and more stable frame rate while maintaining acceptable detection accuracy.

---

## 2. Dataset Preparation and Training Configuration

The object detection model was trained using a custom dataset with the following characteristics:

- **Total images:** 500 labeled images  
- **Number of classes:** 7  
- **Dataset split:**
  - 70% training  
  - 20% validation  
  - 10% testing  

### 2.1 Training Resolution Selection

Based on experimental evaluation, the **training input resolution was fixed at 640 × 352 pixels**.

This resolution was selected because:

- It provides a strong balance between detection accuracy and inference speed  
- It matches the aspect ratio of the onboard camera stream  
- It minimizes unnecessary image scaling during inference  

### 2.2 Input Stream Resolution

The **live camera input stream** used during inference testing was also configured to **640 × 352**, ensuring consistency between:

- Training data resolution  
- Network input size  
- Real-time deployment conditions  

This configuration reduces distortion and improves detection stability during continuous operation.

---

## 3. Training and Optimization Process

All models were trained using the **Darknet framework** with consistent hyperparameter configurations:

- Maximum iterations: **6000 (max_batches)**  
- Identical learning rate scheduling  
- Uniform data augmentation strategy  

The trained YOLOv4-Tiny model was converted into **TensorRT format** and deployed on the NVIDIA Jetson Nano using **FP16 precision**, enabling accelerated inference and reduced computational load.

---

## 4. Performance Evaluation Methodology

Performance evaluation focused on two primary metrics:

- **Mean Average Precision (mAP@0.5)** for detection accuracy  
- **Frames Per Second (FPS)** for real-time performance  

Inference tests were conducted by running direct detection on a live camera stream using the Jetson Nano platform under realistic operational conditions.

---

## 5. Experimental Results Summary

The table below summarizes the observed performance of YOLOv4 and YOLOv4-Tiny across multiple input resolutions.

### Table 1. Object Detection Performance on Jetson Nano (TensorRT FP16)

| Model           | Input Resolution | mAP@0.5 | FPS |
|-----------------|------------------|---------|-----|
| YOLOv4          | 416 × 416        | 79.02%  | 12 – 13 |
| YOLOv4          | 608 × 608        | 84.41%  | 5 – 6 |
| YOLOv4          | 640 × 352        | 84.88%  | 9 – 11 |
| YOLOv4-Tiny     | 416 × 416        | 72.78%  | 40 – 42 |
| YOLOv4-Tiny     | 608 × 608        | 79.55%  | 19 – 20 |
| **YOLOv4-Tiny** | **640 × 352**    | **81.69%** | **29 – 32** |
| YOLOv4-Tiny     | 960 × 544        | 83.17%  | 12 – 14 |

---

## 6. Analysis and Design Decision

Although YOLOv4 achieves higher absolute mAP values, its frame rate decreases significantly as input resolution increases, making it less suitable for real-time autonomous operation.

YOLOv4-Tiny demonstrates:

- Faster training time  
- Significantly higher and more stable FPS  
- Competitive mAP that can be improved through hyperparameter tuning and dataset refinement  

The **640 × 352 resolution** provides an optimal operating point where detection accuracy remains high while maintaining real-time performance suitable for complex autonomous tasks.

---

## 7. System Integration

Detection outputs from YOLOv4-Tiny are integrated into the ROS-based perception pipeline and combined with:

- 2D LiDAR data  
- GPS and IMU information  

This sensor fusion output supports obstacle avoidance, waypoint adjustment, and autonomous decision-making.

---

## Conclusion

The implementation of **YOLOv4-Tiny at 640 × 352 resolution** successfully meets the real-time perception requirements of the autonomous surface vehicle.

By aligning dataset resolution, training configuration, and live inference input size, the system achieves:

- Stable real-time detection  
- Efficient resource utilization  
- Reliable performance in complex maritime environments  

This approach represents a balanced and practical object detection solution for embedded autonomous maritime systems.

---